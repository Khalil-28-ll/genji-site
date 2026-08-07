import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Crest from './Crest';
import {
  auxiliaryNodes,
  buildMindEdges,
  characterById,
  characters,
  GROUP_ANCHOR,
  GROUP_LABEL,
  LAYOUT,
  MAP_H,
  MAP_W,
  RELATION_TYPE_LABEL,
  RELATION_STYLE,
  type MindEdge,
} from '../data/characters';

interface VBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

const FULL_VIEW: VBox = { x: 0, y: 0, w: MAP_W, h: MAP_H };

function edgePath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ox = (-dy / len) * 20;
  const oy = (dx / len) * 20;
  return `M ${x1} ${y1} Q ${mx + ox} ${my + oy} ${x2} ${y2}`;
}

/** 聚焦某角色：以其本人与直接邻居的包围盒计算缩放后的 viewBox */
function egoViewBox(id: string, edges: MindEdge[]): VBox {
  const ids = new Set([id]);
  for (const e of edges) {
    if (e.from === id) ids.add(e.to);
    if (e.to === id) ids.add(e.from);
  }
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const nid of ids) {
    const p = LAYOUT[nid];
    if (!p) continue;
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  if (!Number.isFinite(minX)) return FULL_VIEW;
  const pad = 150;
  const w = Math.min(Math.max(maxX - minX + pad * 2, 760), 1160);
  const h = Math.min(Math.max(maxY - minY + pad * 2, 520), 780);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const x = Math.max(0, Math.min(cx - w / 2, MAP_W - w));
  const y = Math.max(0, Math.min(cy - h / 2, MAP_H - h));
  return { x, y, w, h };
}

function useAnimatedViewBox(target: VBox) {
  const [vb, setVb] = useState<VBox>(FULL_VIEW);
  const vbRef = useRef(vb);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = vbRef.current;
    const to = target;
    if (from.x === to.x && from.y === to.y && from.w === to.w && from.h === to.h) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      vbRef.current = to;
      setVb(to);
      return;
    }
    const start = performance.now();
    const duration = 560;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const e = ease(t);
      const cur: VBox = {
        x: from.x + (to.x - from.x) * e,
        y: from.y + (to.y - from.y) * e,
        w: from.w + (to.w - from.w) * e,
        h: from.h + (to.h - from.h) * e,
      };
      vbRef.current = cur;
      setVb(cur);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
      else rafRef.current = null;
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [target]);

  return vb;
}

