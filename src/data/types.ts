export type RelationType =
  | 'parent'
  | 'sibling'
  | 'marriage'
  | 'concubine'
  | 'affair'
  | 'love'
  | 'adoption'
  | 'guardian'
  | 'servant'
  | 'friend'
  | 'rivalry'
  | 'religious';

export type CharacterGroup =
  | 'royal'
  | 'center'
  | 'wives'
  | 'children'
  | 'left-minister'
  | 'uji';

export type CharacterTier = 'core' | 'supporting';

export interface SymbolInfo {
  glyph: string;
  name: string;
  reading?: string;
  meaning: string;
}

export interface Quote {
  /** 日语原文（与谢野晶子现代日语译文或原和歌）；取自中译本时可省略 */
  jp?: string;
  zh: string;
  chapter: string;
}

export interface StoryEvent {
  /** 帖名（与 CHAPTER_ORDER.name 一致，如“若菜（上）”） */
  chapter: string;
  /** 该帖中的关键事件 */
  text: string;
  /** 事件发生时的源氏年龄标定，如“源氏17岁”；不确定时标“约” */
  age?: string;
  /** 书中描写的出场、逝后影响等原文性描写（引文或简述），可省略 */
  aftermath?: string;
}

export interface LifeSpan {
  /** 出生标定：以帖名＋源氏年龄表述；书中未明示则写“书中未明示” */
  birth: string;
  /** 逝世/出家等终局标定；书中未明示则写“书中未明示” */
  death: string;
  /** 补充说明，如“终年约43岁”“云隐无正文，历来推定” */
  note?: string;
}

export interface Evaluation {
  text: string;
  source: string;
  /** 原文直接引用 / 转述 / 论文分析 */
  kind?: 'original' | 'paraphrase' | 'analysis';
  /** 兼容旧数据：true 表示转述 */
  paraphrase?: boolean;
  /** 来源链接（论文、公版原文、资料页等） */
  link?: string;
  linkLabel?: string;
}

export interface Reference {
  title: string;
  url: string;
  note?: string;
}

export interface Relation {
  targetId: string;
  type: RelationType;
  label: string;
}

export interface Character {
  id: string;
  name: string;
  nameJp: string;
  alias: string[];
  group: CharacterGroup;
  /** core=核心角色（生平≥4条），supporting=次要角色（生平≥2条） */
  tier: CharacterTier;
  identity: string;
  summary: string;
  life: LifeSpan;
  story: StoryEvent[];
  symbols: SymbolInfo[];
  quotes: Quote[];
  evaluations: Evaluation[];
  /** 延伸阅读链接（论文、公版原文、资料页） */
  references?: Reference[];
  chapters: string[];
  relations: Relation[];
}

export const RELATION_TYPE_LABEL: Record<RelationType, string> = {
  parent: '亲子·祖孙',
  sibling: '手足',
  marriage: '夫妻',
  concubine: '侧室',
  affair: '私通·禁忌',
  love: '恋慕·情缘',
  adoption: '养亲',
  guardian: '庇护·托付',
  servant: '主从',
  friend: '友伴',
  rivalry: '政敌·宿怨',
  religious: '佛缘·救度',
};

export const GROUP_LABEL: Record<CharacterGroup, string> = {
  royal: '皇室与父母',
  center: '光源氏',
  wives: '妻妾与情人',
  children: '子女与二代',
  'left-minister': '左大臣家',
  uji: '宇治十帖',
};

/** 54 帖顺序（若菜分上·下两卷，均编为第 34 帖；云隐无正文，仍占第 41 帖） */
export const CHAPTER_ORDER: { num: number; name: string }[] = [
  { num: 1, name: '桐壶' },
  { num: 2, name: '帚木' },
  { num: 3, name: '空蝉' },
  { num: 4, name: '夕颜' },
  { num: 5, name: '若紫' },
  { num: 6, name: '末摘花' },
  { num: 7, name: '红叶贺' },
  { num: 8, name: '花宴' },
  { num: 9, name: '葵' },
  { num: 10, name: '贤木' },
  { num: 11, name: '花散里' },
  { num: 12, name: '须磨' },
  { num: 13, name: '明石' },
  { num: 14, name: '澪标' },
  { num: 15, name: '蓬生' },
  { num: 16, name: '关屋' },
  { num: 17, name: '绘合' },
  { num: 18, name: '松风' },
  { num: 19, name: '薄云' },
  { num: 20, name: '朝颜' },
  { num: 21, name: '少女' },
  { num: 22, name: '玉鬘' },
  { num: 23, name: '初音' },
  { num: 24, name: '胡蝶' },
  { num: 25, name: '萤' },
  { num: 26, name: '常夏' },
  { num: 27, name: '篝火' },
  { num: 28, name: '野分' },
  { num: 29, name: '行幸' },
  { num: 30, name: '藤袴' },
  { num: 31, name: '真木柱' },
  { num: 32, name: '梅枝' },
  { num: 33, name: '藤裏叶' },
  { num: 34, name: '若菜（上）' },
  { num: 34, name: '若菜（下）' },
  { num: 35, name: '柏木' },
  { num: 36, name: '横笛' },
  { num: 37, name: '铃虫' },
  { num: 38, name: '夕雾' },
  { num: 39, name: '御法' },
  { num: 40, name: '幻' },
  { num: 41, name: '云隐' },
  { num: 42, name: '匂宫' },
  { num: 43, name: '红梅' },
  { num: 44, name: '竹河' },
  { num: 45, name: '桥姬' },
  { num: 46, name: '椎本' },
  { num: 47, name: '总角' },
  { num: 48, name: '早蕨' },
  { num: 49, name: '宿木' },
  { num: 50, name: '东屋' },
  { num: 51, name: '浮舟' },
  { num: 52, name: '蜻蛉' },
  { num: 53, name: '手习' },
  { num: 54, name: '梦浮桥' },
];

export const CHAPTER_NUM: Record<string, number> = Object.fromEntries(
  CHAPTER_ORDER.map((c) => [c.name, c.num]),
);
