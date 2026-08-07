import {
  characters,
  auxiliaryNodes,
  auxEdges,
  CHAPTER_NUM,
} from '../src/data/characters.ts';

const errors = [];
const ids = new Set(characters.map((c) => c.id));
const allIds = new Set([...ids, ...auxiliaryNodes.map((a) => a.id)]);
const chapterNames = new Set(Object.keys(CHAPTER_NUM));

for (const c of characters) {
  for (const field of ['id', 'name', 'nameJp', 'identity', 'summary', 'group']) {
    if (!c[field]) errors.push(`${c.id || '?'}: 缺少 ${field}`);
  }
  if (!Array.isArray(c.story) || c.story.length < 4) {
    errors.push(`${c.id}: story 需要至少 4 条带帖名的生平事件`);
  } else {
    for (const ev of c.story) {
      if (!ev || typeof ev.chapter !== 'string' || !ev.text?.trim()) {
        errors.push(`${c.id}: story 中存在缺少 chapter/text 的事件`);
        continue;
      }
      if (!chapterNames.has(ev.chapter)) {
        errors.push(`${c.id}: 帖名「${ev.chapter}」不在 54 帖表中`);
      }
    }
  }
  if (!c.symbols?.length) errors.push(`${c.id}: 缺少 symbols`);
  if (!c.quotes?.length) errors.push(`${c.id}: 缺少 quotes`);
  if (!c.evaluations?.length) errors.push(`${c.id}: 缺少 evaluations`);
  if (!c.chapters?.length) errors.push(`${c.id}: 缺少 chapters`);
  for (const r of c.relations ?? []) {
    if (!allIds.has(r.targetId)) errors.push(`${c.id}: relations 指向不存在的 ${r.targetId}`);
  }
}

for (const e of auxEdges ?? []) {
  if (!allIds.has(e.from) || !allIds.has(e.to)) {
    errors.push(`auxEdge ${e.from}->${e.to} 指向不存在的节点`);
  }
}

const relationPairs = new Map();
for (const c of characters) {
  for (const r of c.relations ?? []) {
    if (!ids.has(r.targetId)) continue;
    const key = [c.id, r.targetId].sort().join('|');
    if (!relationPairs.has(key)) relationPairs.set(key, new Set());
    relationPairs.get(key).add(c.id);
  }
}
for (const [key, sides] of relationPairs) {
  if (sides.size < 2) {
    errors.push(`关系不对称: ${key} 只有 ${[...sides].join(', ')} 提及`);
  }
}

// 每个主要角色至少要有 2 条不同帖名的生平事件，避免时间线过于单薄
for (const c of characters) {
  const uniqueChapters = new Set((c.story ?? []).map((ev) => ev.chapter));
  if (uniqueChapters.size < 2) {
    errors.push(`${c.id}: 生平时间线仅覆盖 ${uniqueChapters.size} 个不同帖名`);
  }
}

if (errors.length) {
  console.error(`数据校验失败（${errors.length} 项）：`);
  for (const e of errors) console.error(' - ' + e);
  process.exit(1);
}

const storyCount = characters.reduce((n, c) => n + c.story.length, 0);
console.log(
  `数据校验通过：${characters.length} 位角色、${auxiliaryNodes.length} 个辅助节点、` +
    `${auxEdges?.length ?? 0} 条辅助关系、共 ${storyCount} 条带帖名的生平事件。`,
);
