import type { Character } from '../types.ts';

export const kirituboKoui: Character = {
  id: 'kiritubo-koui',
  name: '桐壶更衣',
  nameJp: '桐壺更衣（きりつぼのこうい）',
  alias: ['光源氏生母'],
  group: 'royal',
  tier: 'supporting',
  identity: '桐壶帝更衣、光源氏生母；出身中流贵族',
  summary:
    '出身不高却获桐壶帝专宠，因此招致弘徽殿女御等后宫嫉恨。生下源氏后忧郁成疾，在源氏三岁时去世；她的早逝既为源氏一生“光中之影”定下底色，也因藤壶女御与她容貌相似，成为全书情感结构的起点。',
  life: {
    birth: '书中未明示（桐壶帖前）',
    death: '桐壶帖（源氏 3 岁）',
    note: '书中未记真实历法年份；更衣为后宫位阶名，非本名。',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏出生前',
      text: '以更衣之位获桐壶帝专宠，出身不高却凌驾众女御之上，招致弘徽殿女御等嫉恨；生下源氏后体弱，忧郁成疾。',
    },
    {
      chapter: '桐壶',
      age: '源氏 3 岁',
      text: '病逝。临终前，桐壶帝欲见她最后一面而不得；她只留下幼子，在秋夕的悲风中入殓。',
      aftermath:
        '“小皇子（みこ）はいかなる美なるものよりも美しいお顔をしておいでになった。”（与谢野晶子译）——源氏之美从此与丧母之哀并生。',
    },
    {
      chapter: '若紫',
      age: '源氏 18 岁',
      text: '追叙·余韵：源氏在北山初见若紫，因其酷似藤壶而心荡；藤壶之相似溯其源头，仍是更衣遗影的再投射。',
    },
  ],
  symbols: [
    {
      glyph: 'paulownia',
      name: '桐',
      reading: 'きり',
      meaning: '所居淑景舍之桐木——荣宠与早逝的印记',
    },
    {
      glyph: 'moon',
      name: '秋月',
      meaning: '临终之秋与源氏“光”之来源',
    },
  ],
  quotes: [
    {
      jp: '鈴虫の声の限りを尽くしても長き夜飽かず降る涙かな',
      zh: '纵使像铃虫般把声音竭尽，这漫漫长夜里，泪还是落个不停。（编者译大意）',
      chapter: '桐壶帖',
    },
  ],
  evaluations: [
    {
      text: '更衣之死确立了全书“露之命”的开端：源氏的“光”从一开始就带着丧母之影。',
      source: '本地《源氏物语》深度研读笔记（桐壶帖）',
      kind: 'analysis',
      paraphrase: true,
    },
    {
      text: '“宠爱与嫉妒”并置是《源氏物语》后宫叙事的起点：更衣因专宠而早逝，源氏因无外戚而失势，皆由此定局。',
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
      title: '桐壺更衣（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/桐壺更衣',
      note: '人物资料页',
    },
  ],
  chapters: ['桐壶', '若紫'],
  relations: [
    { targetId: 'kiritsubo-emperor', type: 'marriage', label: '更衣（宠妃）' },
    { targetId: 'genji', type: 'parent', label: '母子' },
    { targetId: 'kokiden', type: 'rivalry', label: '受其排挤' },
  ],
};

