import { Link } from 'react-router-dom';
import {
  characterById,
  CHAPTER_NUM,
  type Character,
} from '../data/characters';
import { famousWaka, type WakaEntry } from '../data/waka';

function chapterLabel(chapter: string) {
  const num = CHAPTER_NUM[chapter];
  return num ? `第${num}帖 · ${chapter}` : chapter;
}

function WakaCard({ waka }: { waka: WakaEntry }) {
  const character: Character | undefined = waka.characterId
    ? characterById.get(waka.characterId)
    : undefined;
  return (
    <article className="waka-card">
      <p className="waka-chapter">{chapterLabel(waka.chapter)}</p>
      <p className="waka-jp">{waka.jp}</p>
      <p className="waka-zh">{waka.zh}</p>
      <div className="waka-meta">
        {waka.speaker && <span className="waka-speaker">{waka.speaker}</span>}
        {character ? (
          <Link to={`/characters/${character.id}`} className="waka-link">
            {character.name}
          </Link>
        ) : null}
      </div>
      {waka.note && <p className="waka-note">{waka.note}</p>}
    </article>
  );
}

export default function WakaPage() {
  return (
    <div className="waka-page">
      <header className="waka-head">
        <p className="waka-eyebrow">源氏物語 · 和歌名句</p>
        <h1>和歌名句集</h1>
        <p className="waka-lead">
          全书约八百首和歌。这里精选二十一首传诵较广的名句，
          按帖序排列；原文以与谢野晶子现代日语本为底，大意系编者所译。
        </p>
        <Link to="/" className="text-link">
          返回首页
        </Link>
      </header>
      <div className="waka-grid">
        {famousWaka.map((w) => (
          <WakaCard key={w.id} waka={w} />
        ))}
      </div>
    </div>
  );
}
