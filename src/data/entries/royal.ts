import type { Character } from '../types.ts';

export const kiritsuboEmperor: Character = {
  id: 'kiritsubo-emperor',
  name: '桐壶帝',
  nameJp: '桐壺帝（きりつぼのみかど）',
  alias: ['桐壶院'],
  group: 'royal',
  tier: 'core',
  identity: '平安朝天皇，光源氏之父',
  summary:
    '深宠出身不高的桐壶更衣，更衣早逝后迎入酷似她的藤壶女御。他爱源氏极深，却因源氏没有强大外戚可恃，又听从相面人之言，将其降为臣籍。晚年让位朱雀帝，是源氏“光”与“影”命运的起点。',
  life: {
    birth: '书中未明示',
    death: '贤木帖（源氏约 22–23 岁）',
    note: '崩御后弘徽殿太后与右大臣一族掌权，源氏随即失势。',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏 0–3 岁',
      text: '专宠出身不高的桐壶更衣，招致弘徽殿女御等后宫嫉恨；更衣忍辱含悲，生下源氏后不久病逝，帝悲痛不已。',
    },
    {
      chapter: '桐壶',
      age: '源氏 3–12 岁',
      text: '为慰藉丧妻之痛，迎入容貌酷似更衣的藤壶女御入宫；源氏因此自幼亲近藤壶，为日后悲剧埋下伏线。',
    },
    {
      chapter: '桐壶',
      age: '源氏 12 岁',
      text: '高丽相面人预言源氏“若为皇子将登帝位，若为臣子必为人臣之极”；帝权衡外戚势力，决定将源氏降为臣籍、赐姓源氏，并与左大臣之女葵上成婚。',
    },
    {
      chapter: '红叶贺',
      age: '源氏 19 岁',
      text: '藤壶产下“皇子”冷泉帝（实为源氏之子），帝大喜，只道皇子容貌酷似外祖父，未觉真相。',
    },
    {
      chapter: '葵',
      age: '源氏约 20–22 岁',
      text: '让位朱雀帝，退居为桐壶院；源氏自此失去最大庇护。',
    },
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '不久崩御；弘徽殿太后与右大臣一族掌权，源氏随即失势流放。',
      aftermath: '源氏在须磨之夜梦见亡父托梦，指引他移居明石。',
    },
  ],
  symbols: [
    {
      glyph: 'paulownia',
      name: '桐',
      reading: 'きり',
      meaning: '桐壶之殿——宠爱与悲剧的起点',
    },
  ],
  quotes: [
    {
      jp: 'いよいよ帝はこの人にばかり心をお引かれになるという御様子で……',
      zh: '帝愈发只被此人一人吸引。（与谢野晶子现代日语译文）',
      chapter: '桐壶帖',
    },
  ],
  evaluations: [
    {
      text: '相面人预言：此子若为皇子，将登帝位；若为臣子，必为人臣之极。桐壶帝由此决定将源氏降为臣籍。',
      source: '《源氏物语·桐壶》（原书叙事，编者整理）',
      kind: 'paraphrase',
      paraphrase: true,
    },
    {
      text: '桐壶帝的“爱”与“政治权衡”并行不悖：他既以父爱庇护源氏，又以无外戚为由将其逐出皇统——父爱的限度正是平安宫廷政治的限度。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 桐壶帖',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '青空文库公版文本',
    },
    {
      title: '桐壺帝（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/桐壺帝',
      note: '人物资料页',
    },
  ],
  chapters: ['桐壶', '红叶贺', '贤木'],
  relations: [
    { targetId: 'genji', type: 'parent', label: '父子' },
    { targetId: 'kiritubo-koui', type: 'marriage', label: '更衣（宠妃）' },
    { targetId: 'fujitsubo', type: 'marriage', label: '中宫（继室）' },
    { targetId: 'suzaku', type: 'parent', label: '父子' },
    { targetId: 'reizei', type: 'parent', label: '名义父子（实为源氏之子）' },
  ],
};

