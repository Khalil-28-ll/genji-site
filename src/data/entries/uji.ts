import type { Character } from '../types.ts';

export const kaoru: Character = {
  id: 'kaoru',
  name: '薰',
  nameJp: '薫（かおる）',
  alias: ['薰君', '薰中将', '薫兵部卿'],
  group: 'uji',
  tier: 'core',
  identity: '女三宫之子（实为柏木之子），以源氏之子长大；宇治十帖男主人公',
  summary:
    '天生体香、品性端雅，却因身世之疑而对恋爱消极。他向往高僧境界，恋慕宇治大君未成，又执着追寻酷似大君的浮舟，最终仍困于自己的执念。',
  life: {
    birth: '柏木帖（源氏约 41 岁）',
    death: '书中未明示（梦浮桥帖后）',
    note: '元服在匂宫帖（源氏已殁）。',
  },
  story: [
    {
      chapter: '柏木',
      age: '源氏约 41 岁',
      text: '出生后母亲女三宫即出家，由源氏作为亲子抚养长大；源氏抱着“非己之子”，深知其身世秘密。',
    },
    {
      chapter: '匂宫',
      age: '源氏已殁',
      text: '元服后与匂宫并称“匂兵部卿、薰中将”；品性端雅，却因身世之疑而对恋爱消极。',
    },
    {
      chapter: '桥姬',
      age: '源氏已殁',
      text: '仰慕被称为“俗圣”的宇治八宫，常往山寺论道；从老女房弁之尼口中隐约得知自己实为柏木之子，惊惧秘密外泄。',
    },
    {
      chapter: '椎本',
      age: '源氏已殁',
      text: '八宫临终向他托孤，叮嘱女儿“勿轻率嫁人”；他尽心照拂大君、中君姐妹，并暗诉对大君之情。',
    },
    {
      chapter: '总角',
      age: '源氏已殁',
      text: '大君坚拒其情，自责成病；他守候榻前，大君终逝，冬之宇治唯余丧服。',
    },
    {
      chapter: '宿木',
      age: '源氏已殁',
      text: '奉旨娶今上帝之女二宫，荣宠非凡，心中却只有大君亡影；偶然窥见酷似大君的浮舟，遂生执念。',
    },
    {
      chapter: '浮舟',
      age: '源氏已殁',
      text: '将浮舟藏于宇治山庄，一面以“诚爱”相待，一面与匂宫暗中争夺；浮舟投水后，他悲叹而不肯放手。',
    },
    {
      chapter: '梦浮桥',
      age: '源氏已殁',
      text: '浮舟获救出家后拒读其信、拒见其人；他仍疑心“又有别的男人”，执念至此未解。',
    },
  ],
  symbols: [
    {
      glyph: 'incense',
      name: '薰香',
      reading: 'かおり',
      meaning: '天生之香——身世之谜与佛缘',
    },
  ],
  quotes: [
    {
      jp: '年の若い薫中将（かおるのちゅうじょう）はかえって姫君たちの話に好奇心などは動かされずに、八の宮の悟り澄ましておいでになる御心境ばかりが羨望（せんぼう）されて、お目にかかりたいと深く思うのであった。',
      zh: '年轻的薰中将反而对姬君们的话题毫不心动，只羡慕八宫澄澈的悟道心境，深深渴望拜见。（与谢野晶子现代日语译文）',
      chapter: '桥姬帖',
    },
  ],
  evaluations: [
    {
      text: '宇治十帖中，薰以“诚”自持却始终放不下执念；后世认为宇治十帖最接近近代小说，薰即其中最具“内面性”的人物。',
      source: '本地研读笔记整理',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '薫（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/薫_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '宇治市源氏物語ミュージアム',
      url: 'https://www.uji-genji.jp/',
      note: '宇治十帖专题资料',
    },
  ],
  chapters: ['柏木', '匂宫', '桥姬', '总角', '宿木', '浮舟', '梦浮桥'],
  relations: [
    { targetId: 'genji', type: 'adoption', label: '名义父子（实为柏木之子）' },
    { targetId: 'onna-sannomiya', type: 'parent', label: '母子（实为柏木之子）' },
    { targetId: 'kashiwagi', type: 'parent', label: '生父（秘密）' },
    { targetId: 'niou', type: 'friend', label: '并称双璧·竞逐' },
    { targetId: 'ukifune', type: 'love', label: '追寻者（诚爱）' },
    { targetId: 'hachimiya', type: 'guardian', label: '托孤·佛友' },
    { targetId: 'dai-no-kimi', type: 'love', label: '恋慕未成' },
    { targetId: 'naka-no-kimi', type: 'friend', label: '受其照拂' },
  ],
};

