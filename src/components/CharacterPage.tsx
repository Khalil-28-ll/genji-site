import { Link, useParams } from 'react-router-dom';
import Crest from './Crest';
import {
  characterById,
  characters,
  auxiliaryNodes,
  CHAPTER_NUM,
  GROUP_LABEL,
  RELATION_TYPE_LABEL,
  type Relation,
} from '../data/characters';

const auxById = new Map(auxiliaryNodes.map((n) => [n.id, n]));

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

export default function CharacterPage() {
  const { id } = useParams();
  const character = id ? characterById.get(id) : undefined;
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

      <p className="character-identity">{character.identity}</p>

      <section className="character-section">
        <h2>简介</h2>
        <p>{character.summary}</p>
      </section>

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

      <section className="character-section">
        <h2>人物关系</h2>
        <div className="relations">
          {character.relations.map((r) => (
            <RelationItem key={r.targetId} relation={r} />
          ))}
        </div>
      </section>

      {character.quotes.length > 0 && (
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

      {character.evaluations.length > 0 && (
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
      )}

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