export const reizei: Character = {
  id: 'reizei',
  name: '冷泉帝',
  nameJp: '冷泉帝（れいぜいのみかど）',
  alias: ['东宫', '冷泉院'],
  group: 'royal',
  tier: 'supporting',
  identity: '名义上桐壶帝之子，实为藤壶中宫与光源氏所生；朱雀帝之后的天皇',
  summary:
    '源氏与藤壶之“罪”的果实。出生时容貌酷似源氏，桐壶帝却只道像外祖父；即位后令源氏一族复权，晚年隐约得知身世，欲让位而被源氏力谏。他是全书皇统秘密的核心。',
  life: {
    birth: '红叶贺帖（源氏 19 岁）',
    death: '书中未明示（竹河帖后少出场）',
    note: '即位在澪标帖（源氏约 28–29 岁）；让位今上帝在若菜下帖（源氏约 41 岁起）。',
  },
  story: [
    {
      chapter: '红叶贺',
      age: '源氏 19 岁',
      text: '作为桐壶帝“皇子”出生；桐壶帝大喜，只道容貌酷似外祖父，实为藤壶与源氏私通所生——秘密由此埋下。',
      aftermath: '源氏与藤壶俱惊惧于乱伦之罪，藤壶从此背负罪感。',
    },
    {
      chapter: '澪标',
      age: '源氏约 28–29 岁',
      text: '即位为冷泉帝；源氏一族复权，源氏任内大臣，后升至太政大臣。',
    },
    {
      chapter: '藤裏叶',
      age: '源氏约 39 岁',
      text: '行幸六条院，与朱雀院同席；源氏以“准太上天皇”身份达到人臣顶点。',
    },
    {
      chapter: '若菜（下）',
      age: '源氏约 41 岁起',
      text: '隐约得知身世真相，暗示欲让位源氏；源氏惊惧力谏，秘密永埋。',
    },
  ],
  symbols: [
    {
      glyph: 'paulownia',
      name: '桐',
      reading: 'きり',
      meaning: '皇统之名与血统之秘',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：冷泉帝容貌酷似源氏，众人只道像外祖父，唯藤壶与源氏知道真相。（编者整理）',
      chapter: '红叶贺帖',
    },
  ],
  evaluations: [
    {
      text: '冷泉帝的存在使源氏与藤壶的“罪”进入皇统：罪不只是个人道德问题，而是被写进国体血脉的禁忌。',
      source: '王向远《从“源学”史看“物语”“物哀”概念的互生及其美学转化功能》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '冷泉帝（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/冷泉帝',
      note: '人物资料页',
    },
    {
      title: '源氏物語（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語',
      note: '作品与年立资料',
    },
  ],
  chapters: ['红叶贺', '澪标', '藤裏叶', '若菜（下）'],
  relations: [
    { targetId: 'kiritsubo-emperor', type: 'parent', label: '名义父子（实为源氏之子）' },
    { targetId: 'fujitsubo', type: 'parent', label: '母子（生母）' },
    { targetId: 'genji', type: 'parent', label: '生父（名义舅父）' },
    { targetId: 'akikonomu', type: 'marriage', label: '中宫' },
  ],
};

export const kokiden: Character = {
  id: 'kokiden',
  name: '弘徽殿太后',
  nameJp: '弘徽殿太后（こきでんのたいごう）',
  alias: ['弘徽殿女御', '弘徽殿大后'],
  group: 'royal',
  tier: 'supporting',
  identity: '右大臣之女、朱雀帝生母；源氏政敌之首',
  summary:
    '出身右大臣家，位至女御、太后。她嫉恨专宠的桐壶更衣，是更衣早逝与源氏失势的关键推手；桐壶帝崩后与右大臣一族把持朝政，迫使源氏流放须磨。她的恨意是第一部政治线的发动机。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（冷泉帝即位后失势，少出场）',
    note: '源氏失势后，其势力随朱雀院让位而衰退。',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏幼年',
      text: '以右大臣之女入宫为女御，因桐壶帝专宠更衣而深怀嫉恨，联合后宫排挤更衣。',
      aftermath: '更衣死后，她对源氏的敌意转入政治层面。',
    },
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '桐壶帝崩御后以太后身份掌权，与右大臣一族把持朝政；源氏与胧月夜幽会之事败露，失势流放。',
    },
    {
      chapter: '澪标',
      age: '源氏约 28–29 岁',
      text: '冷泉帝即位，源氏一族复权；她与右大臣一党的势力自此衰退。',
    },
  ],
  symbols: [
    {
      glyph: 'benibana',
      name: '弘徽殿',
      meaning: '后宫权位之象征，亦是怨与恨的居所',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：弘徽殿女御等因更衣专宠而心怀怨恨，更衣“郁郁不乐”，终致早逝。（编者整理）',
      chapter: '桐壶帖',
    },
  ],
  evaluations: [
    {
      text: '她代表平安后宫政治中“母族—外戚”的运作逻辑：女性的荣辱系于所生皇子与父族势力，弘徽殿的恨正是这一制度的产物。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '弘徽殿女御（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/弘徽殿女御',
      note: '人物资料页',
    },
    {
      title: '源氏物語（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語',
      note: '作品与年立资料',
    },
  ],
  chapters: ['桐壶', '贤木', '澪标'],
  relations: [
    { targetId: 'suzaku', type: 'parent', label: '母子' },
    { targetId: 'udaijin', type: 'parent', label: '父女' },
    { targetId: 'oborozukiyo', type: 'sibling', label: '姐妹' },
    { targetId: 'kiritubo-koui', type: 'rivalry', label: '排挤' },
    { targetId: 'genji', type: 'rivalry', label: '政敌' },
  ],
};

