import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Crest from './Crest';
import {
  characterById,
  characters,
  auxiliaryNodes,
  CHAPTER_NUM,
  GROUP_LABEL,
  RELATION_TYPE_LABEL,
  type Character,
  type Relation,
} from '../data/characters';

const auxById = new Map(auxiliaryNodes.map((n) => [n.id, n]));

const PAGES = [
  { n: 1, title: '总览' },
  { n: 2, title: '生平' },
  { n: 3, title: '人物关系' },
  { n: 4, title: '原文引句' },
  { n: 5, title: '评说与出场' },
];

function chapterLabel(name: string) {
  const num = CHAPTER_NUM[name];
  return num ? `第${num}帖 · ${name}` : name;
}

function RelationItem({ relation }: { relation: Relation }) {
  const target = characterById.get(relation.targetId);
  const aux = auxById.get(relation.targetId);
  const typeLabel = RELATION_TYPE_LABEL[relation.type];
  if (target) {
    return (
      <Link to={`/characters/${target.id}`} className="relation-item">
        <span className="relation-type">{typeLabel}</span>
        <span className="relation-name">{target.name}</span>
        <span className="relation-label">{relation.label}</span>
      </Link>
    );
  }
  return (
    <span className="relation-item relation-item-aux">
      <span className="relation-type">{typeLabel}</span>
      <span className="relation-name">{aux?.name ?? relation.targetId}</span>
      <span className="relation-label">{relation.label}</span>
    </span>
  );
}

