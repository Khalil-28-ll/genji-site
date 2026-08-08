import { Link } from 'react-router-dom';
import MindMap from './MindMap';
import { RELATION_STYLE, RELATION_TYPE_LABEL } from '../data/characters';

const LEGEND = [
  'parent',
  'sibling',
  'marriage',
  'concubine',
  'affair',
  'love',
  'adoption',
  'guardian',
  'servant',
  'friend',
  'rivalry',
  'religious',
] as const;

function dashToCssStyle(dash?: string) {
  if (!dash) return 'solid';
  if (dash === '2 6') return 'dotted';
  return 'dashed';
}

const FAMOUS_EVALUATIONS = [
  {
    quote:
      '本居宣长认为，《源氏物语》的宗旨不在劝善惩恶，而在让人“知物哀”——能感知人情物态之哀，即为有心之人。（转述）',
    source: '本居宣长《源氏物語玉の小櫛》',
    link: 'https://ja.wikipedia.org/wiki/本居宣長',
    linkLabel: '本居宣长 · 维基百科（资料页）',
  },
  {
    quote:
      '“紫式部怜惜浮舟，使她悄悄走向清净之界。她虽然写完了《源氏物语》，却留下了袅袅余韵。”',
    source: '川端康成《哀愁》',
    link: 'https://book.douban.com/subject/34431972/',
    linkLabel: '《哀愁：川端康成散文选》· 豆瓣（资料页）',
  },
];

const EXTENDED_LINKS = [
  {
    title: '源氏物語（与谢野晶子现代日语全译）',
    note: '青空文库公开的现代日语译本，本站引句多以此本为底；此为其桐壶帖全文，全 54 帖同在文库中。',
    link: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
    linkLabel: '青空文库 · 与谢野晶子译（桐壶帖）',
  },
  {
    title: '源氏物語（日本古典原文）',
    note: '维基文库收录的《源氏物语》原文。',
    link: 'https://ja.wikisource.org/wiki/源氏物語',
    linkLabel: '维基文库 · 原文',
  },
  {
    title: '《源氏物语》中文综合资料',
    note: '成书背景、版本系统、中文译本与结构介绍。',
    link: 'https://zh.wikipedia.org/wiki/源氏物语',
    linkLabel: '中文维基百科',
  },
  {
    title: '宇治市源氏物语博物馆',
    note: '以宇治十帖与平安贵族文化为主题的常设展。',
    link: 'https://ja.wikipedia.org/wiki/宇治市源氏物語ミュージアム',
    linkLabel: '博物馆条目 · 维基百科',
  },
];

