# 源氏物语人物图鉴

面向日本文学研究者与爱好者的《源氏物语》角色图鉴网站（以“物哀”为主题）：

- **主页**：主题区、成书速览、《关于〈源氏物语〉》（结构与主题）、家族思维导图、“名家评说与延伸阅读”、创作时代与平安文学入口。
- **和歌名句集**（`#/waka`）：精选二十一首传诵较广的和歌，含日语原文、中文大意、出处帖与相关角色链接；原文以与谢野晶子现代日语本为底。
- **平安文学专页**（`#/heian`）：创作时代（摄关政治、后宫与假名文学）、平安文学起源与发展、对后世的影响，以及 16 部平安作品简介。
- **源氏年立表**（`#/chronology`）：54 帖 × 源氏年龄对照表，以及 36 位人物生卒/终局一览；不确定处一律标“约”。
- **思维导图**为自绘 SVG：36 位角色全部可单击聚焦、双击进入介绍；关系线采用 12 类“高区分度传统色 + 线型”双编码，图例同步。
- **36 位角色档案**（22 位核心 + 14 位次要，`#/characters/:id/:page`）：采用 5 页翻页结构——①总览（身份/简介/判词/象征意象/官职称谓小注）②生平（生卒标定＋帖名时间线＋源氏年龄＋书中余韵描写）③人物关系 ④原文引句 ⑤古今评说（原文引用/转述/论文分析分级）与延伸阅读；支持键盘 ← → 与 URL 页码。
- **六套角色页风格**按分组自动分配：王朝金彩（royal）、光与月（center）、藤紫雅致（wives）、抚子青（children）、深绯绳结（left-minister）、宇治幽玄（uji）。
- 视觉为自然克制的平安和风：和纸米色底、低饱和传统色、淡青海波纹样水印；小字统一加粗加大，正文字号与行高提升。字体为本地打包的 Noto Serif SC / JP，不依赖 CDN。

## 运行

本机没有全局 Node/npm，请先使用 Codex 运行时自带工具链：

```powershell
$env:PATH = 'C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback;' + $env:PATH
pnpm run dev       # 本地开发预览（http://localhost:5173）
pnpm run build     # 生产构建，输出到 dist/
pnpm run preview   # 预览 dist/
pnpm run validate  # 数据校验（角色数、生卒字段、关系双向性、帖名、链接格式）
```

### 最简单的打开方式

双击项目根目录下的 **`打开网站.cmd`**：它会用 Node 直接启动静态服务器并打开浏览器访问 `http://localhost:4173`（不依赖 pnpm）。

注意：不要直接双击 `dist/index.html`——现代浏览器出于安全限制禁止以 `file://` 方式运行 ES 模块，必须经由本地服务器访问。

如需开发热更新模式，可双击 **`启动开发服务器.cmd`**（需要 pnpm，已自动配置路径），访问 `http://localhost:5173`。

## 部署

仓库已配置 GitHub Actions（`.github/workflows/deploy-pages.yml`）：推送到 `main` 后自动构建并以 GitHub Pages 发布。

```powershell
git add .
git commit -m "更新"
git push
```

访问 `https://Khalil-28-ll.github.io/genji-site/`。注意仓库需保持 Public（免费版 Pages 不支持私有仓库）。

## 结构

- `src/data/entries/`：36 位角色档案（`story` 为“帖名＋事件＋源氏年龄＋余韵”结构）
- `src/data/chronology.ts`：54 帖源氏年立表
- `src/data/types.ts`：数据模型、12 类关系类型与 54 帖编号表
- `src/data/characters.ts`：数据索引、关系线样式（颜色＋线型）、关系图坐标
- `src/components/MindMap.tsx`：家族思维导图（单击聚焦 / 双击进详情）
- `src/components/HomePage.tsx`：主题区、关于本书、关系图、名家评说、平安文学入口
- `src/components/HeianPage.tsx`：平安文学与创作时代专页
- `src/components/ChronologyPage.tsx`：源氏年立对照页
- `src/components/WakaPage.tsx`：和歌名句集
- `src/components/CharacterPage.tsx`：角色详情页（5 页翻页 + 六套风格 + 生卒栏）
- `src/components/Crest.tsx`：象征花押（SVG）
- `scripts/validate-data.mjs`：数据校验脚本

## 资料来源

与谢野晶子现代日语译本（青空文库）、维基文库原文、中文维基百科角色列表、本地《源氏物语》深度研读笔记与逐帖摘要，以及叶麟婧、徐向玉、王向远、安小康等论文与古桥信孝《日本文学史》等严肃文献。原文引句除注明译名外均为编者所译大意；古今评说均标注出处（论文摘要附来源链接）；中文译本因版权暂无免费全文，以资料页代替。