export default function MindMap() {
  const navigate = useNavigate();
  const edges = useMemo(() => buildMindEdges(), []);
  const auxById = useMemo(() => new Map(auxiliaryNodes.map((n) => [n.id, n])), []);
  const [focused, setFocused] = useState<string | null>(null);
  const lastClickRef = useRef<{ id: string; time: number } | null>(null);

  const nameOf = (id: string) => characterById.get(id)?.name ?? auxById.get(id)?.name ?? id;

  const target = useMemo(
    () => (focused ? egoViewBox(focused, edges) : FULL_VIEW),
    [focused, edges],
  );
  const vb = useAnimatedViewBox(target);

  const egoSet = useMemo(() => {
    if (!focused) return null;
    const set = new Set([focused]);
    for (const e of edges) {
      if (e.from === focused) set.add(e.to);
      if (e.to === focused) set.add(e.from);
    }
    return set;
  }, [focused, edges]);

  const focusedChar = focused ? characterById.get(focused) : undefined;
  const focusedAux = focused ? auxById.get(focused) : undefined;

  const neighborNames = useMemo(() => {
    if (!egoSet || !focused) return [];
    return [...egoSet]
      .filter((id) => id !== focused)
      .map(nameOf);
  }, [egoSet, focused, nameOf]);

  useEffect(() => {
    if (!focused) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFocused(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [focused]);

  const reset = () => setFocused(null);

  const handleNodeClick = (id: string) => {
    const now = Date.now();
    const prev = lastClickRef.current;
    if (prev && prev.id === id && now - prev.time < 450) {
      lastClickRef.current = null;
      navigate(`/characters/${id}`);
      return;
    }
    lastClickRef.current = { id, time: now };
    setFocused(id);
  };

  return (
    <div className={`mindmap-frame${focused ? ' is-focused' : ''}`}>
      <div className="mindmap-toolbar">
        <span className="mindmap-tip">单击角色，放大其关系网；双击节点，进入介绍。</span>
        {focused && (
          <button type="button" className="mindmap-reset" onClick={reset}>
            恢复全局图
          </button>
        )}
      </div>
      <svg
        viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
        className={`mindmap${focused ? ' is-focused' : ''}`}
        role="img"
        aria-label="源氏物语家族关系思维导图"
      >
        <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="var(--paper)" />
        {Object.entries(GROUP_ANCHOR).map(([group, p]) => (
          <text
            key={group}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            className="mindmap-group-label"
            opacity={focused ? 0.18 : 0.75}
          >
            {GROUP_LABEL[group as keyof typeof GROUP_LABEL]}
          </text>
        ))}
        {edges.map((e) => {
          const a = LAYOUT[e.from];
          const b = LAYOUT[e.to];
          if (!a || !b) return null;
          const auxEdge = !characterById.has(e.from) || !characterById.has(e.to);
          const inEgo = egoSet ? egoSet.has(e.from) && egoSet.has(e.to) : false;
          const dimmed = focused !== null && !inEgo;
          const style = RELATION_STYLE[e.type];
          const dash = style.dash ?? (auxEdge ? '4 5' : undefined);
          return (
            <path
              key={`${e.from}|${e.to}`}
              d={edgePath(a.x, a.y, b.x, b.y)}
              fill="none"
              stroke={style.color}
              strokeWidth={focused && inEgo ? 3.5 : auxEdge ? 1.6 : 2.4}
              strokeDasharray={dash}
              strokeLinecap="round"
              opacity={dimmed ? 0.06 : focused && inEgo ? 0.95 : 0.72}
              className="mindmap-edge"
            >
              <title>
                {nameOf(e.from)} — {nameOf(e.to)}：{RELATION_TYPE_LABEL[e.type]}
              </title>
            </path>
          );
        })}
        {auxiliaryNodes.map((n) => {
          const p = LAYOUT[n.id];
          if (!p) return null;
          const dimmed = focused !== null && !egoSet?.has(n.id);
          return (
            <g
              key={n.id}
              className={`mind-node mind-node-aux${dimmed ? ' is-dimmed' : ''}${focused === n.id ? ' is-focused' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={`${n.name}：${n.note}，单击查看其关系`}
              onClick={() => setFocused(n.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setFocused(n.id);
                }
              }}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={focused === n.id ? 22 : 16}
                fill="var(--paper-deep)"
                stroke="var(--line)"
                strokeWidth="1.4"
                strokeDasharray="4 4"
              />
              <text x={p.x} y={p.y + 34} textAnchor="middle" className="mind-node-label-aux">
                {n.name}
              </text>
              <title>
                {n.name}（{n.nameJp}）· {n.note}
              </title>
            </g>
          );
        })}
        {characters.map((c) => {
          const p = LAYOUT[c.id];
          if (!p) return null;
          const isCenter = c.id === 'genji';
          const isFocused = focused === c.id;
          const dimmed = focused !== null && !egoSet?.has(c.id);
          const r = isCenter ? 42 : 30;
          return (
            <g
              key={c.id}
              className={`mind-node${isCenter ? ' mind-node-center' : ''}${dimmed ? ' is-dimmed' : ''}${isFocused ? ' is-focused' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={`${c.name}，单击聚焦关系网，双击进入介绍`}
              onClick={() => handleNodeClick(c.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (focused === c.id) navigate(`/characters/${c.id}`);
                  else setFocused(c.id);
                }
              }}
            >
              {isFocused && <circle cx={p.x} cy={p.y} r={r + 9} className="mind-node-halo" />}
              <circle
                cx={p.x}
                cy={p.y}
                r={r}
                fill="var(--paper)"
                stroke={isCenter ? 'var(--gold)' : 'var(--ink-soft)'}
                strokeWidth={isFocused ? 3 : isCenter ? 2.2 : 1.6}
              />
              <text x={p.x} y={p.y + (r + 17)} textAnchor="middle" className="mind-node-label">
                {c.name}
              </text>
              <title>
                {c.name}（{c.nameJp}）· {c.identity}
              </title>
            </g>
          );
        })}
      </svg>

      {focused && (focusedChar || focusedAux) && (
        <aside className="mindmap-focus-card" aria-label="聚焦角色信息">
          <div className="focus-card-head">
            <Crest
              glyph={focusedChar?.symbols[0]?.glyph ?? 'default'}
              size={46}
            />
            <div className="focus-card-title">
              <p className="focus-card-name">{focusedChar?.name ?? focusedAux?.name}</p>
              <p className="focus-card-namejp">
                {focusedChar?.nameJp ?? focusedAux?.nameJp}
              </p>
            </div>
            <button
              type="button"
              className="focus-card-close"
              onClick={reset}
              aria-label="关闭聚焦"
            >
              ×
            </button>
          </div>
          <p className="focus-card-note">
            {focusedChar ? focusedChar.identity : focusedAux?.note}
          </p>
          {neighborNames.length > 0 && (
            <p className="focus-card-neighbors">
              <span>关系网</span>
              {neighborNames.join(' · ')}
            </p>
          )}
          <div className="focus-card-actions">
            {focusedChar ? (
              <Link to={`/characters/${focusedChar.id}`} className="focus-card-link">
                查看完整介绍
              </Link>
            ) : (
              <span className="focus-card-aux-note">相关人物，暂无独立介绍页</span>
            )}
            <button type="button" className="focus-card-reset" onClick={reset}>
              恢复全局图
            </button>
          </div>
          <p className="focus-card-hint">
            {focusedChar ? '双击节点亦可进入介绍 · Esc 关闭聚焦' : 'Esc 关闭聚焦'}
          </p>
        </aside>
      )}
    </div>
  );
}
