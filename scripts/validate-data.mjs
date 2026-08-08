import {
  characters,
  CHAPTER_NUM,
  RELATION_TYPE_LABEL,
} from '../src/data/characters.ts';

const errors = [];
const ids = new Set(characters.map((c) => c.id));
const chapterNames = new Set(Object.keys(CHAPTER_NUM));
const relationTypes = new Set(Object.keys(RELATION_TYPE_LABEL));
const evalKinds = new Set(['original', 'paraphrase', 'analysis']);

for (const c of characters) {
  for (const field of ['id', 'name', 'nameJp', 'identity', 'summary', 'group', 'tier']) {
    if (!c[field]) errors.push(`${c.id || '?'}: 缺少 ${field}`);
  }
  if (!['core', 'supporting'].includes(c.tier)) {
    errors.push(`${c.id}: tier 必须是 core 或 supporting`);
  }
  if (!c.life || !c.life.birth?.trim() || !c.life.death?.trim()) {
    errors.push(`${c.id}: 缺少 life.birth / life.death`);
  }
  const minStory = c.tier === 'core' ? 4 : 2;
  if (!Array.isArray(c.story) || c.story.length < minStory) {
    errors.push(`${c.id}: ${c.tier} 角色 story 需要至少 ${minStory} 条带帖名的生平事件`);
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
  const uniqueChapters = new Set((c.story ?? []).map((ev) => ev.chapter));
  if (uniqueChapters.size < 2) {
    errors.push(`${c.id}: 生平时间线仅覆盖 ${uniqueChapters.size} 个不同帖名（至少 2 个）`);
  }
  if (!c.symbols?.length) errors.push(`${c.id}: 缺少 symbols`);
  if (!c.quotes?.length) errors.push(`${c.id}: 缺少 quotes`);
  if (!c.evaluations?.length) errors.push(`${c.id}: 缺少 evaluations`);
  if (!c.chapters?.length) errors.push(`${c.id}: 缺少 chapters`);
  for (const e of c.evaluations ?? []) {
    const kind = e.kind ?? (e.paraphrase ? 'paraphrase' : 'original');
    if (!evalKinds.has(kind)) {
      errors.push(`${c.id}: evaluations.kind「${kind}」不合法`);
    }
    if (e.link && !/^https?:\/\//.test(e.link)) {
      errors.push(`${c.id}: evaluations.link 不是合法 URL（${e.link}）`);
    }
  }
  for (const r of c.references ?? []) {
    if (!r.title?.trim() || !/^https?:\/\//.test(r.url || '')) {
      errors.push(`${c.id}: references 需要 title 与合法 url`);
    }
  }
  for (const r of c.relations ?? []) {
    if (!ids.has(r.targetId)) errors.push(`${c.id}: relations 指向不存在的 ${r.targetId}`);
    if (!relationTypes.has(r.type)) errors.push(`${c.id}: relations.type「${r.type}」不存在`);
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

if (errors.length) {
  console.error(`数据校验失败（${errors.length} 项）：`);
  for (const e of errors) console.error(' - ' + e);
  process.exit(1);
}

const storyCount = characters.reduce((n, c) => n + c.story.length, 0);
console.log(
  `数据校验通过：${characters.length} 位角色（core ${characters.filter((c) => c.tier === 'core').length} / supporting ${characters.filter((c) => c.tier === 'supporting').length}）、` +
    `${storyCount} 条带帖名的生平事件、${characters.reduce((n, c) => n + c.relations.length, 0)} 条关系。`,
);
