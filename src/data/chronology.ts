/**
 * 源氏年立表（54 帖 × 源氏年龄）
 *
 * 依据本地《源氏物语深度研读笔记》与通行年立研究整理；
 * 因学界存在一期/二期年立等不同体系，凡无定论处一律标“约”。
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
  { num: 2, chapter: '帚木', age: '17 岁', note: '五月雨之夜“雨夜品定”' },
  { num: 3, chapter: '空蝉', age: '17 岁', note: '空蝉拒爱' },
  { num: 4, chapter: '夕颜', age: '17 岁', note: '夕颜之死' },
  { num: 5, chapter: '若紫', age: '18 岁', note: '北山遇若紫；与藤壶私通' },
  { num: 6, chapter: '末摘花', age: '18 岁', note: '深夜造访末摘花' },
  { num: 7, chapter: '红叶贺', age: '19 岁', note: '青海波之舞；冷泉帝出生' },
  { num: 8, chapter: '花宴', age: '20 岁', note: '与胧月夜定情' },
  { num: 9, chapter: '葵', age: '约 20–22 岁', note: '桐壶帝让位；葵上之死、夕雾出生' },
  { num: 10, chapter: '贤木', age: '约 22–23 岁', note: '桐壶帝崩御；藤壶出家；源氏失势' },
  { num: 11, chapter: '花散里', age: '约 23 岁', note: '梅雨晴间走访花散里' },
  { num: 12, chapter: '须磨', age: '约 23–25 岁', note: '流放须磨' },
  { num: 13, chapter: '明石', age: '约 25–26 岁', note: '移居明石，与明石君结缘' },
  { num: 14, chapter: '澪标', age: '约 26–27 岁', note: '冷泉帝即位，源氏复权任内大臣；明石中宫出生' },
  { num: 15, chapter: '蓬生', age: '约 27 岁', note: '末摘花守候' },
  { num: 16, chapter: '关屋', age: '约 27 岁', note: '逢坂关与空蝉擦肩' },
  { num: 17, chapter: '绘合', age: '约 27–28 岁', note: '秋好中宫入内' },
  { num: 18, chapter: '松风', age: '约 28 岁', note: '明石君上京居大堰山荘' },
  { num: 19, chapter: '薄云', age: '约 28–29 岁', note: '母女诀别；藤壶女院病逝' },
  { num: 20, chapter: '朝颜', age: '约 29 岁', note: '向朝颜表白被婉拒' },
  { num: 21, chapter: '少女', age: '约 30 岁', note: '夕雾元服；营造六条院' },
  { num: 22, chapter: '玉鬘', age: '约 30 岁', note: '玉鬘上京入六条院' },
  { num: 23, chapter: '初音', age: '约 31 岁', note: '六条院新年巡礼' },
  { num: 24, chapter: '胡蝶', age: '约 31 岁', note: '舟乐宴；向玉鬘表白' },
  { num: 25, chapter: '萤', age: '约 31 岁', note: '物语论' },
  { num: 26, chapter: '常夏', age: '约 31 岁', note: '近江君话题' },
  { num: 27, chapter: '篝火', age: '约 31 岁', note: '篝火夜话' },
  { num: 28, chapter: '野分', age: '约 31 岁', note: '台风；夕雾窥见紫上' },
  { num: 29, chapter: '行幸', age: '约 32 岁', note: '玉鬘身世揭晓' },
  { num: 30, chapter: '藤袴', age: '约 32 岁', note: '求婚者竞逐' },
  { num: 31, chapter: '真木柱', age: '约 32–33 岁', note: '玉鬘嫁髭黑大将' },
  { num: 32, chapter: '梅枝', age: '约 33 岁', note: '明石中宫入内筹备' },
  { num: 33, chapter: '藤裏叶', age: '约 33–34 岁', note: '明石中宫入内；源氏位列准太上天皇' },
  { num: 34, chapter: '若菜（上）', age: '约 39–40 岁', note: '迎娶女三宫；匂宫出生' },
  { num: 34, chapter: '若菜（下）', age: '约 40–41 岁', note: '柏木与女三宫密事' },
  { num: 35, chapter: '柏木', age: '约 41 岁', note: '薰出生；柏木忧惧而死' },
  { num: 36, chapter: '横笛', age: '约 42 岁', note: '柏木一周忌前后' },
  { num: 37, chapter: '铃虫', age: '约 42 岁', note: '女三宫佛事；铃虫宴' },
  { num: 38, chapter: '夕雾', age: '约 44–45 岁', note: '夕雾强娶落叶宫' },
  { num: 39, chapter: '御法', age: '约 45 岁前后', note: '紫上之死' },
  { num: 40, chapter: '幻', age: '约 45–46 岁', note: '紫上周年忌；决意出家' },
  { num: 41, chapter: '云隐', age: '约 46 岁前后', note: '无正文；历来推定写源氏出家与离世' },
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