export const udaijin: Character = {
  id: 'udaijin',
  name: '右大臣',
  nameJp: '右大臣（うだいじん）',
  alias: ['弘徽殿太后之父'],
  group: 'royal',
  tier: 'supporting',
  identity: '弘徽殿太后与胧月夜之父；把持朝政的政敌',
  summary:
    '以女儿弘徽殿女御（后为太后）为依托把持朝政，是源氏最大的政治敌手。桐壶帝崩后他与太后一族掌权，借源氏与胧月夜幽会之事逼其失势；冷泉帝即位后，其势力随之衰退。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（冷泉帝即位后少出场）',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏幼年',
      text: '弘徽殿女御之父，凭外戚之位高踞右大臣；与左大臣家分庭抗礼。',
    },
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '桐壶帝崩后与太后一族掌权，得源氏与胧月夜幽会之实，逼源氏失势自请流放。',
    },
    {
      chapter: '须磨',
      age: '源氏约 26–27 岁',
      text: '源氏流放期间，其女胧月夜虽入宫为尚侍，他与太后的权势却随朱雀帝病弱而动摇。',
    },
  ],
  symbols: [
    {
      glyph: 'kashiwagi',
      name: '柏木家纹',
      meaning: '右大臣家权势的象征',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：右大臣一族因源氏“光华”之盛而愈生忌惮，一朝得实，便欲除之而后快。（编者整理）',
      chapter: '贤木帖',
    },
  ],
  evaluations: [
    {
      text: '右大臣—弘徽殿一党的兴衰，是平安摄关政治“外戚决定皇统”的缩影：源氏的荣辱不系于个人能力，而系于母族与姻族。',
      source: '本地《源氏物语》深度研读笔记（第一部政治线）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '源氏物語の登場人物（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語の登場人物',
      note: '人物资料页',
    },
    {
      title: '源氏物語（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語',
      note: '作品与年立资料',
    },
  ],
  chapters: ['桐壶', '贤木', '须磨'],
  relations: [
    { targetId: 'kokiden', type: 'parent', label: '父女' },
    { targetId: 'oborozukiyo', type: 'parent', label: '父女' },
    { targetId: 'genji', type: 'rivalry', label: '政敌' },
  ],
};

export const saDaijin: Character = {
  id: 'sa-daijin',
  name: '左大臣',
  nameJp: '左大臣（さだいじん）',
  alias: ['葵上之父', '头中将之父'],
  group: 'left-minister',
  tier: 'supporting',
  identity: '葵上与头中将之父，源氏岳父；夕雾外祖父',
  summary:
    '源氏的外戚与政治后盾。将爱女葵上许配源氏，源氏失势后仍以姻亲与家格庇荫之；冷泉帝即位后升至太政大臣，是源氏“光”之侧最稳固的力量。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（少女帖前后隐退）',
    note: '葵上死后，他与夫人抚养夕雾。',
  },
  story: [
    {
      chapter: '桐壶',
      age: '源氏 12 岁',
      text: '应桐壶帝之请，将爱女葵上许配源氏；左大臣家自此成为源氏外戚。',
    },
    {
      chapter: '葵',
      age: '源氏约 22–23 岁',
      text: '葵上产后暴卒；他与夫人悲痛之余，承担起抚养外孙夕雾之责。',
    },
    {
      chapter: '少女',
      age: '源氏约 33–35 岁',
      text: '冷泉帝即位后升任太政大臣；与源氏共同支撑复权后的政界。',
    },
  ],
  symbols: [
    {
      glyph: 'nadeshiko',
      name: '抚子',
      reading: 'なでしこ',
      meaning: '左大臣家女眷（葵、玉鬘系）的象征',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：左大臣疼爱外孙夕雾，胜过亲生儿女。（编者整理）',
      chapter: '葵帖',
    },
  ],
  evaluations: [
    {
      text: '左大臣家与右大臣家的对立，构成《源氏物语》第一部政治场的两轴：源氏的“光”恰在两轴之间升起。',
      source: '本地《源氏物语》深度研读笔记',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '源氏物語の登場人物（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語の登場人物',
      note: '人物资料页',
    },
    {
      title: '源氏物語（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語',
      note: '作品与年立资料',
    },
  ],
  chapters: ['桐壶', '葵', '少女'],
  relations: [
    { targetId: 'aoi', type: 'parent', label: '父女' },
    { targetId: 'tou-no-chujo', type: 'parent', label: '父子' },
    { targetId: 'genji', type: 'marriage', label: '岳父' },
    { targetId: 'yugiri', type: 'parent', label: '外祖孙（抚养）' },
  ],
};

