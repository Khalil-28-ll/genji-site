import { Link } from 'react-router-dom';
import { characters } from '../data/characters';
import { GENJI_AGE } from '../data/chronology';

export default function ChronologyPage() {
  return (
    <div className="chronology-page">
      <header className="chronology-head">
        <p className="chronology-eyebrow">源氏物語 · 年立</p>
        <h1>源氏年立对照表</h1>
        <p className="chronology-lead">
          以光源氏年龄为轴，标定 54 帖的叙事时间，并列出主要人物的生卒/终局位置。
          年立依据本地研读笔记与通行研究整理；学界存在一期、二期年立等不同体系，凡无定论处一律标“约”。
        </p>
        <Link to="/" className="text-link">
          返回首页
        </Link>
      </header>

      <section className="chronology-section">
        <h2>54 帖 × 源氏年龄</h2>
        <div className="chronology-table-wrap">
          <table className="chronology-table">
            <thead>
              <tr>
                <th>帖序</th>
                <th>帖名</th>
                <th>源氏年龄</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              {GENJI_AGE.map((e) => (
                <tr key={e.chapter}>
                  <td className="chron-num">{e.num}</td>
                  <td className="chron-name">{e.chapter}</td>
                  <td className="chron-age">{e.age}</td>
                  <td className="chron-note">{e.note ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="chronology-section">
        <h2>主要人物生卒一览</h2>
        <div className="chronology-table-wrap">
          <table className="chronology-table">
            <thead>
              <tr>
                <th>人物</th>
                <th>生（出场）</th>
                <th>卒（终局）</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((c) => (
                <tr key={c.id}>
                  <td className="chron-name">
                    <Link to={`/characters/${c.id}`}>{c.name}</Link>
                  </td>
                  <td>{c.life.birth}</td>
                  <td>{c.life.death}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="chronology-note">
          说明：书中人物均为虚构，生卒以“帖名＋源氏年龄”标定；标注“书中未明示”者，系原书未给出明确信息。
        </p>
      </section>
    </div>
  );
}
