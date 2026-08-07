import type { Character } from './types.ts';
import { genji } from './entries/genji.ts';
import { fujitsubo, kiritsuboEmperor, suzaku } from './entries/royal.ts';
import { akashi, aoi, hanachirusato, murasaki, rokujo, yugao } from './entries/wives-a.ts';
import {
  asagao,
  oborozukiyo,
  onnaSannomiya,
  suetsumuhana,
  utsusemi,
} from './entries/wives-b.ts';
import { kashiwagi, tamakazura, touNoChujo, yugiri } from './entries/children.ts';
import { kaoru, niou, ukifune } from './entries/uji.ts';
import { auxEdges, auxiliaryNodes } from './entries/auxiliary.ts';

export type { Character, RelationType, CharacterGroup } from './types.ts';
export {
  CHAPTER_NUM,
  CHAPTER_ORDER,
  GROUP_LABEL,
  RELATION_TYPE_LABEL,
  type AuxEdge,
  type AuxiliaryNode,
  type Evaluation,
  type Quote,
  type Relation,
  type StoryEvent,
  type SymbolInfo,
} from './types.ts';

/** 关系线样式：高区分度传统色 + 线型双编码（dash 为 SVG stroke-dasharray） */
export const RELATION_STYLE: Record<
  import('./types.ts').RelationType,
  { color: string; dash?: string }
> = {
  blood: { color: '#b23a2c' },
  marriage: { color: '#c08a2e' },
  love: { color: '#cf5b70', dash: '9 7' },
  adoption: { color: '#8a63b0', dash: '2 6' },
  rivalry: { color: '#4e6b68', dash: '12 5 3 5' },
  servant: { color: '#4f8f83', dash: '4 5' },
  friend: { color: '#3f6f9e', dash: '7 4' },
};

export const characters: Character[] = [
  genji,
  kiritsuboEmperor,
  fujitsubo,
  suzaku,
  murasaki,
  aoi,
  yugao,
  rokujo,
  akashi,
  hanachirusato,
  onnaSannomiya,
  utsusemi,
  suetsumuhana,
  oborozukiyo,
  asagao,
  touNoChujo,
  yugiri,
  tamakazura,
  kashiwagi,
  kaoru,
  niou,
  ukifune,
];

export { auxiliaryNodes, auxEdges };

export const characterById = new Map(characters.map((c) => [c.id, c]));

/** 思维导图画布尺寸（SVG viewBox 0 0 1800 1200） */
export const MAP_W = 1800;
export const MAP_H = 1200;

/** 思维导图节点坐标（已按 1.1 倍放大并整体平移，适配 1800×1200 画布） */
export const LAYOUT: Record<string, { x: number; y: number }> = {
  'kiritsubo-emperor': { x: 337, y: 183 },
  fujitsubo: { x: 183, y: 326 },
  suzaku: { x: 480, y: 315 },
  'kiritubo-koui': { x: 161, y: 139 },
  reizei: { x: 469, y: 139 },
  kokiden: { x: 315, y: 458 },
  udaijin: { x: 139, y: 469 },
  genji: { x: 920, y: 590 },
  koremitsu: { x: 799, y: 711 },
  murasaki: { x: 1162, y: 249 },
  aoi: { x: 1349, y: 172 },
  yugao: { x: 1096, y: 414 },
  rokujo: { x: 1294, y: 370 },
  akashi: { x: 1503, y: 293 },
  hanachirusato: { x: 1006, y: 552 },
  'onna-sannomiya': { x: 1481, y: 161 },
  utsusemi: { x: 810, y: 469 },
  suetsumuhana: { x: 711, y: 392 },
  oborozukiyo: { x: 1635, y: 260 },
  asagao: { x: 1008, y: 304 },
  'tou-no-chujo': { x: 546, y: 744 },
  kashiwagi: { x: 403, y: 898 },
  'sa-daijin': { x: 700, y: 667 },
  kumoi: { x: 403, y: 722 },
  ochiba: { x: 238, y: 876 },
  yugiri: { x: 656, y: 876 },
  tamakazura: { x: 832, y: 942 },
  'akashi-chugu': { x: 1052, y: 722 },
  akikonomu: { x: 1173, y: 810 },
  kaoru: { x: 1272, y: 920 },
  niou: { x: 1470, y: 898 },
  ukifune: { x: 1613, y: 986 },
  hachimiya: { x: 1206, y: 1063 },
  'dai-no-kimi': { x: 1393, y: 1074 },
  'naka-no-kimi': { x: 1558, y: 1074 },
  'yokawa-sozu': { x: 1701, y: 876 },
};

export const GROUP_ANCHOR: Record<string, { x: number; y: number }> = {
  royal: { x: 315, y: 84 },
  center: { x: 920, y: 557 },
  wives: { x: 1217, y: 84 },
  'left-minister': { x: 458, y: 667 },
  children: { x: 744, y: 667 },
  uji: { x: 1437, y: 667 },
};

export interface MindEdge {
  from: string;
  to: string;
  type: import('./types.ts').RelationType;
}

/** 由角色数据与辅助关系推导全部边（无向、去重） */
export function buildMindEdges(): MindEdge[] {
  const edges: MindEdge[] = [];
  const seen = new Set<string>();
  const push = (from: string, to: string, type: import('./types.ts').RelationType) => {
    const key = [from, to].sort().join('|');
    if (seen.has(key)) return;
    seen.add(key);
    edges.push({ from, to, type });
  };
  for (const c of characters) {
    for (const r of c.relations) {
      push(c.id, r.targetId, r.type);
    }
  }
  for (const e of auxEdges) {
    push(e.from, e.to, e.type);
  }
  return edges;
}