export const kumoi: Character = {
  id: 'kumoi',
  name: '云居雁',
  nameJp: '雲居の雁（くもいのかり）',
  alias: ['内大臣之女', '夕雾正妻'],
  group: 'left-minister',
  tier: 'supporting',
  identity: '头中将（内大臣）之女，夕雾幼时恋人、正妻',
  summary:
    '与夕雾自幼两情相悦，却因父亲内大臣的阻挠而分离多年；夕雾发愤读书终得认可，二人于藤裏叶帖成婚。婚后夕雾强娶落叶宫，她悲愤携子归宁，是第二代婚姻中“被辜负的正妻”。',
  life: {
    birth: '书中未明示（与夕雾同龄前后）',
    death: '书中未明示',
    note: '成婚在藤裏叶帖（源氏约 39 岁）。',
  },
  story: [
    {
      chapter: '少女',
      age: '源氏约 33–35 岁',
      text: '与夕雾自幼同处，两情相悦；父亲内大臣阻挠婚事，二人被迫分离。',
    },
    {
      chapter: '藤裏叶',
      age: '源氏约 39 岁',
      text: '内大臣终于让步，云居雁与夕雾有情人终成眷属。',
    },
    {
      chapter: '夕雾',
      age: '源氏约 50 岁',
      text: '夕雾强娶落叶宫；她悲愤携子归宁，夕雾百般赔罪，夫妻间隙难弥。',
    },
  ],
  symbols: [
    {
      glyph: 'mist',
      name: '云雁',
      reading: 'くもい',
      meaning: '秋空之雁——分离与归来的意象',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：云居雁自少女时便只愿嫁给夕雾一人，被父亲拆散后，以泪洗面度日。（编者整理）',
      chapter: '少女帖',
    },
  ],
  evaluations: [
    {
      text: '云居雁与夕雾的婚约波折，是第一部“父权包办婚姻”的又一例证：连高门嫡女的爱情也要等待父辈首肯。',
      source: '本地《源氏物语》深度研读笔记（少女帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '雲居雁（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/雲居雁',
      note: '人物资料页',
    },
    {
      title: '源氏物語の登場人物（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語の登場人物',
      note: '人物资料页',
    },
  ],
  chapters: ['少女', '藤裏叶', '夕雾'],
  relations: [
    { targetId: 'tou-no-chujo', type: 'parent', label: '父女' },
    { targetId: 'yugiri', type: 'marriage', label: '正妻' },
  ],
};

export const ochiba: Character = {
  id: 'ochiba',
  name: '落叶宫',
  nameJp: '落葉の宮（おちばのみや）',
  alias: ['柏木遗孀', '一条御息所之女'],
  group: 'left-minister',
  tier: 'supporting',
  identity: '一条御息所之女、柏木遗孀；后被夕雾强娶',
  summary:
    '柏木临终托孤的对象之一。柏木死后她守寡，遭夕雾强娶，屡拒不成；母亲一条御息所绝望而死，她最终成为夕雾的继室。她的悲剧是“夕雾帖”对男性欲望最直接的控诉。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（夕雾帖后少出场）',
    note: '嫁柏木在若菜下帖之前（源氏约 40–41 岁）；被夕雾强娶在夕雾帖（源氏约 50 岁）。',
  },
  story: [
    {
      chapter: '柏木',
      age: '源氏约 48 岁',
      text: '柏木负罪病笃，临终托孤于夕雾；她成为遗孀，与母亲一条御息所相依。',
    },
    {
      chapter: '夕雾',
      age: '源氏约 50 岁',
      text: '夕雾以探望遗孀为名起占有之心，屡遭拒绝仍强娶；母亲一条御息所绝望而死，她孤立无援，终被夕雾迎为继室。',
      aftermath: '云居雁悲愤归宁，夕雾百般赔罪——落叶宫之“落叶”正是被攀折飘零之喻。',
    },
  ],
  symbols: [
    {
      glyph: 'kashiwagi',
      name: '落叶',
      reading: 'おちば',
      meaning: '柏木之叶落——寡居与被迫再嫁的命运',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：落叶宫自柏木死后心如枯槁，唯愿清净度日，无奈夕雾之情如秋风卷叶，终难抗拒。（编者整理）',
      chapter: '夕雾帖',
    },
  ],
  evaluations: [
    {
      text: '夕雾强娶落叶宫一节，与《帚木》“雨夜品定”的男性女性论遥相呼应：女性无论怎样守节，都难逃男性欲望的支配。',
      source: '本地《源氏物语》深度研读笔记（夕雾帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '落葉の宮（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/落葉の宮',
      note: '人物资料页',
    },
    {
      title: '源氏物語（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語',
      note: '作品与年立资料',
    },
  ],
  chapters: ['柏木', '夕雾'],
  relations: [
    { targetId: 'kashiwagi', type: 'marriage', label: '夫妻（遗孀）' },
    { targetId: 'yugiri', type: 'marriage', label: '继室（强娶）' },
  ],
};