export const niou: Character = {
  id: 'niou',
  name: '匂宫',
  nameJp: '匂宮（におうみや）',
  alias: ['匂兵部卿宫', '今上帝第三皇子'],
  group: 'uji',
  tier: 'core',
  identity: '今上帝与明石中宫之子，源氏外孙；宇治十帖男主人公之一',
  summary:
    '好色风流、天性香艳，与薰并称“匂兵部卿、薰中将”。他追求中君为侧室，又夜渡宇治川与浮舟相会，把浮舟逼到绝境，是源氏风流一面的隔代重现。',
  life: {
    birth: '若菜（上）帖（源氏约 39–40 岁）',
    death: '书中未明示（蜻蛉帖后少出场）',
  },
  story: [
    {
      chapter: '若菜（上）',
      age: '源氏约 39–40 岁',
      text: '今上帝与明石中宫之子，出生后明石入道视其为家门宿愿的实现。',
    },
    {
      chapter: '匂宫',
      age: '源氏已殁',
      text: '元服后与薰并称“匂兵部卿、薰中将”；天性香艳、风流好胜。',
    },
    {
      chapter: '红梅',
      age: '源氏已殁',
      text: '倾心红梅大纳言家的宫之御方，好色之名闻于宇治。',
    },
    {
      chapter: '椎本',
      age: '源氏已殁',
      text: '听闻宇治八宫之女的名声，与中君通信求爱。',
    },
    {
      chapter: '总角',
      age: '源氏已殁',
      text: '娶中君为侧室（由薰促成），姐妹二女各自有了归处。',
    },
    {
      chapter: '浮舟',
      age: '源氏已殁',
      text: '买通浮舟侍女，夜夜偷渡宇治川与她相会；浮舟在薰与他的夹缝中走投无路。',
    },
    {
      chapter: '蜻蛉',
      age: '源氏已殁',
      text: '浮舟失踪后悲叹试探，却仍过着华丽而空虚的生活。',
    },
  ],
  symbols: [
    {
      glyph: 'incense',
      name: '匂香',
      reading: 'におい',
      meaning: '后天之艳——风流与香气的化身',
    },
  ],
  quotes: [
    {
      jp: '遠くからの評判だけではなく匂宮（におうみや）は姫宮のおそばにいる女房から細かな御様子を聞いてもおいでになるのであったから、忍びがたく恋のようにも今ではなっていた。',
      zh: '不只是远方的名声，匂宫还从姬君身旁的女房那里细听她的情形；如今已无法忍耐，渐渐成了恋慕。（与谢野晶子现代日语译文）',
      chapter: '匂宫帖',
    },
  ],
  evaluations: [
    {
      text: '源氏外孙、好色风流，与薰并称“匂兵部卿、薰中将”——匂宫是后天之艳，薰是天生之香。',
      source: '本地研读笔记整理（匂宫帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '匂宮（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/匂宮',
      note: '人物资料页',
    },
    {
      title: '宇治市源氏物語ミュージアム',
      url: 'https://www.uji-genji.jp/',
      note: '宇治十帖专题资料',
    },
  ],
  chapters: ['匂宫', '红梅', '总角', '宿木', '浮舟', '蜻蛉'],
  relations: [
    { targetId: 'genji', type: 'parent', label: '外祖父·外孙' },
    { targetId: 'akashi-chugu', type: 'parent', label: '母子' },
    { targetId: 'kaoru', type: 'friend', label: '并称双璧·竞逐' },
    { targetId: 'ukifune', type: 'love', label: '情人' },
    { targetId: 'naka-no-kimi', type: 'concubine', label: '侧室' },
  ],
};