function Verdict({ character }: { character: Character }) {
  const quote = character.quotes.find((q) => q.jp) ?? character.quotes[0];
  const evaluation = character.evaluations[0];
  if (!quote || !evaluation) return null;
  return (
    <section className="character-section">
      <h2>判词</h2>
      <p className="verdict-note">
        判词取原书和歌一句与古今评语一条，不另拟文字。
      </p>
      <div className="verdict-grid">
        <blockquote className="quote verdict-waka">
          {quote.jp && <p className="quote-jp">{quote.jp}</p>}
          <p className="quote-zh">{quote.zh}</p>
          <footer>——《源氏物语·{quote.chapter}》</footer>
        </blockquote>
        <blockquote className="evaluation verdict-eval">
          <p>{evaluation.text}</p>
          <footer>
            —— {evaluation.source}
            {evaluation.paraphrase ? '（转述）' : ''}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

export default function CharacterPage() {
  const { id, page: pageParam } = useParams();
  const navigate = useNavigate();
  const character = id ? characterById.get(id) : undefined;

  const rawPage = Number(pageParam ?? 1);
  const page = Number.isFinite(rawPage)
    ? Math.min(5, Math.max(1, Math.trunc(rawPage)))
    : 1;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id, page]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!character) return;
      if (e.key === 'ArrowLeft' && page > 1) {
        navigate(`/characters/${character.id}/${page - 1}`);
      } else if (e.key === 'ArrowRight' && page < 5) {
        navigate(`/characters/${character.id}/${page + 1}`);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [character, page, navigate]);

  if (!character) {
    return (
      <section className="page narrow notfound">
        <h1>此页不在物语之中</h1>
        <p>你寻找的人物并不存在，如同“云隐”之帖，只留下一个名字。</p>
        <Link to="/" className="text-link">
          返回人物图鉴首页
        </Link>
      </section>
    );
  }

  const index = characters.findIndex((c) => c.id === character.id);
  const prev = characters[(index - 1 + characters.length) % characters.length];
  const next = characters[(index + 1) % characters.length];

  const pageTo = (n: number) => `/characters/${character.id}/${n}`;

  return (
    <article className="character-page">
      <header className="character-head">
        <Crest glyph={character.symbols[0]?.glyph ?? 'default'} size={92} />
        <div className="character-title">
          <p className="character-group">{GROUP_LABEL[character.group]}</p>
          <h1>{character.name}</h1>
          <p className="character-namejp">{character.nameJp}</p>
          {character.alias.length > 0 && (
            <p className="character-alias">{character.alias.join(' · ')}</p>
          )}
        </div>
      </header>

      <nav className="page-tabs" aria-label="角色介绍分页">
        {PAGES.map((p) => (
          <Link
            key={p.n}
            to={pageTo(p.n)}
            className={`page-tab${page === p.n ? ' is-active' : ''}`}
            aria-current={page === p.n ? 'page' : undefined}
          >
            <span className="page-tab-num">{p.n}</span>
            {p.title}
          </Link>
        ))}
      </nav>

      {page === 1 && (
        <>
          <p className="character-identity">{character.identity}</p>
          <section className="character-section">
            <h2>简介</h2>
            <p>{character.summary}</p>
          </section>
          <Verdict character={character} />
          <section className="character-section">
            <h2>象征意象</h2>
            <div className="symbols">
              {character.symbols.map((s) => (
                <div key={s.name} className="symbol">
                  <Crest glyph={s.glyph} size={64} />
                  <div>
                    <p className="symbol-name">
                      {s.name}
                      {s.reading ? <span className="symbol-reading">{s.reading}</span> : null}
                    </p>
                    <p className="symbol-meaning">{s.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {page === 2 && (
        <section className="character-section">
          <h2>生平</h2>
          <ul className="story-list">
            {character.story.map((ev, i) => (
              <li key={i} className="story-item">
                <span className="story-chapter">{chapterLabel(ev.chapter)}</span>
                <span className="story-text">{ev.text}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {page === 3 && (
        <section className="character-section">
          <h2>人物关系</h2>
          <div className="relations">
            {character.relations.map((r) => (
              <RelationItem key={r.targetId} relation={r} />
            ))}
          </div>
        </section>
      )}

      {page === 4 && (
        <section className="character-section">
          <h2>原文引句</h2>
          {character.quotes.map((q, i) => (
            <blockquote key={i} className="quote">
              {q.jp && <p className="quote-jp">{q.jp}</p>}
              <p className="quote-zh">{q.zh}</p>
              <footer>——《源氏物语·{q.chapter}》</footer>
            </blockquote>
          ))}
        </section>
      )}

      {page === 5 && (
        <>
          <section className="character-section">
            <h2>古今评说</h2>
            {character.evaluations.map((e, i) => (
              <blockquote key={i} className="evaluation">
                <p>{e.text}</p>
                <footer>
                  —— {e.source}
                  {e.paraphrase ? '（转述）' : ''}
                </footer>
              </blockquote>
            ))}
          </section>
          <section className="character-section">
            <h2>主要出场帖</h2>
            <div className="chapters">
              {character.chapters.map((c) => (
                <span key={c} className="chapter-chip">
                  {c}
                </span>
              ))}
            </div>
          </section>
        </>
      )}

      <nav className="page-nav" aria-label="翻页">
        {page > 1 ? (
          <Link to={pageTo(page - 1)} className="page-btn">
            ← 上一页
          </Link>
        ) : (
          <span className="page-btn is-disabled">← 上一页</span>
        )}
        <div className="page-dots">
          {PAGES.map((p) => (
            <Link
              key={p.n}
              to={pageTo(p.n)}
              className={`page-dot${page === p.n ? ' is-active' : ''}`}
              title={p.title}
              aria-label={p.title}
            >
              <span />
            </Link>
          ))}
        </div>
        {page < 5 ? (
          <Link to={pageTo(page + 1)} className="page-btn">
            下一页 →
          </Link>
        ) : (
          <span className="page-btn is-disabled">下一页 →</span>
        )}
      </nav>

      <nav className="character-nav" aria-label="相邻角色">
        <Link to={`/characters/${prev.id}`} className="nav-link">
          <span className="nav-direction">前一位</span>
          {prev.name}
        </Link>
        <Link to="/" className="nav-link nav-home">
          返回关系图
        </Link>
        <Link to={`/characters/${next.id}`} className="nav-link nav-next">
          <span className="nav-direction">后一位</span>
          {next.name}
        </Link>
      </nav>
    </article>
  );
}
