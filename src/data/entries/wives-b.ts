import type { Character } from '../types.ts';

export const onnaSannomiya: Character = {
  id: 'onna-sannomiya',
  name: '女三宫',
  nameJp: '女三宮（おんなさんのみや）',
  alias: ['朱雀院女三宫', '薰之母'],
  group: 'wives',
  tier: 'core',
  identity: '朱雀院皇女；源氏第二任正妻；薰之母（实为柏木之子）',
  summary:
    '年幼天真、身份高贵而心智未熟。朱雀院出家前将她托付源氏，成为晚年正妻；后与柏木私通生下薰，事发后出家。她是“罪与报应”轮回的核心人物，也是华宴之下崩塌的象征。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（柏木帖出家后少出场）',
    note: '嫁源氏在若菜上帖（源氏约 39–40 岁）；出家在柏木帖（源氏约 41 岁）。',
  },
  story: [
    {
      chapter: '若菜（上）',
      age: '源氏约 39–40 岁',
      text: '朱雀院出家前将她托付源氏为妻；紫上心碎却隐忍周全，源氏娶了“身份高而心智幼”的她。',
    },
    {
      chapter: '若菜（上）',
      age: '源氏约 39–40 岁',
      text: '蹴鞠之日，柏木因猫掀帘窥见她的容颜，一见倾心，遂成祸端。',
    },
    {
      chapter: '若菜（下）',
      age: '源氏约 40–41 岁',
      text: '女乐之夜，柏木与她强成密事；源氏发现柏木情书，一瞥之间尽知真相。',
    },
    {
      chapter: '柏木',
      age: '源氏约 41 岁',
      text: '生下薰（实为柏木之子）后随即出家；源氏怀抱“非己之子”，深感罪之轮回。',
      aftermath: '她的出家使源氏与紫上更加隔膜，六条院的秩序自此崩解。',
    },
    {
      chapter: '铃虫',
      age: '源氏约 42 岁',
      text: '在佛门中度日，持佛开眼供养庄严举行；她以出家避开尘世，却让源氏与紫上更加隔膜。',
    },
  ],
  symbols: [
    {
      glyph: 'wakana',
      name: '若菜',
      reading: 'わかな',
      meaning: '春之嫩芽——不成熟与罪芽',
    },
  ],
  quotes: [
    {
      jp: '母君の女御にも信じ切ったようにして院は女三の宮のことを仰せになった。',
      zh: '朱雀院仿佛对女御也全然信任一般，把女三宫托付了出去。（与谢野晶子现代日语译文）',
      chapter: '若菜上帖',
    },
  ],
  evaluations: [
    {
      text: '研究者多视女三宫事件为源氏与藤壶之罪的“报应”重现：同样的密通之罪、同样的代养他人之子，如今轮到他承受。',
      source: '本地研读笔记整理（若菜·柏木帖）',
      kind: 'analysis',
      paraphrase: true,
    },
    {
      text: '女三宫的“天真”不是美德，而是制度性幼稚：她以皇女之尊被托付、被窥见、被占有，自始至终没有选择权。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '女三宮（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/女三宮',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['若菜', '柏木', '铃虫', '竹河'],
  relations: [
    { targetId: 'genji', type: 'marriage', label: '第二正妻' },
    { targetId: 'suzaku', type: 'parent', label: '父女' },
    { targetId: 'kashiwagi', type: 'affair', label: '私通（薰之生父）' },
    { targetId: 'kaoru', type: 'parent', label: '母子（实为柏木之子）' },
  ],
};

export const utsusemi: Character = {
  id: 'utsusemi',
  name: '空蝉',
  nameJp: '空蝉（うつせみ）',
  alias: ['伊予介之妻'],
  group: 'wives',
  tier: 'core',
  identity: '伊予介（后常陆介）之妻；源氏求而不得的女性',
  summary:
    '自知身份悬殊，始终拒绝源氏，留下“空蝉之衣”脱身。她是源氏一生中唯一“从心所欲而不从”的女性；夫死后遭继子纠缠，最终出家为尼，托庇于源氏而不委身于他。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（蓬生帖出家后少出场）',
    note: '与源氏结缘在帚木帖（源氏 17 岁）。',
  },
  story: [
    {
      chapter: '帚木',
      age: '源氏 17 岁',
      text: '方违之夜，源氏偶遇伊予介之妻空蝉，强行与之结缘；她自知身份悬殊，羞愧难当。',
    },
    {
      chapter: '空蝉',
      age: '源氏 17 岁',
      text: '源氏经其弟小君传信、深夜潜入；她留下薄衣（“空蝉之衣”）逃走，源氏错拥其继女轩端荻共度一夜。',
    },
    {
      chapter: '关屋',
      age: '源氏约 27 岁',
      text: '多年后石山参诣归途，源氏在逢坂关与随夫赴任归京的她擦肩，隔帘问答，心境复杂。',
    },
    {
      chapter: '蓬生',
      age: '源氏约 27 岁',
      text: '夫死、遭继子纠缠，她出家为尼；此后托庇于源氏，却始终以“不从”自持。',
    },
    {
      chapter: '初音',
      age: '源氏约 31 岁',
      text: '与末摘花同居于二条东院，受源氏照拂——他是她唯一亲近过又始终拒绝的人。',
    },
  ],
  symbols: [
    {
      glyph: 'cicada',
      name: '空蝉',
      reading: 'うつせみ',
      meaning: '蝉蜕之壳——不即不离、空壳之身',
    },
  ],
  quotes: [
    {
      jp: '空蝉（うつせみ）の身をかへてける木（こ）のもとになほ人がらのなつかしきかな',
      zh: '蝉蜕换身于树旁，旧人之品性仍令人怀念。（原歌大意）',
      chapter: '空蝉帖',
    },
  ],
  evaluations: [
    {
      text: '叶麟婧在结语中以“温柔坚贞的空蝉”概括她始终不从的形象。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'paraphrase',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '空蝉（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/空蝉_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['帚木', '空蝉', '关屋', '蓬生'],
  relations: [{ targetId: 'genji', type: 'love', label: '拒爱·不即不离' }],
};

export const suetsumuhana: Character = {
  id: 'suetsumuhana',
  name: '末摘花',
  nameJp: '末摘花（すえつむはな）',
  alias: ['常陆宫家姬君'],
  group: 'wives',
  tier: 'core',
  identity: '常陆宫之女，没落皇女；源氏侧室',
  summary:
    '古风顽固、生活窘迫，鼻尖泛红如红花。源氏因好奇夜访后懊悔轻率，却不忍相弃，持续周济；流放归来后将她接入二条东院供养。她是“容貌与品格背离”的喜剧性人物，也是忠贞不渝的象征。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（初音帖后少出场）',
    note: '入二条东院在蓬生帖（源氏约 27 岁）。',
  },
  story: [
    {
      chapter: '末摘花',
      age: '源氏 18 岁',
      text: '源氏听闻没落常陆宫家姬君之事，深夜造访；天明细看，见她鼻尖泛红如红花，大失所望，却又不忍相弃。',
    },
    {
      chapter: '须磨',
      age: '源氏约 23–25 岁',
      text: '源氏流放期间，她的邸宅荒草丛生、侍女离散，唯她一人坚守不改。',
    },
    {
      chapter: '蓬生',
      age: '源氏约 27 岁',
      text: '源氏归京后偶然忆起，来访见她枯瘦贫穷却不失贞心，深为感动，将她接入二条东院供养。',
    },
    {
      chapter: '初音',
      age: '源氏约 31 岁',
      text: '于二条东院与空蝉一同度岁，得源氏长期照拂；古风不改，忠贞如一。',
    },
  ],
  symbols: [
    {
      glyph: 'benibana',
      name: '末摘花',
      reading: 'すえつむはな',
      meaning: '红花——红鼻之丑与忠贞之德',
    },
  ],
  quotes: [
    {
      jp: 'なつかしき色ともなしに何にこの末摘花（すえつむはな）を袖（そで）に触れけん',
      zh: '并非令人怀念的颜色，为何让这末摘花沾上衣袖？（原歌大意）',
      chapter: '末摘花帖',
    },
  ],
  evaluations: [
    {
      text: '叶麟婧在结语中以“古板滑稽的末摘花”概括她皮相与内质背离的形象。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'paraphrase',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '末摘花（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/末摘花_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['末摘花', '蓬生', '初音'],
  relations: [{ targetId: 'genji', type: 'concubine', label: '侧室（同情性照顾）' }],
};

export const oborozukiyo: Character = {
  id: 'oborozukiyo',
  name: '胧月夜',
  nameJp: '朧月夜（おぼろづきよ）',
  alias: ['右大臣六女', '栉笥姬'],
  group: 'wives',
  tier: 'core',
  identity: '右大臣之女、弘徽殿太后之妹；朱雀帝尚侍；源氏情人',
  summary:
    '在樱花宴的朦胧月色下与源氏定情，天明方知是政敌之女、且已内定入宫。她性情明朗大胆，是源氏政治生涯中最危险的禁忌之恋；幽会败露，直接导致源氏失势流放。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（若菜帖后少出场）',
    note: '入宫为朱雀帝尚侍在贤木帖前后（源氏约 22–23 岁）。',
  },
  story: [
    {
      chapter: '花宴',
      age: '源氏 20 岁',
      text: '樱花宴之夜，朦胧月色下与源氏偶遇，互赠和歌定情；天明才知对方是政敌右大臣之女、且已内定入宫。',
    },
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '入宫为朱雀帝尚侍后，仍与源氏秘密幽会；被政敌察觉，成为源氏失势的口实。',
    },
    {
      chapter: '须磨',
      age: '源氏约 23–25 岁',
      text: '幽会之事败露，源氏自请流放须磨；她是源氏政治生涯中最危险的禁忌之恋。',
    },
    {
      chapter: '若菜（下）',
      age: '源氏约 40–41 岁',
      text: '多年后再见于源氏家宴，旧情仍在，人事已非。',
    },
  ],
  symbols: [
    {
      glyph: 'cherry',
      name: '樱花·胧月',
      reading: 'おぼろづきよ',
      meaning: '朦胧月色下的禁忌之恋',
    },
  ],
  quotes: [
    {
      jp: '月やあらぬ春や昔の春ならぬわが身ひとつはもとの身にして',
      zh: '月已非旧月，春已非旧春，唯我一人还是旧我。（原歌大意）',
      chapter: '花宴帖',
    },
  ],
  evaluations: [
    {
      text: '她是源氏“政敌之女”的身份使这场情事成为全书政治与爱情交织最深的禁忌之恋。',
      source: '本地研读笔记整理',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '朧月夜（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/朧月夜_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['花宴', '贤木', '若菜'],
  relations: [
    { targetId: 'genji', type: 'affair', label: '情人（禁忌）' },
    { targetId: 'suzaku', type: 'marriage', label: '尚侍' },
    { targetId: 'kokiden', type: 'sibling', label: '姐妹' },
    { targetId: 'udaijin', type: 'parent', label: '父女' },
  ],
};

export const asagao: Character = {
  id: 'asagao',
  name: '朝颜',
  nameJp: '朝顔（あさがお）',
  alias: ['朝颜姬君', '槿斋院', '前斋院'],
  group: 'wives',
  tier: 'core',
  identity: '桃园式部卿宫之女，前斋院；源氏思慕对象',
  summary:
    '清高自持，是全书唯一拒绝源氏的高贵女性。源氏多年后表白仍被婉拒，她最终出家为尼，成为“求而不得”的象征，也令紫上第一次感到真正的嫉妒。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（初音帖后少出场）',
    note: '拒源氏之恋在朝颜帖（源氏约 29 岁）；出家在初音帖前后（源氏约 31 岁）。',
  },
  story: [
    {
      chapter: '少女',
      age: '源氏约 30 岁',
      text: '桃园式部卿宫之女，早年间与源氏相识；后赴斋院任斋宫，清高自持。',
    },
    {
      chapter: '朝颜',
      age: '源氏约 29 岁',
      text: '退居斋院后，源氏多年思慕不改，向她表白却被婉拒——她是唯一拒绝源氏的高贵女性。',
    },
    {
      chapter: '朝颜',
      age: '源氏约 29 岁',
      text: '紫上听闻高门求婚者，心生嫉妒；源氏以追忆往昔情事安抚她——朝颜成为紫上心中“不可及”的影子。',
    },
    {
      chapter: '初音',
      age: '源氏约 31 岁',
      text: '此后出家为尼，与源氏再无情缘；她的清高自持成为“求而不得”母题的化身。',
    },
  ],
  symbols: [
    {
      glyph: 'asagao',
      name: '朝颜',
      reading: 'あさがお',
      meaning: '晨开午谢——清高自持',
    },
  ],
  quotes: [
    {
      jp: '見し折りのつゆ忘られぬ朝顔の花の盛りは過ぎやしぬらん',
      zh: '当年相见的露水难以忘怀，朝颜花盛的时节是否已过？（原歌大意）',
      chapter: '朝颜帖',
    },
  ],
  evaluations: [
    {
      text: '她以清高自持成为全书“求而未得”母题的化身——唯一从心所欲而拒绝源氏的高贵女性。',
      source: '本地研读笔记整理',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '朝顔（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/朝顔_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['朝颜', '行幸', '初音'],
  relations: [{ targetId: 'genji', type: 'love', label: '婉拒·思慕未成' }],
};