export const ukifune: Character = {
  id: 'ukifune',
  name: '浮舟',
  nameJp: '浮舟（うきふね）',
  alias: ['宇治八亲王之女', '小野妹尼养女'],
  group: 'uji',
  tier: 'core',
  identity: '宇治八亲王之女（私生女）；薰与匂宫争夺的对象',
  summary:
    '出身低微、寄人篱下，一面被薰的“诚爱”束缚，一面为匂宫的热情倾倒。走投无路之下投身宇治川，获救后拒见薰，决意出家，成为全书唯一以自己意志选择命运的女性。',
  life: {
    birth: '书中未明示（比薰年少）',
    death: '书中未明示（梦浮桥帖以出家作结）',
    note: '投川在浮舟帖；出家在手习帖（均为源氏已殁时代）。',
  },
  story: [
    {
      chapter: '宿木',
      age: '源氏已殁',
      text: '八宫与中将君的私生女，自幼随母与继父居东国；薰偶然窥见酷似大君的她，遂生执念。',
    },
    {
      chapter: '东屋',
      age: '源氏已殁',
      text: '定亲被继父横夺，受中君庇护；匂宫见色起意，母亲将她藏匿，又深知身份悬殊之悲，仍托中君攀附薰。',
    },
    {
      chapter: '浮舟',
      age: '源氏已殁',
      text: '薰将她带往宇治山庄；匂宫买通侍女，夜夜偷渡宇治川来会。她一面被薰的“诚爱”束缚，一面为匂宫的热情倾倒，进退两难。',
    },
    {
      chapter: '浮舟',
      age: '源氏已殁',
      text: '薰察觉后准备迎她入京并严加守护；绝望的她留下遗书，投身宇治川。',
      aftermath: '横川僧都在川边救起她，交托小野妹尼养病。',
    },
    {
      chapter: '手习',
      age: '源氏已殁',
      text: '恢复记忆后悔恨与匂宫之缘，为逃避纠缠决意出家。',
    },
    {
      chapter: '梦浮桥',
      age: '源氏已殁',
      text: '薰派其弟携信至小野，她拒读拒见，只请僧都勿再泄露下落——以自己意志结束这场争夺。',
    },
  ],
  symbols: [
    {
      glyph: 'boat',
      name: '浮舟',
      reading: 'うきふね',
      meaning: '无根之舟——被争夺之物与自我抉择',
    },
  ],
  quotes: [
    {
      jp: '橘（たちばな）の小嶋（こじま）は色も変はらじをこの浮舟（うきふね）ぞ行（ゆ）くへ知られぬ',
      zh: '橘之小岛颜色或不变，这一叶浮舟却不知将漂向何方。（原歌大意）',
      chapter: '浮舟帖',
    },
  ],
  evaluations: [
    {
      text: '“紫式部怜惜浮舟，使她悄悄走向清净之界。她虽然写完了《源氏物语》，却留下了袅袅余韵。”',
      source: '川端康成《哀愁》（北京联合出版公司译本）',
      kind: 'original',
    },
    {
      text: '浮舟是全书唯一以自己意志选择命运的女性：出家不是逃避，而是把“被争夺”的身份斩断。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '浮舟（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/浮舟_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '宇治市源氏物語ミュージアム',
      url: 'https://www.uji-genji.jp/',
      note: '宇治十帖专题资料',
    },
  ],
  chapters: ['宿木', '东屋', '浮舟', '蜻蛉', '手习', '梦浮桥'],
  relations: [
    { targetId: 'kaoru', type: 'love', label: '被追求者（诚爱）' },
    { targetId: 'niou', type: 'love', label: '情人' },
    { targetId: 'hachimiya', type: 'parent', label: '父女（私生女）' },
    { targetId: 'dai-no-kimi', type: 'sibling', label: '异母姐妹' },
    { targetId: 'naka-no-kimi', type: 'sibling', label: '异母姐妹' },
    { targetId: 'yokawa-sozu', type: 'religious', label: '救度·守护' },
  ],
};
