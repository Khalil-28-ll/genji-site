import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Crest from './Crest';
import {
  characterById,
  characters,
  CHAPTER_NUM,
  GROUP_LABEL,
  RELATION_TYPE_LABEL,
  RELATION_STYLE,
  type Character,
  type Relation,
} from '../data/characters';

const PAGES = [
  { n: 1, title: '总览' },
  { n: 2, title: '生平' },
  { n: 3, title: '人物关系' },
  { n: 4, title: '原文引句' },
  { n: 5, title: '评说与出场' },
];

const STYLE_BY_GROUP: Record<Character['group'], string> = {
  royal: 'style-royal',
  center: 'style-center',
  wives: 'style-wives',
  children: 'style-children',
  'left-minister': 'style-minister',
  uji: 'style-uji',
};

const KIND_LABEL: Record<string, string> = {
  original: '原文引用',
  paraphrase: '转述',
  analysis: '论文分析',
};

function chapterLabel(name: string) {
  const num = CHAPTER_NUM[name];
  return num ? `第${num}帖 · ${name}` : name;
}

function RelationItem({ relation }: { relation: Relation }) {
  const target = characterById.get(relation.targetId);
  const typeLabel = RELATION_TYPE_LABEL[relation.type];
  const style = RELATION_STYLE[relation.type];
  if (target) {
    return (
      <Link to={`/characters/${target.id}`} className="relation-item">
        <span className="relation-type" style={{ borderColor: style.color, color: style.color }}>
          {typeLabel}
        </span>
        <span className="relation-name">{target.name}</span>
        <span className="relation-label">{relation.label}</span>
      </Link>
    );
  }
  return (
    <span className="relation-item relation-item-aux">
      <span className="relation-type" style={{ borderColor: style.color, color: style.color }}>
        {typeLabel}
      </span>
      <span className="relation-name">{relation.targetId}</span>
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

function evaluationKind(e: Character['evaluations'][number]): string {
  return e.kind ?? (e.paraphrase ? 'paraphrase' : 'original');
}

const TERMS: { term: string; explain: string }[] = [
  { term: '女御 / 更衣', explain: '天皇后宫位阶。女御位高，可立为皇后（中宫）；更衣位在其下，多以容貌受宠。' },
  { term: '中宫', explain: '皇后之宫号。平安后期“中宫”与“皇后”并行，中宫多指现任皇后。' },
  { term: '御息所', explain: '对皇族妃妾或高官夫人的敬称，文中专指前东宫妃六条御息所。' },
  { term: '尚侍', explain: '后宫十二司之首（内侍司长官），掌传奏；多为天皇宠妃，亦为高位女官。' },
  { term: '斋院 / 斋宫', explain: '奉祀神明、终身或限期不婚的皇女。斋宫侍伊势神宫，斋院侍贺茂神社。' },
  { term: '准太上天皇', explain: '非天皇而享太上天皇待遇的尊号；源氏以人臣之身获此位，为荣华顶点。' },
  { term: '大将 / 中将', explain: '近卫府武官名。中将为次官，大将为其长官；文中头中将、源氏大将均以此称。' },
  { term: '大臣', explain: '太政官最高官职。左大臣、右大臣分居太政大臣之下，掌国政。' },
  { term: '生霊', explain: '平安时代信仰：活人怨念离体，化为“生霊”加害他人；六条御息所即以此祟人。' },
];

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
    <article className={`character-page ${STYLE_BY_GROUP[character.group]}`}>
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
          <details className="term-glossary">
            <summary>平安官职与称谓小注</summary>
            <dl>
              {TERMS.map((t) => (
                <div key={t.term}>
                  <dt>{t.term}</dt>
                  <dd>{t.explain}</dd>
                </div>
              ))}
            </dl>
          </details>
        </>
      )}

      {page === 2 && (
        <section className="character-section">
          <h2>生平</h2>
          <div className="life-box">
            <div className="life-item">
              <span className="life-kind">生</span>
              <p>{character.life.birth}</p>
            </div>
            <div className="life-item">
              <span className="life-kind">卒</span>
              <p>{character.life.death}</p>
            </div>
            {character.life.note && <p className="life-note">{character.life.note}</p>}
            <Link to="/chronology" className="life-link">
              查看源氏年立表 →
            </Link>
          </div>
          <ul className="story-list">
            {character.story.map((ev, i) => (
              <li key={i} className="story-item">
                <span className="story-chapter">{chapterLabel(ev.chapter)}</span>
                <span className="story-text">
                  {ev.age && <span className="story-age">{ev.age}</span>}
                  {ev.text}
                  {ev.aftermath && <span className="story-aftermath">{ev.aftermath}</span>}
                </span>
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
              <blockquote key={i} className={`evaluation evaluation-${evaluationKind(e)}`}>
                <span className="evaluation-kind">{KIND_LABEL[evaluationKind(e)]}</span>
                <p>{e.text}</p>
                <footer>
                  —— {e.source}
                  {e.link && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="evaluation-link"
                    >
                      {e.linkLabel ?? '来源链接'} ↗
                    </a>
                  )}
                </footer>
              </blockquote>
            ))}
          </section>
          {character.references && character.references.length > 0 && (
            <section className="character-section">
              <h2>延伸阅读</h2>
              <ul className="reference-list">
                {character.references.map((r) => (
                  <li key={r.url + r.title}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      <span className="reference-title">{r.title}</span>
                      {r.note && <span className="reference-note">{r.note}</span>}
                      <span className="reference-url">打开链接 ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
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
