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
          年立以丰子恺译本（人民文学出版社）各回回末注文为基准，即学界所称“二期年立”；
          丰译本注文付阙或与正文年代有出入处，一律标“约”并注明。
          云隐帖（第 41 帖）之后源氏已殁，42—54 帖改用薰年龄标定。
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
                <th>薰年龄（42 帖起）</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              {GENJI_AGE.map((e) => (
                <tr key={e.chapter}>
                  <td className="chron-num">{e.num}</td>
                  <td className="chron-name">{e.chapter}</td>
                  <td className="chron-age">{e.age}</td>
                  <td className="chron-age">{e.kaoruAge ?? '—'}</td>
                  <td className="chron-note">{e.note ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="chronology-note">
          说明：42—54 帖发生在源氏死后，以薰年龄为时代基准；竹河帖系追叙（薰 14—23 岁），
          桥姬帖回退至薰 20—22 岁，均为原书叙事结构使然，非年立错误。
        </p>
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
          说明：书中人物均为虚构，生卒以“帖名＋源氏年龄/薰年龄”标定（源氏死后以薰年龄为基准）；
          标注“书中未明示”者，系原书未给出明确信息。
        </p>
      </section>
    </div>
  );
}