export const akashiChugu: Character = {
  id: 'akashi-chugu',
  name: '明石中宫',
  nameJp: '明石の中宮（あかしのちゅうぐう）',
  alias: ['明石皇后', '明石姬君', '今上帝中宫'],
  group: 'children',
  tier: 'supporting',
  identity: '光源氏与明石君之女，今上帝中宫，匂宫生母',
  summary:
    '出身“高贵与低贱”的奇特结合：外祖是明石地方豪族，父亲却位列准太上天皇。自幼由紫上抚育，入内为今上帝中宫，生匂宫，使明石君与明石入道的家门宿愿得偿。她是源氏一族荣华的第二代顶点。',
  life: {
    birth: '明石帖（源氏约 28 岁，生于明石；丰译明石帖注为二十七岁三月至二十八岁八月）',
    death: '书中未明示',
    note: '入内为今上帝中宫在藤裏叶帖（源氏约 39 岁）；生匂宫在若菜上帖（源氏约 39–40 岁）。',
  },
  story: [
    {
      chapter: '明石',
      age: '源氏约 27–28 岁',
      text: '在明石由明石君怀妊；源氏应召回京时，母女仍留明石。',
    },
    {
      chapter: '薄云',
      age: '源氏约 31–32 岁',
      text: '被生母明石君忍痛交与紫上抚养；紫上待她如己出。',
      aftermath: '母女诀别之场面被研究者视为全书最催泪的场面之一。',
    },
    {
      chapter: '藤裏叶',
      age: '源氏约 39 岁',
      text: '裳着、调香、书法名品齐备后入内，成为今上帝中宫；生母明石君以“后见”身份入宫，母女团圆。',
    },
    {
      chapter: '若菜（上）',
      age: '源氏约 39–40 岁',
      text: '生下匂宫（后为今上帝第三皇子）；明石入道实现家门宿愿，随即入山。',
    },
  ],
  symbols: [
    {
      glyph: 'matsu',
      name: '松',
      reading: 'まつ',
      meaning: '明石之缘与门第复兴的象征',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：明石中宫自幼在紫上膝下长大，品貌出众，世人都道“真是光明氏家的女儿”。（编者整理）',
      chapter: '薄云帖',
    },
  ],
  evaluations: [
    {
      text: '明石中宫是阶层之壁被“以血统向上移动”打破的例证：她的成功以生母明石君的隐忍与母女分离为代价。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
    {
      text: '六条院的空间叙事中，明石中宫居春之町：她是源氏荣华“春天”的化身，也是明石家百年执念的完成。',
      source: '徐向玉《〈源氏物语〉中花的意象研究》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '明石の中宮（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/明石の中宮',
      note: '人物资料页',
    },
    {
      title: '源氏物語（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語',
      note: '作品与年立资料',
    },
  ],
  chapters: ['明石', '薄云', '藤裏叶', '若菜（上）'],
  relations: [
    { targetId: 'genji', type: 'parent', label: '父女' },
    { targetId: 'akashi', type: 'parent', label: '母女' },
    { targetId: 'murasaki', type: 'adoption', label: '养母（紫上抚育）' },
    { targetId: 'niou', type: 'parent', label: '母子' },
  ],
};

export const akikonomu: Character = {
  id: 'akikonomu',
  name: '秋好中宫',
  nameJp: '秋好中宮（あきこのむのちゅうぐう）',
  alias: ['前斋宫', '梅壶女御'],
  group: 'children',
  tier: 'supporting',
  identity: '六条御息所之女；源氏养女；冷泉帝中宫',
  summary:
    '母亲六条御息所的高贵与怨念都传给了她，她却以清净雅正避开母辈的悲剧。曾为伊势斋宫，后以梅壶女御入内，立为冷泉帝中宫；与紫上分领春秋，是六条院“春与秋”竞赛的另一端。',
  life: {
    birth: '书中未明示（朱雀帝朝）',
    death: '书中未明示',
    note: '入内为梅壶女御在绘合帖（源氏约 31 岁）；立为冷泉帝中宫在少女帖（源氏约 33–35 岁）。',
  },
  story: [
    {
      chapter: '贤木',
      age: '源氏约 22–23 岁',
      text: '为伊势斋宫，随母亲六条御息所下伊势；源氏于野宫与母亲诀别。',
    },
    {
      chapter: '绘合',
      age: '源氏约 31 岁',
      text: '以梅壶女御入内，源氏为养父；与头中将之女弘徽殿女御于宫中举行绘合，源氏方获胜。',
    },
    {
      chapter: '少女',
      age: '源氏约 33–35 岁',
      text: '立为冷泉帝中宫；与紫上分领春秋，六条院与宫中形成“春与秋”的贵族式竞赛。',
    },
    {
      chapter: '铃虫',
      age: '源氏约 50 岁',
      text: '中秋管弦宴后，源氏与她语及六条御息所往事，欲为其亡灵镇魂。',
    },
  ],
  symbols: [
    {
      glyph: 'cherry',
      name: '秋好',
      reading: 'あきこのむ',
      meaning: '“好秋”之名——与紫上“春”相对的秋之贵人',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：秋好中宫雅静自持，身世虽承六条之怨，言行却无一丝怨色。（编者整理）',
      chapter: '少女帖',
    },
  ],
  evaluations: [
    {
      text: '秋好中宫与紫上的“春秋竞争”，是《源氏物语》以季节空间编码女性地位与恩宠的典型例证。',
      source: '徐向玉《〈源氏物语〉中花的意象研究》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '秋好中宮（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/秋好中宮',
      note: '人物资料页',
    },
    {
      title: '源氏物語（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語',
      note: '作品与年立资料',
    },
  ],
  chapters: ['贤木', '绘合', '少女', '铃虫'],
  relations: [
    { targetId: 'rokujo', type: 'parent', label: '母女' },
    { targetId: 'genji', type: 'adoption', label: '养父女' },
    { targetId: 'reizei', type: 'marriage', label: '中宫' },
  ],
};

export const koremitsu: Character = {
  id: 'koremitsu',
  name: '惟光',
  nameJp: '惟光（これみつ）',
  alias: ['源氏心腹家臣'],
  group: 'center',
  tier: 'supporting',
  identity: '源氏乳母子之子，贴身家臣；风流韵事的牵线人与秘密守护者',
  summary:
    '源氏最信任的腹心。从五条巷偶遇夕颜、北山寻访若紫，到流放须磨明石、探寻玉鬘下落，他始终是源氏秘密的见证者与执行者。没有他，源氏的“光”便无处藏其“影”。',
  life: {
    birth: '书中未明示（与源氏主从）',
    death: '书中未明示',
  },
  story: [
    {
      chapter: '夕颜',
      age: '源氏 17 岁',
      text: '为源氏探访五条巷神秘女子，牵线夕颜之恋；夕颜暴毙后，又为其料理丧事。',
    },
    {
      chapter: '须磨',
      age: '源氏约 26–27 岁',
      text: '随源氏流放须磨，独力操持起居，成为源氏在荒海边唯一可托之人。',
    },
    {
      chapter: '玉鬘',
      age: '源氏约 34–35 岁',
      text: '受托探寻夕颜遗女下落，终使玉鬘上京入六条院。',
    },
  ],
  symbols: [
    {
      glyph: 'moon',
      name: '灯火',
      meaning: '暗夜引路之人——主君秘密的执灯者',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：惟光深知主君一切秘密，却从不言说；源氏亦以心腹待之，凡事相托。（编者整理）',
      chapter: '夕颜帖',
    },
  ],
  evaluations: [
    {
      text: '惟光是“家臣文学”的典型形象：以忠诚与沉默维系主君的多重人生，其存在本身即是源氏“光与影”叙事的注脚。',
      source: '本地《源氏物语》深度研读笔记',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '惟光（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/惟光',
      note: '人物资料页',
    },
    {
      title: '源氏物語の登場人物（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/源氏物語の登場人物',
      note: '人物资料页',
    },
  ],
  chapters: ['夕颜', '须磨', '玉鬘'],
  relations: [{ targetId: 'genji', type: 'servant', label: '主从（心腹家臣）' }],
};

export const hachimiya: Character = {
  id: 'hachimiya',
  name: '宇治八亲王',
  nameJp: '八の宮（はちのみや）',
  alias: ['宇治八宫', '俗圣'],
  group: 'uji',
  tier: 'supporting',
  identity: '源氏异母弟；隐居宇治；大君、中君、浮舟之父',
  summary:
    '失势皇族，避世宇治，以诵经修行自遣，被称为“俗圣”。他临终将女儿托付薰，叮嘱“勿轻率嫁人”；其女儿们的悲剧由此展开。他是宇治十帖“圣与俗”之间的引路人。',
  life: {
    birth: '书中未明示（桐壶帝之子）',
    death: '椎本帖（薰青年时）',
    note: '宇治十帖第一帖桥姬时已隐于宇治。',
  },
  story: [
    {
      chapter: '桥姬',
      age: '源氏已殁',
      text: '失势后携二女隐于宇治，诵经修行；薰仰慕其“俗圣”之名，常往山寺论道。',
    },
    {
      chapter: '椎本',
      age: '源氏已殁',
      text: '病笃入山寺，临终向薰托孤，叮嘱女儿“勿轻率嫁人”，随即圆寂。',
      aftermath: '大君、中君自此失去唯一依靠，薰以托孤之责照拂姐妹。',
    },
  ],
  symbols: [
    {
      glyph: 'incense',
      name: '香',
      reading: 'こう',
      meaning: '修行之香——圣俗之间的宇治世界',
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
      text: '八宫是“圣”的象征，却也是“不负责任之圣”：他以修行之名离开宫廷，女儿的悲剧正是其避世的代价。',
      source: '本地《源氏物语》深度研读笔记（宇治十帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '八の宮（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/八の宮_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '宇治市源氏物語ミュージアム',
      url: 'https://www.uji-genji.jp/',
      note: '宇治十帖专题资料',
    },
  ],
  chapters: ['桥姬', '椎本'],
  relations: [
    { targetId: 'genji', type: 'sibling', label: '异母兄弟' },
    { targetId: 'kaoru', type: 'guardian', label: '托孤·佛友' },
    { targetId: 'dai-no-kimi', type: 'parent', label: '父女' },
    { targetId: 'naka-no-kimi', type: 'parent', label: '父女' },
    { targetId: 'ukifune', type: 'parent', label: '父女（私生女）' },
  ],
};

export const daiNoKimi: Character = {
  id: 'dai-no-kimi',
  name: '大君',
  nameJp: '大君（おおいぎみ）',
  alias: ['宇治大君', '八宫长女'],
  group: 'uji',
  tier: 'supporting',
  identity: '宇治八亲王长女；薰恋慕未成之人',
  summary:
    '八宫临终托孤的长女，以“代父尽责”自持。薰深恋她，她却固守父命、坚拒不婚，自责成病，在冬之宇治病逝。她是宇治十帖“圣洁”与“执念”相遇的第一场悲剧。',
  life: {
    birth: '书中未明示',
    death: '总角帖（源氏已殁）',
    note: '薰守候榻前至其终逝。',
  },
  story: [
    {
      chapter: '桥姬',
      age: '源氏已殁',
      text: '与妹妹中君随父隐于宇治；薰借通信之名，实则暗恋于她。',
    },
    {
      chapter: '总角',
      age: '源氏已殁',
      text: '坚拒薰之情，自责违背父命，忧思成病；薰守候榻前，她终逝于冬之宇治。',
      aftermath: '薰此后在浮舟身上不断寻找她的影子。',
    },
  ],
  symbols: [
    {
      glyph: 'mist',
      name: '冬雾',
      reading: 'ふゆぎり',
      meaning: '宇治之冬——圣洁与未遂之恋',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：大君至死固守“不轻率嫁人”的父命，把对薰之情深藏于礼法之下。（编者整理）',
      chapter: '总角帖',
    },
  ],
  evaluations: [
    {
      text: '大君之死是“礼法杀人的美学化”：她不是不爱，而是把父命内化为自我的最高律令。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》相关论述（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '大君（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/大君_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '宇治市源氏物語ミュージアム',
      url: 'https://www.uji-genji.jp/',
      note: '宇治十帖专题资料',
    },
  ],
  chapters: ['桥姬', '总角'],
  relations: [
    { targetId: 'hachimiya', type: 'parent', label: '父女' },
    { targetId: 'naka-no-kimi', type: 'sibling', label: '姐妹' },
    { targetId: 'ukifune', type: 'sibling', label: '异母姐妹' },
    { targetId: 'kaoru', type: 'love', label: '恋慕未成' },
  ],
};

export const nakaNoKimi: Character = {
  id: 'naka-no-kimi',
  name: '中君',
  nameJp: '中君（なかのきみ）',
  alias: ['八宫次女', '匂宫侧室'],
  group: 'uji',
  tier: 'supporting',
  identity: '宇治八亲王次女；匂宫侧室；浮舟异母姐',
  summary:
    '比姐姐大君稍见通融，由薰促成嫁给匂宫为侧室。入京后怀念宇治，又为说出异母妹浮舟之事而埋下宇治十帖后半的悲剧。她是姐妹三人中“被安排命运”的中间者。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（蜻蛉帖后少出场）',
    note: '嫁匂宫在总角帖（源氏已殁）。',
  },
  story: [
    {
      chapter: '桥姬',
      age: '源氏已殁',
      text: '与姐姐大君随父隐于宇治；匂宫闻其名而来信求爱。',
    },
    {
      chapter: '总角',
      age: '源氏已殁',
      text: '大君死后，由薰促成嫁与匂宫为侧室；姐妹各有归处，唯大君已逝。',
    },
    {
      chapter: '宿木',
      age: '源氏已殁',
      text: '怀子悲叹，生子后举世称庆；为摆脱薰的纠缠，说出异母妹浮舟之事——浮舟悲剧由此开启。',
    },
  ],
  symbols: [
    {
      glyph: 'yugao',
      name: '女郎花',
      reading: 'おみなえし',
      meaning: '宇治山中之花——被安排的命运',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：中君入京后仍眷恋宇治的山雾与旧居，悲喜交集。（编者整理）',
      chapter: '早蕨帖',
    },
  ],
  evaluations: [
    {
      text: '中君是“幸运的中间者”：嫁得高门，却一生活在姐姐的亡影与妹妹的悲剧之间。',
      source: '本地《源氏物语》深度研读笔记（宇治十帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '中の君（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/中の君_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '宇治市源氏物語ミュージアム',
      url: 'https://www.uji-genji.jp/',
      note: '宇治十帖专题资料',
    },
  ],
  chapters: ['桥姬', '总角', '宿木'],
  relations: [
    { targetId: 'hachimiya', type: 'parent', label: '父女' },
    { targetId: 'dai-no-kimi', type: 'sibling', label: '姐妹' },
    { targetId: 'ukifune', type: 'sibling', label: '异母姐妹' },
    { targetId: 'niou', type: 'concubine', label: '侧室' },
    { targetId: 'kaoru', type: 'friend', label: '受其照拂' },
  ],
};

