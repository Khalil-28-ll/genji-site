import type { Character } from '../types.ts';

export const touNoChujo: Character = {
  id: 'tou-no-chujo',
  name: '头中将',
  nameJp: '頭中将（とうのちゅうじょう）',
  alias: ['内大臣', '左大臣家嫡男'],
  group: 'left-minister',
  tier: 'core',
  identity: '左大臣之子、葵上之兄；后任内大臣；柏木、玉鬘、云居雁之父',
  summary:
    '源氏的妻兄、挚友兼对手，“雨夜品定”的发起者。他年轻时与夕颜相恋又遗弃了她，晚年与源氏在子女婚事上暗中较劲，是贯穿第一部的重要男性。',
  life: {
    birth: '书中未明示',
    death: '书中未明示（若菜帖后少出场）',
    note: '任内大臣在行幸帖前后（源氏约 32 岁）。',
  },
  story: [
    {
      chapter: '帚木',
      age: '源氏 17 岁',
      text: '五月雨之夜与源氏等聚谈，发起著名的“雨夜品定”女性论——论女子三等九品、母亲门第与教养。',
    },
    {
      chapter: '夕颜',
      age: '源氏 17 岁',
      text: '年轻时与夕颜相恋，生下玉鬘后又将她遗弃；夕颜隐姓埋名住进五条巷，成为源氏的情人。',
    },
    {
      chapter: '红叶贺',
      age: '源氏 19 岁',
      text: '朱雀院行幸之宴上与源氏共舞青海波，是宫廷公认的对手与友伴。',
    },
    {
      chapter: '行幸',
      age: '源氏约 32 岁',
      text: '官至内大臣后，源氏挑明玉鬘是他的女儿；他震惊之余终为玉鬘的裳着式任腰结役。',
    },
    {
      chapter: '藤裏叶',
      age: '源氏约 33–34 岁',
      text: '几经阻挠后，终于让步，允夕雾与女儿云居雁成婚——他与源氏一生暗中较劲，最终在儿女婚事上和解。',
    },
  ],
  symbols: [
    {
      glyph: 'nadeshiko',
      name: '抚子',
      reading: 'なでしこ',
      meaning: '其女玉鬘之美的代号，亦系于与源氏的姻亲之缘',
    },
  ],
  quotes: [
    {
      jp: 'こんな事から頭中将（とうのちゅうじょう）は女についての感想を言い出した。',
      zh: '由这番话，头中将开始说起他对女性的感想——即“雨夜品定”的缘起。（与谢野晶子现代日语译文）',
      chapter: '帚木帖',
    },
    {
      zh: '“只要脾气不古怪，忠厚柔顺，就可以考虑作为终身的伴侣。假如能够再有些许才能或是情趣什么的，就得当作是意外的收获……”（林文月译）',
      chapter: '帚木帖',
    },
  ],
  evaluations: [
    {
      text: '源氏的舅子兼挚友、对手，夕颜旧情人；“雨夜品定”所代表的男性女性观，与全书女性命运互为映照。',
      source: '本地研读笔记整理',
      kind: 'analysis',
      paraphrase: true,
    },
    {
      text: '“雨夜品定”是全书女性命运的“批评装置”：男性以门第、性情、才艺为女性分级，而实际被品定的女性无一不从属于这套话语。',
      source: '本地《源氏物语》深度研读笔记（叙事艺术）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '頭中将（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/頭中将',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['帚木', '红叶贺', '行幸', '藤裏叶'],
  relations: [
    { targetId: 'sa-daijin', type: 'parent', label: '父子' },
    { targetId: 'aoi', type: 'sibling', label: '兄妹' },
    { targetId: 'yugao', type: 'love', label: '旧情人（遗弃）' },
    { targetId: 'tamakazura', type: 'parent', label: '父女' },
    { targetId: 'kashiwagi', type: 'parent', label: '父子' },
    { targetId: 'kumoi', type: 'parent', label: '父女' },
    { targetId: 'genji', type: 'friend', label: '内兄·挚友·对手' },
    { targetId: 'yugiri', type: 'marriage', label: '岳父（云居雁之父）' },
  ],
};

export const yugiri: Character = {
  id: 'yugiri',
  name: '夕雾',
  nameJp: '夕霧（ゆうぎり）',
  alias: ['源氏大将', '中将'],
  group: 'children',
  tier: 'core',
  identity: '光源氏与葵上之子；云居雁之夫；落叶宫继室之夫',
  summary:
    '与父亲截然不同的端严人物。少年时与云居雁两情相悦却被拆散，发愤读书终成眷属；柏木死后强娶其遗孀落叶宫，暴露出与父亲相似的占有欲。',
  life: {
    birth: '葵帖（源氏约 20–22 岁）',
    death: '书中未明示（竹河帖后少出场）',
    note: '元服在少女帖（源氏约 30 岁）；成婚在藤裏叶帖（源氏约 33–34 岁）。',
  },
  story: [
    {
      chapter: '葵',
      age: '源氏约 20–22 岁（夕雾 0 岁）',
      text: '葵上产下他后暴卒；夕雾幼年由祖父母左大臣夫妇抚养，与花散里亲近。',
    },
    {
      chapter: '少女',
      age: '源氏约 30 岁',
      text: '元服后，源氏一反自己的风流，对他严加管教；他与幼年玩伴云居雁两情相悦，却被其父内大臣拆散，发愤读书。',
    },
    {
      chapter: '野分',
      age: '源氏约 31 岁',
      text: '台风翌晨探望六条院，隔着帘子窥见紫上之美，心神大乱——对继母的暗恋由此埋线。',
    },
    {
      chapter: '藤裏叶',
      age: '源氏约 33–34 岁',
      text: '内大臣终于让步，他与云居雁有情人终成眷属。',
    },
    {
      chapter: '柏木',
      age: '源氏约 41 岁',
      text: '柏木临终托孤于他；他自此照拂柏木遗族。',
    },
    {
      chapter: '夕雾',
      age: '源氏约 44–45 岁',
      text: '探望柏木遗孀落叶宫时起占有之心，屡遭拒绝后仍强娶；云居雁悲愤携子归宁，他百般赔罪。',
    },
    {
      chapter: '竹河',
      age: '源氏已殁',
      text: '其子藏人少将恋慕玉鬘之女，家族姻缘继续与源氏一族交织。',
    },
  ],
  symbols: [
    {
      glyph: 'mist',
      name: '夕雾',
      reading: 'ゆうぎり',
      meaning: '山中夕雾——遮蔽与暧昧，亦是他名字的意象',
    },
  ],
  quotes: [
    {
      jp: '山里の哀れを添ふる夕霧に立ち出（い）でんそらもなきここちして',
      zh: '山里的哀愁更添夕雾，仿佛连出门的天空都没有了。（原歌大意）',
      chapter: '夕雾帖',
    },
  ],
  evaluations: [
    {
      text: '夕雾强娶落叶宫一节，与《帚木》“女性论”遥相呼应，展现男性欲望对女性命运的支配。',
      source: '本地研读笔记整理（夕雾帖）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '夕霧（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/夕霧_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['少女', '野分', '藤裏叶', '夕雾', '竹河'],
  relations: [
    { targetId: 'genji', type: 'parent', label: '父子' },
    { targetId: 'aoi', type: 'parent', label: '母子' },
    { targetId: 'sa-daijin', type: 'parent', label: '外祖孙（抚养）' },
    { targetId: 'hanachirusato', type: 'adoption', label: '养母子' },
    { targetId: 'tamakazura', type: 'adoption', label: '养兄妹' },
    { targetId: 'tou-no-chujo', type: 'marriage', label: '岳父' },
    { targetId: 'kumoi', type: 'marriage', label: '正妻' },
    { targetId: 'ochiba', type: 'marriage', label: '继室（强娶）' },
    { targetId: 'kashiwagi', type: 'friend', label: '托孤之友' },
  ],
};

export const tamakazura: Character = {
  id: 'tamakazura',
  name: '玉鬘',
  nameJp: '玉鬘（たまかずら）',
  alias: ['夕颜之女', '髭黑大将夫人'],
  group: 'children',
  tier: 'core',
  identity: '夕颜与头中将之女；源氏养女；髭黑大将正妻',
  summary:
    '自幼随乳母流落筑紫，长成绝色后上京，被源氏迎为养女。源氏对她暗生情愫却守住养父立场；她最后嫁给髭黑大将，生儿育女，是玉鬘十帖的女主角。',
  life: {
    birth: '约帚木—夕颜帖之间（源氏 17 岁，书中未明示）',
    death: '书中未明示（竹河帖后少出场）',
    note: '嫁髭黑大将在真木柱帖（源氏约 32–33 岁）。',
  },
  story: [
    {
      chapter: '玉鬘',
      age: '源氏约 30 岁',
      text: '夕颜死后，幼小的她随乳母流落筑紫，长成绝色；为逃离当地豪强大夫监逼婚，乳母一家携她上京。',
    },
    {
      chapter: '玉鬘',
      age: '源氏约 30 岁',
      text: '初濑参诣途中遇见夕颜旧侍女右近，被迎入六条院，以源氏“女儿”身份登场。',
    },
    {
      chapter: '胡蝶',
      age: '源氏约 31 岁',
      text: '舟乐宴上众公卿纷纷求爱；雨霁月夜，源氏终于压抑不住向她表白——养父与养女之间的危险情感正式破题。',
    },
    {
      chapter: '萤',
      age: '源氏约 31 岁',
      text: '源氏强自守住养父立场，却又以赏萤为名，在蛍兵部卿宫面前放萤火照亮她的容姿，撩拨对方爱意。',
    },
    {
      chapter: '行幸',
      age: '源氏约 32 岁',
      text: '大原野行幸中，源氏向内大臣挑明“玉鬘是你的女儿”；内大臣震惊之余为她裳着式任腰结役。',
    },
    {
      chapter: '真木柱',
      age: '源氏约 32–33 岁',
      text: '最终嫁看似粗豪的髭黑大将；源氏愕然、她自感屈辱，婚后却生儿育女，生活渐入正轨。',
    },
    {
      chapter: '竹河',
      age: '源氏已殁',
      text: '髭黑死后，她为子女前程操劳：长女入冷泉院、次女任尚侍，皆不如意；儿子们反指责她攀附，晚景孤独。',
    },
  ],
  symbols: [
    {
      glyph: 'nadeshiko',
      name: '常夏·抚子',
      reading: 'とこなつ',
      meaning: '玉鬘之美的代号，也是“永远夏天的美”与身份的不安',
    },
  ],
  quotes: [
    {
      jp: '恋ひわたる身はそれながら玉鬘（たまかずら）いかなる筋を尋ね来つらん',
      zh: '恋慕之情依旧，玉鬘啊，你是循着哪条路来到此间？（原歌大意）',
      chapter: '玉鬘帖',
    },
  ],
  evaluations: [
    {
      text: '叶麟婧在结语中以“妩媚俏皮的玉鬘”概括她的风姿。',
      source: '叶麟婧《〈源氏物语〉：时代命运下“情困”的女性悲剧》',
      kind: 'paraphrase',
      paraphrase: true,
    },
    {
      text: '“常夏”是四季常开的深红五瓣花：以花写人，喻其美与其身世不安。',
      source: '徐向玉《〈源氏物语〉中花的意象研究》（转述）',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '玉鬘（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/玉鬘',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['玉鬘', '胡蝶', '行幸', '真木柱', '竹河'],
  relations: [
    { targetId: 'yugao', type: 'parent', label: '母女' },
    { targetId: 'tou-no-chujo', type: 'parent', label: '父女' },
    { targetId: 'genji', type: 'adoption', label: '养父女' },
    { targetId: 'hanachirusato', type: 'adoption', label: '养母女' },
    { targetId: 'kashiwagi', type: 'love', label: '单恋（求婚者之一）' },
    { targetId: 'yugiri', type: 'adoption', label: '养兄妹' },
  ],
};

export const kashiwagi: Character = {
  id: 'kashiwagi',
  name: '柏木',
  nameJp: '柏木（かしわぎ）',
  alias: ['内大臣长子', '卫门督'],
  group: 'left-minister',
  tier: 'core',
  identity: '头中将长子；女三宫之恋人；薰之生父',
  summary:
    '才貌出众却命运悲惨。窥见女三宫后单恋成疾，与之私通生下薰，被源氏发现后负罪卧病，临终托孤于夕雾，忧惧而死。他是“罪与报应”的核心人物，源氏之罪的“报应”由他承担。',
  life: {
    birth: '书中未明示',
    death: '柏木帖（源氏约 41 岁，柏木年仅三十余）',
    note: '原书明记“年仅三十余”。',
  },
  story: [
    {
      chapter: '胡蝶',
      age: '源氏约 31 岁',
      text: '舟乐宴上，他是向玉鬘求爱的公卿之一；后来又知玉鬘竟是亲姐，情感复杂。',
    },
    {
      chapter: '若菜（上）',
      age: '源氏约 39–40 岁',
      text: '蹴鞠之日，因猫掀帘窥见女三宫容颜，一见倾心，遂成祸端。',
    },
    {
      chapter: '若菜（下）',
      age: '源氏约 40–41 岁',
      text: '爱慕日炽，设法接近女三宫；女乐之夜与她强成密事，情书被源氏发现。',
    },
    {
      chapter: '柏木',
      age: '源氏约 41 岁',
      text: '负罪卧病，深知自己犯下与当年源氏相同的罪；临终托孤于夕雾，忧惧而死，年仅三十余。',
      aftermath: '遗爱之笛经一条御息所转交夕雾，托梦暗示应归真正的遗孤薰。',
    },
    {
      chapter: '横笛',
      age: '源氏约 42 岁',
      text: '遗爱之笛经一条御息所转交夕雾；托梦暗示此笛应归真正的遗孤薰——死者的意念由“物”继续传递。',
    },
  ],
  symbols: [
    {
      glyph: 'kashiwagi',
      name: '柏木',
      reading: 'かしわぎ',
      meaning: '叶守之神所守之木——被禁忌攀折的枝梢',
    },
  ],
  quotes: [
    {
      jp: '「柏木（かしわぎ）に葉守（はもり）の神は坐（ま）すとも人馴（ひとな）らすべき宿（やど）の梢（こずえ）か」',
      zh: '柏木上虽有叶守之神，岂是可供人攀折的枝梢？（原歌大意）',
      chapter: '柏木帖',
    },
  ],
  evaluations: [
    {
      text: '柏木帖是全书“罪与报应”的核心：源氏当年与藤壶之罪的轮回，如今在他身上重演。',
      source: '本地研读笔记整理',
      kind: 'analysis',
      paraphrase: true,
    },
  ],
  references: [
    {
      title: '柏木（源氏物語）（日本語版 Wikipedia）',
      url: 'https://ja.wikipedia.org/wiki/柏木_(源氏物語)',
      note: '人物资料页',
    },
    {
      title: '源氏物語（与谢野晶子现代日语全译）· 青空文库',
      url: 'https://www.aozora.gr.jp/cards/000052/files/5016_9758.html',
      note: '全 54 帖公版文本',
    },
  ],
  chapters: ['胡蝶', '若菜', '柏木', '横笛'],
  relations: [
    { targetId: 'tou-no-chujo', type: 'parent', label: '父子' },
    { targetId: 'onna-sannomiya', type: 'affair', label: '私通（薰之生父）' },
    { targetId: 'kaoru', type: 'parent', label: '生父（秘密）' },
    { targetId: 'tamakazura', type: 'love', label: '单恋' },
    { targetId: 'genji', type: 'rivalry', label: '宿怨（与女三宫私通）' },
    { targetId: 'yugiri', type: 'friend', label: '托孤之友' },
    { targetId: 'ochiba', type: 'marriage', label: '夫妻' },
  ],
};
