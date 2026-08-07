# 源氏物语人物图鉴

以“物哀”为主题的《源氏物语》角色图鉴网站：

- **主页**自上而下依次为“物哀”主题区、成书速览、《关于〈源氏物语〉》（结构与主题）、以光源氏为中心的**家族思维导图**、“平安文学走廊”（《枕草子》《竹取物语》《伊势物语》等八部平安作品）。
- **思维导图**为自绘 SVG：单击角色可放大其关系网（本人与直接关联者高亮），双击节点或点击聚焦卡片中的按钮可进入介绍；灰色虚线节点为相关人物，悬停可见说明。
- **22 位核心角色**各有独立档案页：简介、**带帖名的生平时间线**、可互链的人物关系、原文引句（日语原文＋中文释义）、古今评说、象征意象、主要出场帖。
- 视觉为自然克制的平安和风：和纸米色底、低饱和传统色、天青（宋韵）仅作点缀；字体为本地打包的 Noto Serif SC / JP，不依赖 CDN。

## 运行

本机没有全局 Node/npm，请先使用 Codex 运行时自带工具链：

```powershell
$env:PATH = 'C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback;' + $env:PATH
pnpm run dev       # 本地开发预览（http://localhost:5173）
pnpm run build     # 生产构建，输出到 dist/
pnpm run preview   # 预览 dist/
pnpm run validate  # 数据校验（关系对称性、字段完整性、帖名时间线）
```

### 最简单的打开方式

双击项目根目录下的 **`打开网站.cmd`**：它会用 Node 直接启动静态服务器并打开浏览器访问 `http://localhost:4173`（不依赖 pnpm）。

注意：不要直接双击 `dist/index.html`——现代浏览器出于安全限制禁止以 `file://` 方式运行 ES 模块，必须经由本地服务器访问。

如需开发热更新模式，可双击 **`启动开发服务器.cmd`**（需要 pnpm，已自动配置路径），访问 `http://localhost:5173`。

## 结构

- `src/data/entries/`：22 位角色档案与辅助节点数据（`story` 为“帖名＋事件”结构）
- `src/data/types.ts`：数据模型与 54 帖编号表
- `src/data/characters.ts`：数据索引、关系图推导与节点坐标（1800×1200 画布）
- `src/components/MindMap.tsx`：家族思维导图（单击聚焦 / 双击进详情）
- `src/components/HomePage.tsx`：主题区、关于本书、关系图、平安文学走廊
- `src/components/CharacterPage.tsx`：角色详情页（带帖名生平时间线）
- `src/components/Crest.tsx`：象征花押（SVG）
- `scripts/validate-data.mjs`：数据校验脚本

## 资料来源

与谢野晶子现代日语译本（青空文库）、中文维基百科角色列表、本地《源氏物语》深度研读笔记与逐帖摘要，以及叶麟婧、徐向玉、王向远、安小康等论文。原文引句除注明译名外均为编者所译大意；古今评说均标注出处。
