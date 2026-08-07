export interface WakaEntry {
  id: string;
  /** 帖名（与 CHAPTER_ORDER.name 一致） */
  chapter: string;
  jp: string;
  zh: string;
  /** 咏者（不确定时不填） */
  speaker?: string;
  /** 可链接的角色 id（仅主角色） */
  characterId?: string;
  /** 版本或背景备注 */
  note?: string;
}

/** 精选和歌名句（原文以与谢野晶子现代日语本为底，去除注音标记） */
export const famousWaka: WakaEntry[] = [
  {
    id: 'kiritsubo-suzumushi',
    chapter: '桐壶',
    jp: '鈴虫の声の限りを尽くしても長き夜飽かず降る涙かな',
    zh: '纵使像铃虫般把声音竭尽，这漫漫长夜里，泪还是落个不停。',
    speaker: '桐壶更衣',
    note: '桐壶更衣临终所作，是全书写“露之命”的起点。',
  },
  {
    id: 'hahakigi-hokori',
    chapter: '帚木',
    jp: '帚木の心を知らでその原の道にあやなくまどひぬるかな',
    zh: '不知帚木之心，在原野道上徒然迷途。',
    speaker: '光源氏',
    characterId: 'genji',
    note: '帚木远望如帚、近观无木，源氏以此喻求而不得之人（空蝉）。',
  },
  {
    id: 'utsusemi-mi',
    chapter: '空蝉',
    jp: '空蝉の身をかへてける木のもとになほ人がらのなつかしきかな',
    zh: '空蝉换了身，只把壳留在树旁；你的为人，仍叫人怀念。',
    characterId: 'utsusemi',
    note: '“空蝉”即蝉蜕，帖名由此而来。',
  },
  {
    id: 'utsusemi-hane',
    chapter: '空蝉',
    jp: 'うつせみの羽に置く露の木隠れて忍び忍びに濡るる袖かな',
    zh: '露珠落在蝉翼上，隐入树荫；衣袖也不住地悄悄濡湿。',
    characterId: 'utsusemi',
  },
  {
    id: 'yugao-hana',
    chapter: '夕颜',
    jp: '心あてにそれかとぞ見る白露の光そへたる夕顔の花',
    zh: '循香猜度，应是那白露生光的夕颜花吧。',
    speaker: '光源氏',
    characterId: 'yugao',
    note: '丰子恺译：夕颜凝露容光艳，料是伊人驻马来。',
  },
  {
    id: 'wakamurasaki',
    chapter: '若紫',
    jp: '手に摘みていつしかも見ん紫の根に通ひける野辺の若草',
    zh: '何时才能采撷那紫草——与紫草同根的原野嫩草。',
    speaker: '光源氏',
    characterId: 'murasaki',
  },
  {
    id: 'suetsumuhana-sode',
    chapter: '末摘花',
    jp: 'なつかしき色ともなしに何にこの末摘花を袖に触れけん',
    zh: '并非令人怀念的颜色，为何让这末摘花沾上衣袖。',
    speaker: '光源氏',
    characterId: 'suetsumuhana',
  },
  {
    id: 'oborozukiyo-tsuki',
    chapter: '花宴',
    jp: '月やあらぬ春や昔の春ならぬわが身ひとつはもとの身にして',
    zh: '月已非旧月，春已非旧春，唯我一人还是旧我。',
    speaker: '光源氏',
    characterId: 'oborozukiyo',
    note: '与谢野晶子本中此歌于早蕨帖被复引上句；通行本见花宴帖。',
  },
  {
    id: 'aoi-kazashi',
    chapter: '葵',
    jp: 'はかなしや人のかざせるあふひ故神のしるしの今日を待ちける',
    zh: '虚幻啊，人们发上插的葵草——神明的凭据，竟等来了今日。',
    note: '葵祭之咏，帖名由此而来。',
  },
  {
    id: 'sakaki-ori',
    chapter: '贤木',
    jp: '神垣はしるしの杉もなきものをいかにまがへて折れる榊ぞ',
    zh: '神垣之内本无标识的杉木，为何误折了这枝榊？',
    note: '“贤木”即榊，帖名由此而来。',
  },
  {
    id: 'suma-tsuki',
    chapter: '须磨',
    jp: '見るほどぞしばし慰むめぐり合はん月の都ははるかなれども',
    zh: '望着它，才暂且得到慰藉；可再会之期，月下的京城仍那样遥远。',
    speaker: '光源氏',
    characterId: 'genji',
    note: '须磨流放中望月之咏。',
  },
  {
    id: 'suma-koto',
    chapter: '须磨',
    jp: '琴の音にひきとめらるる綱手縄たゆたふ心君知るらめや',
    zh: '琴音如引船的纲绳，把人心牵住；这摇曳的心意，君可知晓？',
    note: '以琴传情之咏，与明石之缘相系。',
    characterId: 'akashi',
  },
  {
    id: 'miotsukushi',
    chapter: '澪标',
    jp: '数ならでなにはのこともかひなきに何みをつくし思ひ初めけん',
    zh: '我本算不得什么，难波之事也徒然无益；为何当初要这样以身相许。',
    speaker: '明石君',
    characterId: 'akashi',
    note: '“澪标”双关“身を尽くし”（以身相许），帖名由此而来。',
  },
  {
    id: 'yomogi-kokoro',
    chapter: '蓬生',
    jp: '尋ねてもわれこそ訪はめ道もなく深き蓬のもとの心を',
    zh: '即使来寻，也该由我亲自来访；纵无路径，也要探那深蓬之下的心。',
    speaker: '光源氏',
    characterId: 'suetsumuhana',
    note: '蓬即艾蒿，帖名以荒草写末摘花的忠贞。',
  },
  {
    id: 'sekia-ousaka',
    chapter: '关屋',
    jp: '逢坂の関やいかなる関なれば繁きなげきの中を分くらん',
    zh: '逢坂关是怎样的关啊，竟把重重愁叹分隔开来？',
    note: '逢坂关送别之咏，帖名由此而来。',
  },
  {
    id: 'asagao-tsuyu',
    chapter: '朝颜',
    jp: '見し折りのつゆ忘られぬ朝顔の花の盛りは過ぎやしぬらん',
    zh: '当年相见的露水难以忘怀，朝颜花盛的时节，是否已过去了？',
    speaker: '光源氏',
    characterId: 'asagao',
  },
  {
    id: 'tamakazura-suji',
    chapter: '玉鬘',
    jp: '恋ひわたる身はそれながら玉鬘いかなる筋を尋ね来つらん',
    zh: '恋慕之情依旧，玉鬘啊，你是循着哪条路来到此间？',
    speaker: '光源氏',
    characterId: 'tamakazura',
  },
  {
    id: 'kashiwagi-kami',
    chapter: '柏木',
    jp: '柏木に葉守の神は坐すとも人馴らすべき宿の梢か',
    zh: '柏木上虽有叶守之神，岂是可供人攀折的枝梢？',
    speaker: '柏木',
    characterId: 'kashiwagi',
    note: '柏木负罪之咏，帖名由此而来。',
  },
  {
    id: 'yugiri-yama',
    chapter: '夕雾',
    jp: '山里の哀れを添ふる夕霧に立ち出でんそらもなきここちして',
    zh: '山里的哀愁更添夕雾，仿佛连出门的天空都没有了。',
    speaker: '夕雾',
    characterId: 'yugiri',
  },
  {
    id: 'kagero-yo',
    chapter: '蜻蛉',
    jp: 'あはれともうしともいはじ蜻蛉のあるかなきかに消ゆる世なれば',
    zh: '不说可哀，也不说可忧——阳炎若有若无，此世本如此消逝。',
    note: '“蜻蛉”即阳炎，帖名由此而来。',
  },
  {
    id: 'ukifune-shima',
    chapter: '浮舟',
    jp: '橘の小嶋は色も変はらじをこの浮舟ぞ行くへ知られぬ',
    zh: '橘之小岛颜色或不变，这一叶浮舟却不知将漂向何方。',
    speaker: '浮舟',
    characterId: 'ukifune',
    note: '“浮舟”之名的由来。',
  },
];