export const yokawaSozu: Character = {
  id: 'yokawa-sozu',
  name: '横川僧都',
  nameJp: '横川の僧都（よかわのそうず）',
  alias: ['横川僧都'],
  group: 'uji',
  tier: 'supporting',
  identity: '比叡山横川的高僧；在宇治川救起浮舟并守护其下落',
  summary:
    '浮舟投川后的“佛之手”。他在宇治川边救起溺水的浮舟，交托小野妹尼养病，后又见证她出家；面对薰的追问，始终守约不露其下落。他是宇治十帖中“救度”与“沉默”的化身。',
  life: {
    birth: '书中未明示',
    death: '书中未明示',
  },
  story: [
    {
      chapter: '浮舟',
      age: '源氏已殁',
      text: '于宇治川边救起投水的浮舟，秘密交托小野妹尼照料。',
    },
    {
      chapter: '手习',
      age: '源氏已殁',
      text: '浮舟恢复记忆后决意出家；僧都成全其愿，并劝她断却尘缘。',
    },
    {
      chapter: '梦浮桥',
      age: '源氏已殁',
      text: '薰追至横川追问，他只以“去向不明”相答；浮舟拒读拒见，他恪守约定，再不泄露下落。',
    },
  ],
  symbols: [
    {
      glyph: 'incense',
      name: '香炉',
      reading: 'こうろ',
      meaning: '佛门之香——救度与沉默',
    },
  ],
  quotes: [
    {
      zh: '原书叙事：僧都见浮舟求道心切，感叹“此女宿缘深厚”，遂为其落发授戒。（编者整理）',
      chapter: '手习帖',
    },
  ],
  evaluations: [
    {
      text: '横川僧都使浮舟的出家获得宗教上的合法性：与薰的执念相对，僧都代表“放下”的力量。',
      source: '本地《源氏物语》深度研读笔记（手习·梦浮桥帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '横川僧都（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/横川僧都',
      note: '人物资料页',
    },
    {
      title: '宇治市源氏物語ミュージアム',
      url: 'https://www.uji-genji.jp/',
      note: '宇治十帖专题资料',
    },
  ],
  chapters: ['浮舟', '手习', '梦浮桥'],
  relations: [{ targetId: 'ukifune', type: 'religious', label: '救度·守护' }],
};

export const supportingCharacters: Character[] = [
  kirituboKoui,
  reizei,
  kokiden,
  udaijin,
  saDaijin,
  kumoi,
  ochiba,
  akashiChugu,
  akikonomu,
  koremitsu,
  hachimiya,
  daiNoKimi,
  nakaNoKimi,
  yokawaSozu,
];