export const fujitsubo: Character = {
  id: 'fujitsubo',
  name: '藤壶中宫',
  nameJp: '藤壺中宮（ふじつぼのちゅうぐう）',
  alias: ['藤壶女御', '藤壶女院'],
  group: 'royal',
  tier: 'core',
  identity: '先帝皇女、桐壶帝中宫；源氏继母兼恋人；冷泉帝生母',
  summary:
    '容貌酷似源氏生母桐壶更衣，入宫后成为源氏恋慕的对象。她与源氏私通生下冷泉帝，终身背负罪感，最终出家。她是源氏一生情感的原点，也是“藤”之紫色所象征的高贵而不可即的理想。',
  life: {
    birth: '书中未明示（桐壶帖前）',
    death: '薄云帖（源氏约 28–29 岁）',
    note: '出家在贤木帖（源氏约 22–23 岁）；死后仍于朝颜帖以梦现身。',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏 3–12 岁',
      text: '因酷似桐壶更衣，被桐壶帝迎入宫中为中宫；源氏自幼亲近她，恋慕之情在成长中悄然滋生。',
    },
    {
      chapter: '若紫',
      age: '源氏 18 岁',
      text: '与源氏私通怀孕，二人惊惧于乱伦之罪；北山若紫正是她的侄女，因容貌酷似她而被源氏一见倾心。',
    },
    {
      chapter: '红叶贺',
      age: '源氏 19 岁',
      text: '产下与源氏酷似的皇子（冷泉帝），桐壶帝大喜，众人只道皇子像外祖父；她独自背负秘密与罪感。',
    },
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '为守护东宫、斩断源氏之念，决意出家；源氏在野宫与她诀别，此后二人不再相见。',
    },
    {
      chapter: '薄云',
      age: '源氏约 28–29 岁',
      text: '病逝。源氏人前平静、人后痛哭——她是他一生情感的起点，也是终身不可得之人。',
    },
    {
      chapter: '朝颜',
      age: '源氏约 29 岁',
      text: '源氏夜梦她现身，为未得救的罪苦而泣；他惊惧不已，为之修法祈愿。',
      aftermath: '罪感并未随死亡了结：她的亡灵成为源氏此后修行的动因之一。',
    },
  ],
  symbols: [
    {
      glyph: 'wisteria',
      name: '藤',
      reading: 'ふじ',
      meaning: '藤壶之紫——高贵而不可即的理想',
    },
  ],
  quotes: [
    {
      jp: 'なぜこんなに自分の目がこの子に引き寄せられるのか、それは恋しい藤壺（ふじつぼ）の宮によく似ているからであると気がついた刹那（せつな）にも、その人への思慕の涙が熱く頬（ほほ）を伝わった。',
      zh: '为何目光总被这孩子吸引？因为她和令人思慕的藤壶宫太像了——察觉的刹那，对她的思慕之泪灼热地滑过脸颊。（写源氏初见若紫，与谢野晶子现代日语译文）',
      chapter: '若紫帖',
    },
  ],
  evaluations: [
    {
      text: '“他与藤壶皇后的禁忌之恋，因身份悬殊和重重限制，只能在痛苦压抑中艰难维持，最终，藤壶皇后因内心的愧疚和痛苦选择出家，这段爱情以悲剧落幕。”',
      source: '安小康《以〈源氏物语〉为代表的文学物哀传统与流变》（《名作欣赏》2025 年第 26 期）',
      kind: 'original',
    },
    {
      text: '藤壶女御最后的结局是削发为尼、中年病逝，正如她所笃信的教义：因果报应，由来如此。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'paraphrase',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '藤壺中宮（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/藤壺中宮',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['桐壶', '红叶贺', '贤木', '薄云'],
  relations: [
    { targetId: 'kiritsubo-emperor', type: 'marriage', label: '中宫' },
    { targetId: 'genji', type: 'affair', label: '继母·恋人（私通生冷泉帝）' },
    { targetId: 'reizei', type: 'parent', label: '母子（生母）' },
    { targetId: 'murasaki', type: 'parent', label: '姑母（血缘·长辈）' },
  ],
};

export const suzaku: Character = {
  id: 'suzaku',
  name: '朱雀帝',
  nameJp: '朱雀帝（すざくのみかど）',
  alias: ['朱雀院', '朱雀院法皇'],
  group: 'royal',
  tier: 'core',
  identity: '桐壶帝第一皇子、光源氏异母兄；退位后称朱雀院',
  summary:
    '性格柔弱，生母弘徽殿太后与右大臣掌权。他即位后源氏失势流放，后又让位冷泉帝。晚年出家前将爱女女三宫托付源氏，成为“罪与报应”故事的引线人物。',
  life: {
    birth: '书中未明示（桐壶帖前）',
    death: '书中未明示（若菜帖后少出场）',
    note: '让位冷泉帝在藤裏叶帖（源氏约 33–34 岁）；出家前托付女三宫在若菜上帖（源氏约 39–40 岁）。',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏幼年',
      text: '作为桐壶帝第一皇子出生，生母为弘徽殿女御（右大臣之女）；与源氏虽是异母兄弟，地位与母族却全然不同。',
    },
    {
      chapter: '葵',
      age: '源氏约 20–22 岁',
      text: '桐壶帝让位，朱雀帝即位；藤壶之子（实为源氏之子）被立为东宫，埋下日后皇统移转的伏线。',
    },
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '生母弘徽殿太后与右大臣一族把持朝政，源氏失势流放；他性情柔弱，无法也无意阻止。',
    },
    {
      chapter: '藤裏叶',
      age: '源氏约 33–34 岁',
      text: '让位冷泉帝，退居朱雀院；冷泉帝行幸六条院时，他与源氏同席，荣华已在下一代。',
    },
    {
      chapter: '若菜（上）',
      age: '源氏约 39–40 岁',
      text: '自觉命数无多，出家前将爱女女三宫托付源氏为妻——这份“托付”成为源氏晚年悲剧的引线。',
    },
    {
      chapter: '若菜（下）',
      age: '源氏约 40–41 岁',
      text: '自觉命数无多，只愿再见女三宫一面；对源氏家中的变故一无所知。',
    },
  ],
  symbols: [
    {
      glyph: 'paulownia',
      name: '桐壶之系',
      meaning: '桐壶帝之子、皇统的延续',
    },
  ],
  quotes: [
    {
      jp: '朱雀（すざく）院の法皇はもう御命数も少なくなったように心細くばかり思召されるのであるが、この世のことなどはもう顧みないことにしたいとお考えになりながらも、女三の宮にだけはもう一度お逢いあそばされたかった。',
      zh: '朱雀院法皇自觉命数无多，心绪不安；虽想不再顾念尘世之事，却唯独还想再见女三宫一面。（与谢野晶子现代日语译文）',
      chapter: '若菜下帖',
    },
  ],
  evaluations: [
    {
      text: '性格柔弱，一生夹在生母弘徽殿太后的权势与异母弟源氏的光辉之间。',
      source: '本地研读笔记整理',
      kind: 'paraphrase',
      paraphrase: true,
    },
    {
      text: '朱雀院把女三宫“托付”给源氏，是父权把女儿当作政治与情感担保品的典型：托付愈深，悲剧愈烈。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '朱雀帝（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/朱雀帝_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['葵', '贤木', '若菜', '红梅'],
  relations: [
    { targetId: 'kiritsubo-emperor', type: 'parent', label: '父子' },
    { targetId: 'kokiden', type: 'parent', label: '母子' },
    { targetId: 'genji', type: 'sibling', label: '异母兄弟' },
    { targetId: 'onna-sannomiya', type: 'parent', label: '父女' },
    { targetId: 'oborozukiyo', type: 'marriage', label: '尚侍（恋人）' },
  ],
};
