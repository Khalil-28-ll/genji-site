/**
 * 源氏年立表（54 帖 × 源氏年龄）
 *
 * 以丰子恺译本（人民文学出版社）各回回末注文为基准整理，即学界所称“二期年立”；
 * 丰译本注文付阙或与正文年代有出入处，一律标“约”并在备注说明。
 * 第三部（42–54 帖）发生在源氏死后，年龄栏记为“源氏已殁”。
 */
export interface ChronologyEntry {
  num: number;
  chapter: string;
  age: string;
  note?: string;
}

export const GENJI_AGE: ChronologyEntry[] = [
  { num: 1, chapter: '桐壶', age: '0–12 岁', note: '生于本帖之前；更衣于源氏 3 岁时去世；12 岁元服' },
  { num: 2, chapter: '帚木', age: '约 16–17 岁', note: '丰译帚木注作十六岁夏、空蝉注作十七岁夏，通行年立取十七岁' },
  { num: 3, chapter: '空蝉', age: '17 岁', note: '丰译注：十七岁夏天；空蝉拒爱' },
  { num: 4, chapter: '夕颜', age: '17 岁', note: '同年秋；夕颜之死' },
  { num: 5, chapter: '若紫', age: '18 岁', note: '丰译注：十八岁暮春至初冬；北山遇若紫；与藤壶私通' },
  { num: 6, chapter: '末摘花', age: '约 18–19 岁', note: '丰译注：十八岁春至十九岁春' },
  { num: 7, chapter: '红叶贺', age: '约 18–19 岁', note: '丰译注：十八岁秋至十九岁秋；青海波之舞；冷泉帝出生' },
  { num: 8, chapter: '花宴', age: '20 岁', note: '丰译注：二十岁春天；与胧月夜定情' },
  { num: 9, chapter: '葵', age: '约 22–23 岁', note: '丰译注：两年以后即二十二岁至二十三岁正月；葵上之死、夕雾出生' },
  { num: 10, chapter: '贤木', age: '约 22 岁 9 月—25 岁夏', note: '丰译注；桐壶帝崩御；藤壶出家；源氏失势' },
  { num: 11, chapter: '花散里', age: '25 岁夏', note: '丰译注' },
  { num: 12, chapter: '须磨', age: '约 26–27 岁', note: '丰译注作“二十六岁三月至二十六岁三月”，疑为刊误；下接明石帖二十七岁三月' },
  { num: 13, chapter: '明石', age: '约 27 岁 3 月—28 岁 8 月', note: '丰译注；明石中宫生于源氏 28 岁 3 月前后' },
  { num: 14, chapter: '澪标', age: '约 28 岁 10 月—29 岁岁暮', note: '丰译注；冷泉帝即位，源氏复权任内大臣' },
  { num: 15, chapter: '蓬生', age: '约 28–29 岁', note: '丰译注：与前回同一时期，二十八岁至二十九岁四月；末摘花守候' },
  { num: 16, chapter: '关屋', age: '29 岁秋', note: '丰译注；逢坂关与空蝉擦肩' },
  { num: 17, chapter: '绘合', age: '31 岁春', note: '丰译注；秋好中宫入内' },
  { num: 18, chapter: '松风', age: '31 岁秋', note: '丰译注；明石君上京居大堰山荘' },
  { num: 19, chapter: '薄云', age: '约 31 岁冬—32 岁秋', note: '丰译注；母女诀别；藤壶女院病逝' },
  { num: 20, chapter: '朝颜', age: '约 32 岁秋—冬', note: '丰译注；向朝颜表白被婉拒' },
  { num: 21, chapter: '少女', age: '约 33 岁夏—35 岁秋', note: '丰译注；夕雾元服；营造六条院' },
  { num: 22, chapter: '玉鬘', age: '约 34 岁 9 月—35 岁末', note: '丰译注；玉鬘上京入六条院' },
  { num: 23, chapter: '初音', age: '36 岁', note: '丰译注；六条院新年巡礼' },
  { num: 24, chapter: '胡蝶', age: '36 岁 3—4 月', note: '丰译注；舟乐宴；向玉鬘表白' },
  { num: 25, chapter: '萤', age: '36 岁 5 月', note: '丰译注；物语论' },
  { num: 26, chapter: '常夏', age: '36 岁 6 月', note: '丰译注；近江君话题' },
  { num: 27, chapter: '篝火', age: '36 岁 7 月', note: '丰译注；篝火夜话' },
  { num: 28, chapter: '野分', age: '36 岁 8 月', note: '丰译注；台风；夕雾窥见紫上' },
  { num: 29, chapter: '行幸', age: '约 36 岁 12 月—37 岁 2 月', note: '丰译注；玉鬘身世揭晓' },
  { num: 30, chapter: '藤袴', age: '37 岁秋', note: '丰译注；求婚者竞逐' },
  { num: 31, chapter: '真木柱', age: '约 37 岁冬—38 岁冬', note: '丰译注；玉鬘嫁髭黑大将' },
  { num: 32, chapter: '梅枝', age: '39 岁春', note: '丰译注；明石中宫入内筹备' },
  { num: 33, chapter: '藤裏叶', age: '约 39 岁 3—10 月', note: '丰译注；明石中宫入内；源氏位列准太上天皇' },
  { num: 34, chapter: '若菜（上）', age: '约 39 岁 12 月—40 岁', note: '丰译注（新菜上·下合计三十九岁十二月至四十一岁三月）；迎娶女三宫；匂宫出生；40 岁之贺' },
  { num: 34, chapter: '若菜（下）', age: '约 41 岁 3 月起（42—45 岁四年无记载，续 46—47 岁）', note: '丰译新菜续注；柏木与女三宫密事' },
  { num: 35, chapter: '柏木', age: '约 48 岁正月—秋', note: '丰译注；薰出生；柏木忧惧而死' },
  { num: 36, chapter: '横笛', age: '约 49 岁 2 月—秋', note: '丰译注；柏木遗爱之笛' },
  { num: 37, chapter: '铃虫', age: '约 50 岁夏—8 月', note: '丰译注；女三宫佛事；铃虫宴' },
  { num: 38, chapter: '夕雾', age: '约 50 岁 8 月—冬', note: '丰译注；夕雾强娶落叶宫' },
  { num: 39, chapter: '御法', age: '约 51 岁春—秋', note: '丰译注；紫上之死' },
  { num: 40, chapter: '幻', age: '约 52 岁春—冬', note: '丰译注；紫上周年忌；决意出家' },
  { num: 41, chapter: '云隐', age: '约 53 岁起（无正文）', note: '丰译注：幻帖次年五十三岁至六十岁之间死去，卒年至早五十五六岁' },
  { num: 42, chapter: '匂宫', age: '源氏已殁', note: '薰、匂宫一代' },
  { num: 43, chapter: '红梅', age: '源氏已殁', note: '匂宫好色之名' },
  { num: 44, chapter: '竹河', age: '源氏已殁', note: '玉鬘子女一代' },
  { num: 45, chapter: '桥姬', age: '源氏已殁', note: '宇治十帖始' },
  { num: 46, chapter: '椎本', age: '源氏已殁', note: '八宫圆寂' },
  { num: 47, chapter: '总角', age: '源氏已殁', note: '大君之死' },
  { num: 48, chapter: '早蕨', age: '源氏已殁', note: '中君入京' },
  { num: 49, chapter: '宿木', age: '源氏已殁', note: '薰迎娶女二宫；浮舟出场' },
  { num: 50, chapter: '东屋', age: '源氏已殁', note: '浮舟身世' },
  { num: 51, chapter: '浮舟', age: '源氏已殁', note: '浮舟投川' },
  { num: 52, chapter: '蜻蛉', age: '源氏已殁', note: '浮舟失踪' },
  { num: 53, chapter: '手习', age: '源氏已殁', note: '浮舟出家' },
  { num: 54, chapter: '梦浮桥', age: '源氏已殁', note: '全书终' },
];

export const GENJI_AGE_BY_CHAPTER: Record<string, string> = Object.fromEntries(
  GENJI_AGE.map((e) => [e.chapter, e.age]),
);
