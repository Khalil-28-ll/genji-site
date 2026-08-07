# 源氏物语人物图鉴

以“物哀”为主题的《源氏物语》角色图鉴网站：

- **主页**自上而下依次为“物哀”主题区、成书速览、《关于〈源氏物语〉》（结构与主题）、家族思维导图、“名家评说与延伸阅读”、“平安文学走廊”（八部平安作品）。
- **和歌名句集**（`#/waka`）：精选二十一首传诵较广的和歌，含日语原文、中文大意、出处帖与相关角色链接；原文以与谢野晶子现代日语本为底。
- **思维导图**为自绘 SVG：单击角色放大其关系网，双击或点击卡片按钮进入介绍；关系线采用“高区分度传统色 + 线型”双编码（实线/虚线/点线），图例同步。
- **22 位核心角色**各有独立档案页，采用 5 页翻页结构：①总览（身份/简介/判词/象征意象）②生平（带帖名时间线）③人物关系 ④原文引句 ⑤古今评说与主要出场帖；支持键盘 ← → 与 URL 页码（`#/characters/:id/:page`）。总览页“判词”栏取原书和歌一句与古今评语一条，不另拟文字。
- 视觉为自然克制的平安和风：和纸米色底、低饱和传统色、宋韵天青点缀、极淡青海波纹样水印；小字统一加粗加大。字体为本地打包的 Noto Serif SC / JP，不依赖 CDN。

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

## 部署

仓库已配置 GitHub Actions（`.github/workflows/deploy-pages.yml`）：推送到 `main` 后自动构建并以 GitHub Pages 发布。

```powershell
git add .
git commit -m "更新"
git push
```

访问 `https://Khalil-28-ll.github.io/genji-site/`。注意仓库需保持 Public（免费版 Pages 不支持私有仓库）。

## 结构

- `src/data/entries/`：22 位角色档案与辅助节点数据（`story` 为“帖名＋事件”结构）
- `src/data/waka.ts`：精选和歌名句数据
- `src/data/types.ts`：数据模型与 54 帖编号表
- `src/data/characters.ts`：数据索引、关系线样式（颜色＋线型）、关系图坐标
- `src/components/MindMap.tsx`：家族思维导图（单击聚焦 / 双击进详情）
- `src/components/HomePage.tsx`：主题区、关于本书、关系图、名家评说、平安文学走廊
- `src/components/WakaPage.tsx`：和歌名句集
- `src/components/CharacterPage.tsx`：角色详情页（5 页翻页 + 判词栏）
- `src/components/Crest.tsx`：象征花押（SVG）
- `scripts/validate-data.mjs`：数据校验脚本

## 资料来源

与谢野晶子现代日语译本（青空文库）、中文维基百科角色列表、本地《源氏物语》深度研读笔记与逐帖摘要，以及叶麟婧、徐向玉、王向远、安小康等论文。原文引句除注明译名外均为编者所译大意；古今评说均标注出处；主页外链上线前均逐一验证可访问，中文译本因版权暂无免费全文，以资料页代替。