const HEIAN_WORKS = [
  {
    title: '枕草子',
    jp: '枕草子（まくらのそうし）',
    meta: '清少纳言 · 约 990—1000',
    note: '随笔文学之祖。以“をかし”（明快有趣）与《源氏物语》的“物哀”并称平安时代两大审美。',
  },
  {
    title: '竹取物语',
    jp: '竹取物語（たけとりものがたり）',
    meta: '作者不详 · 9—10 世纪',
    note: '现存最古的物语。辉夜姬升月而去，“不死之药”由此得名，是物语文学的起点。',
  },
  {
    title: '伊势物语',
    jp: '伊勢物語（いせものがたり）',
    meta: '作者不详 · 10 世纪',
    note: '以在原业平为原型的歌物语。“昔有男”的叙述体例，成为后世物语的原型之一。',
  },
  {
    title: '落洼物语',
    jp: '落窪物語（おちくぼものがたり）',
    meta: '作者不详 · 10 世纪末',
    note: '继母虐待题材的贵族物语，与《源氏物语》先后相承，同写深闺女性的命运。',
  },
  {
    title: '蜻蛉日记',
    jp: '蜻蛉日記（かげろうにっき）',
    meta: '藤原道纲母 · 约 974',
    note: '女性日记文学之始。以和歌与散文写下婚姻中的孤寂，被称为“物语文学之母”。',
  },
  {
    title: '大和物语',
    jp: '大和物語（やまとものがたり）',
    meta: '作者不详 · 10 世纪',
    note: '歌物语集大成之作。恋爱传说与和歌相互生发，保存了许多宫廷逸话。',
  },
  {
    title: '更级日记',
    jp: '更級日記（さらしなにっき）',
    meta: '菅原孝标女 · 约 1059',
    note: '晚年追忆少女时代对《源氏物语》的憧憬——是最早的“源氏读者”侧影之一。',
  },
  {
    title: '古今和歌集',
    jp: '古今和歌集（こきんわかしゅう）',
    meta: '纪贯之等编 · 905 年',
    note: '第一部敕撰和歌集。从“唐风”转向“和风”，与物语文学共同塑造平安审美。',
  },
];

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice">
            <circle cx="880" cy="150" r="92" fill="var(--gold)" opacity="0.14" />
            <path
              d="M120 430c90-34 190-38 300-12 120 28 230 24 340-14 90-32 190-40 300-22"
              stroke="var(--ink)"
              strokeOpacity="0.1"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M80 470c120-30 260-28 400-6 130 20 270 18 400-4"
              stroke="var(--ink)"
              strokeOpacity="0.08"
              strokeWidth="1"
              fill="none"
            />
            <g stroke="var(--ink)" strokeOpacity="0.16" strokeWidth="1.4" fill="none">
              <path d="M120 520c26-30 44-64 54-104" />
              <path d="M150 528c10-40 24-70 44-98" />
              <path d="M1020 500c-18-26-30-56-38-92" />
              <path d="M1052 510c-10-38-26-68-50-96" />
            </g>
            <g fill="var(--gold)" opacity="0.3">
              <circle cx="300" cy="470" r="3" />
              <circle cx="480" cy="500" r="2.4" />
              <circle cx="700" cy="460" r="2.8" />
              <circle cx="930" cy="480" r="2.2" />
            </g>
          </svg>
        </div>
        <div className="hero-inner">
          <h1>
            源氏物語
            <span className="hero-sub">人物图鉴</span>
          </h1>
          <p className="hero-lead">
            紫式部笔下的平安王朝，人物四百余。这里以光源氏为中心，沿着血脉、情缘与宿怨，
            展开一卷“知物哀”的人物图谱。
          </p>
          <Link to="/waka" className="hero-link">
            浏览和歌名句集 →
          </Link>
        </div>
      </section>

      <section className="theme-band">
        <div className="theme-mark" aria-hidden="true">
          <span className="theme-kanji">物哀</span>
          <span className="theme-kana">もののあはれ</span>
        </div>
        <div className="theme-copy">
          <p className="theme-quote">
            “对所见所闻，感慨之，悲叹之，就是心有所动。而心有所动，就是‘知物哀’。”
            <span className="theme-source">——本居宣长（《紫文要领》·《源氏物语玉之小栉》），叶渭渠、唐月梅《日本文学史》引</span>
          </p>
          <p>
            《源氏物语》是“物哀”的集大成之作：美的每一次绽放，都以无常为底色。
            夕颜一夜即谢，紫上病于秋晨，浮舟投身宇治川——人物以各自的方式，
            教人看见“物之心”与“事之心”。
          </p>
          <p className="theme-waka">
            心あてにそれかとぞ見る　白露の光そへたる　夕顔の花
            <span>——夕颜帖·源氏</span>
          </p>
        </div>
      </section>

      <section className="book-note">
        <dl>
          <div>
            <dt>成书</dt>
            <dd>平安时代中期，约 1001—1008 年</dd>
          </div>
          <div>
            <dt>作者</dt>
            <dd>紫式部（真实姓名不详）</dd>
          </div>
          <div>
            <dt>篇幅</dt>
            <dd>54 帖，登场人物四百余</dd>
          </div>
          <div>
            <dt>地位</dt>
            <dd>世界最早的长篇写实小说之一</dd>
          </div>
        </dl>
        <div className="home-quicklinks">
          <Link to="/heian" className="quicklink">
            创作时代与平安文学 →
          </Link>
          <Link to="/chronology" className="quicklink">
            源氏年立表 →
          </Link>
        </div>
      </section>

      <section className="about-book">
        <div className="about-head">
          <h2>关于《源氏物语》</h2>
          <p>一部写在纸上的平安王朝：权力、爱情、罪与“物哀”。</p>
        </div>
        <div className="about-body">
          <p className="about-lead">
            《源氏物语》成书于平安时代中期，作者是宫中女官紫式部。它写光源氏由荣华到幻灭的一生，
            也写围绕他的众多女性如何被身份、爱情与制度困住。全书五十四帖跨越三代王朝、
            前后约七十余年，以和歌、书信与细腻的心理描写，被称为世界最早的长篇写实小说之一。
          </p>
          <div className="about-grid">
            <div className="about-col">
              <h3>五十四帖的结构</h3>
              <ol className="structure-list">
                <li>
                  <span>第一部 · 1—33 帖</span>
                  青春与荣华。桐壶至藤裏叶：源氏出生、流放与复权，六条院落成，荣华绝顶。
                </li>
                <li>
                  <span>第二部 · 34—41 帖</span>
                  罪与报应。若菜至云隐：女三宫事件、柏木之死、紫上病逝，源氏决意出家。
                </li>
                <li>
                  <span>第三部 · 42—54 帖</span>
                  宇治十帖。匂宫至梦浮桥：源氏死后，薰与匂宫争夺浮舟，故事以梦浮桥收束。
                </li>
              </ol>
            </div>
            <div className="about-col">
              <h3>四个主题</h3>
              <ul className="theme-list">
                <li>
                  <strong>物哀</strong>
                  对美的感动与哀怜。“知物哀”者，是有情之人。
                </li>
                <li>
                  <strong>无常</strong>
                  荣华与凋谢并置：桐壶之月、须磨之海、宇治之雾，皆以自然照见人事。
                </li>
                <li>
                  <strong>罪与报应</strong>
                  源氏与藤壶的乱伦之罪，在柏木与女三宫身上重演，形成两代人的轮回。
                </li>
                <li>
                  <strong>女性命运</strong>
                  贵为女御亦无自我，贱如浮舟亦无归处；唯出家，才有人以自己意志选择命运。
                </li>
              </ul>
            </div>
          </div>
          <div className="about-influence">
            <h3>影响与流传</h3>
            <p>
              中文世界有丰子恺、林文月等译本；现代日语则有与谢野晶子、谷崎润一郎的全译。
              平安时代已出现的《源氏物语绘卷》是日本国宝，宇治市至今设有源氏物语博物馆。
              江户时代的本居宣长以《源氏物语玉之小栉》提出“物哀”论，使这部作品成为
              日本美学最重要的源头之一。
            </p>
          </div>
        </div>
      </section>

      <section className="mindmap-section">
        <div className="section-head">
          <h2>人物关系图</h2>
          <p>
            以光源氏为中心的家族思维导图。单击角色放大其关系网，双击节点或点击卡片按钮进入介绍；
            灰色虚线节点为相关人物，悬停可看说明。
          </p>
        </div>
        <MindMap />
        <div className="legend">
          {LEGEND.map((t) => {
            const style = RELATION_STYLE[t];
            return (
              <span key={t} className="legend-item">
                <i
                  style={{
                    backgroundColor: 'transparent',
                    borderTop: `2.5px solid ${style.color}`,
                    borderTopStyle: dashToCssStyle(style.dash),
                  }}
                  aria-hidden="true"
                />
                {RELATION_TYPE_LABEL[t]}
              </span>
            );
          })}
          <span className="legend-item legend-aux">
            <i aria-hidden="true" />
            相关人物
          </span>
        </div>
      </section>

      <section className="heian-gate">
        <div className="section-head">
          <h2>创作时代与平安文学</h2>
          <p>
            《源氏物语》诞生于藤原摄关政治与假名文学勃兴的平安中期。
            它的时代背景、文学源流与后世影响，尽在专页中展开。
          </p>
        </div>
        <div className="heian-gate-card">
          <div className="heian-gate-intro">
            <h3>《源氏物语》的创作时代</h3>
            <p>
              平安时代中期（约 1001—1008），后宫女房以假名书写物语、日记与和歌，
              形成“国风文化”的文学现场。从《竹取物语》到《枕草子》，
              平安文学以“物哀”与“をかし”双峰并立。
            </p>
            <Link to="/heian" className="heian-gate-link">
              进入平安文学专页 →
            </Link>
          </div>
          <ul className="heian-gate-preview">
            {HEIAN_WORKS.slice(0, 6).map((w) => (
              <li key={w.title}>
                <span>{w.title}</span>
                <small>{w.meta}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="famous">
        <div className="section-head">
          <h2>名家评说与延伸阅读</h2>
          <p>
            古今评说均标注出处；中文译本因版权暂无免费全文，相关条目以资料页代替。
            以下链接上线前已逐一验证可打开。
          </p>
        </div>
        <div className="famous-quotes">
          {FAMOUS_EVALUATIONS.map((e) => (
            <blockquote key={e.source} className="famous-quote">
              <p>{e.quote}</p>
              <footer>—— {e.source}</footer>
              <a href={e.link} target="_blank" rel="noopener noreferrer" className="famous-link">
                {e.linkLabel} ↗
              </a>
            </blockquote>
          ))}
        </div>
        <ul className="famous-links">
          {EXTENDED_LINKS.map((l) => (
            <li key={l.title}>
              <a href={l.link} target="_blank" rel="noopener noreferrer">
                <span className="famous-link-title">{l.title}</span>
                <span className="famous-link-note">{l.note}</span>
                <span className="famous-link-url">{l.linkLabel} ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
