import type { Character } from '../types.ts';

export const murasaki: Character = {
  id: 'murasaki',
  name: '紫之上',
  nameJp: '紫の上（むらさきのうえ）',
  alias: ['紫姬', '若紫', '紫夫人'],
  group: 'wives',
  tier: 'core',
  identity: '兵部卿宫之女、藤壶中宫侄女；源氏事实上正妻',
  summary:
    '十岁在北山被源氏发现，因酷似藤壶而被接回二条院亲自养育，成为源氏按理想塑造的“完美女性”。她温柔端雅、隐忍周全，却无娘家可恃，最终在四十余岁病逝，未遂出家之愿。',
  life: {
    birth: '约桐壶帖—若紫帖之间（源氏约 8 岁前后出生，书中未明示）',
    death: '御法帖（源氏约 51 岁，紫上约 43 岁）',
    note: '“年四十余”为原书表述；叶麟婧论文记为 43 岁。',
  },
  story: [
    {
      chapter: '若紫',
      age: '源氏 18 岁（紫上约 10 岁）',
      text: '幼年丧母，由祖母尼君在北山抚养。源氏为治疟疾偶遇她，因她酷似藤壶而心荡，作歌“何时才能采撷那紫草”；祖母病逝后，源氏将她强接回二条院亲自养育。',
    },
    {
      chapter: '葵',
      age: '源氏约 22–23 岁',
      text: '葵上死后，紫上成为源氏事实上的正妻，主持二条院与后来的六条院春之町。',
    },
    {
      chapter: '薄云',
      age: '源氏约 31–32 岁',
      text: '明石君忍痛将女儿交到她手中；紫上待明石中宫如己出，视若亲女。',
    },
    {
      chapter: '野分',
      age: '源氏约 36 岁',
      text: '台风翌晨，夕雾隔着帘子窥见她的容姿，心神大乱——侧面写出她“完美女性”之美已足以乱人心魄。',
    },
    {
      chapter: '若菜（上）',
      age: '源氏约 39–40 岁',
      text: '源氏迎娶身份高贵而心智幼弱的女三宫；紫上心碎，却隐忍周全，夫妻间隙反而愈深。',
    },
    {
      chapter: '若菜（下）',
      age: '源氏约 41 岁起',
      text: '为六条御息所死灵所祟，大病濒死；此后身体时好时坏。',
    },
    {
      chapter: '御法',
      age: '源氏约 51 岁',
      text: '病笃之际恳求出家，源氏以“你先走，我随后”相劝不许；她主办法华经千部供养，向明石君、花散里等赠别歌，嘱托明石中宫与幼年匂宫。',
    },
    {
      chapter: '御法',
      age: '源氏约 51 岁',
      text: '秋日黎明，在源氏与明石中宫看护下去世，年四十余；夕雾惊见死者遗容之美。这是全书哀感之顶点。',
      aftermath: '源氏在她的忌日周年间见花思人、见月思人，作歌百首自遣，年终焚尽遗物。',
    },
    {
      chapter: '幻',
      age: '源氏约 52 岁',
      text: '源氏在她的忌日周年间见花思人、见月思人，作歌百首自遣，年终焚尽她的遗物。',
    },
  ],
  symbols: [
    {
      glyph: 'murasaki',
      name: '紫草',
      reading: 'むらさき',
      meaning: '与藤壶同根的原野嫩草——源氏亲手栽培的理想',
    },
  ],
  quotes: [
    {
      jp: '手に摘みていつしかも見む紫のねにかよひける野辺の若草',
      zh: '何时才能采撷那紫草，与紫草同根的原野嫩草。（原歌大意）',
      chapter: '若紫帖',
    },
  ],
  evaluations: [
    {
      text: '“这是若紫的‘情之悲剧’：最终未实现出家的愿望，于43岁永离人世。”',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'original',
    },
    {
      text: '源氏对若紫的“情”直至她死后才明白：最不想失去的就是若紫。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'paraphrase',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '紫の上（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/紫の上',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['若紫', '葵', '初音', '野分', '若菜', '御法', '幻'],
  relations: [
    { targetId: 'genji', type: 'marriage', label: '正妻（自幼养大）' },
    { targetId: 'fujitsubo', type: 'parent', label: '姑母（血缘·长辈）' },
    { targetId: 'akashi', type: 'friend', label: '互敬（抚育其女明石中宫）' },
    { targetId: 'akashi-chugu', type: 'adoption', label: '养母（抚育）' },
  ],
};

export const aoi: Character = {
  id: 'aoi',
  name: '葵之上',
  nameJp: '葵の上（あおいのうえ）',
  alias: ['葵夫人', '左大臣家姬君'],
  group: 'wives',
  tier: 'core',
  identity: '左大臣之女、头中将之妹；源氏第一任正妻；夕雾生母',
  summary:
    '比源氏年长四岁，十二岁起成为其正妻。性格矜持冷淡，与源氏隔阂渐深；怀孕后遭六条御息所生霊所祟，产下夕雾后暴卒。她是政治联姻的牺牲品，也是全书第一次正妻之死。',
  life: {
    birth: '书中未明示（比源氏年长四岁）',
    death: '葵帖（源氏约 22–23 岁）',
    note: '产下夕雾后暴卒。',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏 12 岁',
      text: '十二岁与源氏成婚，是左大臣家与皇子的政治联姻；她比源氏年长四岁，性格矜持端庄。',
    },
    {
      chapter: '帚木',
      age: '源氏 17 岁',
      text: '婚后与多情的源氏日渐疏远；源氏与头中将等谈论“雨夜品定”，正妻之冷淡正是话题背景之一。',
    },
    {
      chapter: '葵',
      age: '源氏约 22–23 岁',
      text: '怀孕后愈发高傲；葵祭上与六条御息所发生“车之争”，随从毁坏六条车驾，结下怨念。',
    },
    {
      chapter: '葵',
      age: '源氏约 22–23 岁',
      text: '遭六条御息所生霊祟害，产下夕雾后暴卒；源氏守丧，方知自己亏欠她与六条两位女性。',
      aftermath: '夕雾由祖父母左大臣夫妇抚养长大。',
    },
  ],
  symbols: [
    {
      glyph: 'hollyhock',
      name: '葵',
      reading: 'あおい',
      meaning: '祭神之草——尊严与怨念之争',
    },
  ],
  quotes: [
    {
      jp: '左大臣家にいる葵（あおい）夫人はこんなふうに源氏の心が幾つにも分かれているのを憎みながらも、たいしてほかの恋愛を隠そうともしない人には、恨みを言っても言いがいがないと思っていた。',
      zh: '葵夫人虽憎恨源氏的心分成许多份，却觉得对这位毫不隐瞒其他恋情的人，抱怨也无济于事。（与谢野晶子现代日语译文）',
      chapter: '葵帖',
    },
  ],
  evaluations: [
    {
      text: '“骄傲冷漠、矜持固执的葵无疑是贵族统治下的政治牺牲品……如傀儡般等待着成为‘太子妃’，操控于政治利益之下。”',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'original',
    },
  ],
  references: [
    {
      title: '葵の上（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/葵の上',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['帚木', '葵', '行幸'],
  relations: [
    { targetId: 'genji', type: 'marriage', label: '正妻' },
    { targetId: 'sa-daijin', type: 'parent', label: '父女' },
    { targetId: 'tou-no-chujo', type: 'sibling', label: '兄妹' },
    { targetId: 'yugiri', type: 'parent', label: '母子' },
    { targetId: 'rokujo', type: 'rivalry', label: '车之争·被其生霊祟害' },
  ],
};

export const yugao: Character = {
  id: 'yugao',
  name: '夕颜',
  nameJp: '夕顔（ゆうがお）',
  alias: ['常夏（本名）', '五条姬君'],
  group: 'wives',
  tier: 'core',
  identity: '头中将旧情人；玉鬘生母；中流贵族女性',
  summary:
    '本名常夏，隐姓埋名住在五条陋巷。温柔顺从，是源氏第一次真正体会到“中流女性之可爱”的人。二人热恋未久，她便于废院之夜被物之怪所祟暴毙，成为全书第一场女性之死。',
  life: {
    birth: '书中未明示',
    death: '夕颜帖（源氏 17 岁）',
    note: '暴毙于废院之夜，其后玉鬘由乳母携往筑紫。',
  },
  story: [
    {
      chapter: '夕颜',
      age: '源氏 17 岁',
      text: '原是头中将旧情人，生女玉鬘后被遗弃，隐姓埋名住在五条巷，乳母右近照料。',
    },
    {
      chapter: '夕颜',
      age: '源氏 17 岁',
      text: '源氏在五条巷偶遇她，二人隐瞒身份热恋；她温柔顺从，让源氏第一次体会到中流女性的可爱。',
    },
    {
      chapter: '夕颜',
      age: '源氏 17 岁',
      text: '源氏带她到荒凉废院；深夜物之怪作祟，她暴毙于源氏怀中。',
      aftermath: '源氏悲恸成疾，从此留下终身阴影；他后来在玉鬘身上不断寻找她的影子。',
    },
    {
      chapter: '行幸',
      age: '源氏约 36–37 岁',
      text: '她的女儿玉鬘长大上京，身世揭晓：她本是头中将之女常夏，夕颜只是化名。',
    },
  ],
  symbols: [
    {
      glyph: 'yugao',
      name: '夕颜花',
      reading: 'ゆうがお',
      meaning: '黄昏开放、朝露即谢——易逝之爱与无根之美',
    },
  ],
  quotes: [
    {
      jp: '心あてにそれかとぞ見る白露の光そへたる夕顔の花',
      zh: '循香猜度，白露生光的夕颜花。（丰子恺译：夕颜凝露容光艳，料是伊人驻马来）',
      chapter: '夕颜帖',
    },
  ],
  evaluations: [
    {
      text: '“夕颜花最大的特点在于开花时间。黄昏开花，第二日上午凋落……人物出场退场就是植物的一生。”',
      source: '塚原明宏（转引自徐向玉《〈源氏物语〉中花的意象研究》）',
      kind: 'original',
    },
  ],
  references: [
    {
      title: '夕顔（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/夕顔_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '《源氏物语》中花的意象研究（徐向玉）',
      url: 'https://kns.cnki.net/',
      note: '中国知网检索页',
    },
  ],
  chapters: ['夕颜', '行幸', '竹河'],
  relations: [
    { targetId: 'genji', type: 'love', label: '情人' },
    { targetId: 'tou-no-chujo', type: 'love', label: '旧情人' },
    { targetId: 'tamakazura', type: 'parent', label: '母女' },
    { targetId: 'rokujo', type: 'rivalry', label: '被其生霊祟害致死' },
  ],
};

export const rokujo: Character = {
  id: 'rokujo',
  name: '六条御息所',
  nameJp: '六条御息所（ろくじょうのみやすどころ）',
  alias: ['前东宫妃', '六条'],
  group: 'wives',
  tier: 'core',
  identity: '前东宫妃；秋好中宫生母；源氏情人',
  summary:
    '高贵自尊、才情过人，因源氏爱意渐薄而怨念深重，生霊两度祟害夕颜与葵上，死后亡灵仍缠绕源氏一家。她是“嫉妒与生霊”主题的化身，也是被爱情逼到绝境的高贵女性。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（贤木帖随女下伊势，其后少出场）',
    note: '死后亡灵仍于若菜下帖现形，祟害紫上。',
  },
  story: [
    {
      chapter: '夕颜',
      age: '源氏 17 岁',
      text: '前东宫妃，寡居后与源氏相恋；因自尊心强、不甘与众多女性争宠，怨念悄然滋生，生霊作祟害死夕颜。',
    },
    {
      chapter: '葵',
      age: '源氏约 22–23 岁',
      text: '葵祭“车之争”受辱，怨念化为生霊，祟害怀孕的葵上，致其产后暴卒。',
    },
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '随女儿斋宫下伊势，于野宫与源氏凄然诀别——这是全书最著名的别离场景之一。',
    },
    {
      chapter: '绘合',
      age: '源氏约 31 岁',
      text: '女儿前斋宫以梅壶女御入内（即秋好中宫），源氏为养父；她虽已远去，其家系仍与源氏纠葛。',
    },
    {
      chapter: '若菜（下）',
      age: '源氏约 41 岁起',
      text: '死后亡灵仍不消散，重现六条院嘲笑悲剧，并祟害紫上令其大病——怨恨跨越二十年仍未了结。',
      aftermath: '源氏此后于铃虫帖语及她，欲为其亡灵镇魂。',
    },
  ],
  symbols: [
    {
      glyph: 'moon',
      name: '野宫之月',
      reading: 'ののみやのつき',
      meaning: '自尊与怨念在月下燃烧',
    },
  ],
  quotes: [
    {
      jp: '源氏の愛のたよりなさを感じている御息所（みやすどころ）は、斎宮の年少なのに托（たく）して自分も伊勢（いせ）へ下ってしまおうかとその時から思っていた。',
      zh: '御息所感到源氏的爱不可凭恃，便借口斋宫年幼，决意随女儿同下伊势。（与谢野晶子现代日语译文）',
      chapter: '葵帖',
    },
  ],
  evaluations: [
    {
      text: '“她嫉妒成性、杀人如麻，甚至变成了鬼神之物，但在与源氏情感的博弈上其却是极其可怜、脆弱的。”',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'original',
    },
    {
      text: '生霊信仰的文学化：女性的尊严受辱后，恨意化为超自然力量——六条是平安时代怨灵观念最完整的文学形象。',
      source: '本地《源氏物语》深度研读笔记（核心母题）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '六条御息所（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/六条御息所',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['夕颜', '葵', '贤木', '若菜'],
  relations: [
    { targetId: 'genji', type: 'love', label: '情人' },
    { targetId: 'akikonomu', type: 'parent', label: '母女' },
    { targetId: 'aoi', type: 'rivalry', label: '生霊祟害' },
    { targetId: 'yugao', type: 'rivalry', label: '生霊祟害' },
  ],
};

export const akashi: Character = {
  id: 'akashi',
  name: '明石之君',
  nameJp: '明石の君（あかしのきみ）',
  alias: ['明石夫人', '明石御方'],
  group: 'wives',
  tier: 'core',
  identity: '明石入道之女；源氏侧室；明石中宫生母',
  summary:
    '出身地方豪族，因门第悬殊而长期自卑隐忍。以琴艺与源氏结缘，生下日后成为中宫的明石姬君，却自愿让紫上抚育女儿，自己只以生母身份入宫。她是全书阶层之壁最深刻的写照。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（藤裏叶帖后少出场）',
    note: '与源氏结缘在明石帖（源氏约 27–28 岁）；入宫为“后见”在藤裏叶帖（源氏约 39 岁）。',
  },
  story: [
    {
      chapter: '明石',
      age: '源氏约 27–28 岁',
      text: '源氏流放明石期间，明石入道设计以琴为媒；她以琴艺与源氏定情，结为侧室。',
    },
    {
      chapter: '明石',
      age: '源氏约 27–28 岁',
      text: '源氏应召回京时她已有身孕，诀别凄然；此后独自在明石产下姬君（明石中宫）。',
    },
    {
      chapter: '澪标',
      age: '源氏约 28–29 岁',
      text: '源氏为女儿前程决定将其培养为未来皇后；住吉神社谢神时，她悄然参诣，自叹身分之悲。',
    },
    {
      chapter: '松风',
      age: '源氏约 31 岁',
      text: '携女与祖母尼君上京，却因自惭形秽不肯入二条院，寄居大堰山荘；源氏借赏松风之名往返，紫上不悦。',
    },
    {
      chapter: '薄云',
      age: '源氏约 31–32 岁',
      text: '忍痛将女儿交与紫上抚养，母女诀别——这是全书最催泪的场面之一。',
    },
    {
      chapter: '藤裏叶',
      age: '源氏约 39 岁',
      text: '以“后见”身份入宫与女儿团圆；与紫上首次相会，互敬互赏，荣华至此圆满。',
    },
  ],
  symbols: [
    {
      glyph: 'matsu',
      name: '松风',
      reading: 'まつかぜ',
      meaning: '大堰山荘之音——身份之壁与隐忍',
    },
  ],
  quotes: [
    {
      jp: '数ならでなにはのこともかひなきに何みをつくし思ひ初めけん',
      zh: '我本算不得什么，难波之事也徒然无益；为何当初要这样以身相许。（原歌大意）',
      chapter: '澪标帖',
    },
  ],
  evaluations: [
    {
      text: '叶麟婧在结语中以“清丽娴静的明石夫人”概括她温婉隐忍的形象。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'paraphrase',
      paraphrase: true,
    },
    {
      text: '她虽被源氏爱重，却始终自卑自惭，视自己为“身分之卑”的化身。',
      source: '本地研读笔记整理（松风帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '明石の君（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/明石の君',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['明石', '松风', '薄云', '藤裏叶'],
  relations: [
    { targetId: 'genji', type: 'concubine', label: '侧室' },
    { targetId: 'murasaki', type: 'friend', label: '互敬（其女由紫上抚育）' },
    { targetId: 'akashi-chugu', type: 'parent', label: '母女' },
  ],
};

export const hanachirusato: Character = {
  id: 'hanachirusato',
  name: '花散里',
  nameJp: '花散里（はなちるさと）',
  alias: ['丽景殿女御之妹'],
  group: 'wives',
  tier: 'core',
  identity: '丽景殿女御之妹；源氏侧室；夕雾与玉鬘的养母',
  summary:
    '性情温和淡泊，不求独占、不嫉不怨，是源氏可以安心休憩的女性。源氏落难时仍思念她，复权后将她接入六条院夏之町，并把夕雾、玉鬘托付她抚育，成为六条院“四季宇宙”中安静的一角。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（御法帖后少出场）',
    note: '入住六条院夏之町在少女帖（源氏约 33–35 岁）。',
  },
  story: [
    {
      chapter: '花散里',
      age: '源氏约 25 岁',
      text: '梅雨时节，政治上风雨欲来，源氏反而于晴间走访旧情人花散里，追忆往昔——她是源氏可以安心休憩的女性。',
    },
    {
      chapter: '须磨',
      age: '源氏约 26–27 岁',
      text: '源氏流放须磨期间，与她书信往来不断，情意不因落魄而减。',
    },
    {
      chapter: '少女',
      age: '源氏约 33–35 岁',
      text: '六条院落成，她入住夏之町；源氏以四季配置诸夫人，她是其中温和的一角。',
    },
    {
      chapter: '玉鬘',
      age: '源氏约 34–35 岁',
      text: '玉鬘被迎入六条院后，源氏托她照拂；她与玉鬘同住夏町，情同母女。',
    },
    {
      chapter: '初音',
      age: '源氏约 36 岁',
      text: '新年循例走访六条院诸夫人，她在夏町与玉鬘一同迎接——空间位置即恩宠次序。',
    },
    {
      chapter: '御法',
      age: '源氏约 51 岁',
      text: '紫上临终前向她赠别歌，她在六条院的岁月也随之进入尾声。',
    },
  ],
  symbols: [
    {
      glyph: 'sakura',
      name: '落花',
      reading: 'はなちる',
      meaning: '落花之里——不争不怨、静待花落',
    },
  ],
  quotes: [
    {
      zh: '帖名“花散里”即落花之里：不求独占、不嫉不怨，是“花散里式女性”的定型。（研读笔记）',
      chapter: '花散里帖',
    },
  ],
  evaluations: [
    {
      text: '叶麟婧在结语中以“惹人怜爱的花散里”概括她温厚包容的形象。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'paraphrase',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '花散里（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/花散里',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['花散里', '须磨', '初音', '藤裏叶'],
  relations: [
    { targetId: 'genji', type: 'concubine', label: '侧室' },
    { targetId: 'yugiri', type: 'adoption', label: '养母子' },
    { targetId: 'tamakazura', type: 'adoption', label: '养母女' },
  ],
};
