import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <div className="bg-motif" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="seigaiha" width="72" height="72" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0 72a36 36 0 0 1 72 0" />
                <path d="M0 72a54 54 0 0 1 108 0" transform="translate(-18 0)" />
                <path d="M0 72a72 72 0 0 1 144 0" transform="translate(-36 0)" />
                <path d="M0 72a18 18 0 0 1 36 0" transform="translate(18 0)" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seigaiha)" />
        </svg>
      </div>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              源
            </span>
            <span className="brand-text">
              源氏物語 · 人物図鑑
              <small>源氏物语人物图鉴</small>
            </span>
          </Link>
          <nav className="site-nav" aria-label="主导航">
            <Link to="/">首页</Link>
            <Link to="/waka">和歌名句</Link>
            <Link to="/heian">平安文学</Link>
            <Link to="/chronology">年立</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>
          资料来源：与谢野晶子现代日语译本（青空文库）、维基文库原文、中文维基百科角色列表、
          本地研读笔记与论文（叶麟婧、徐向玉、王向远、安小康等）。
        </p>
        <p>36 位人物档案 · 原文引句除注明译名外，均为编者所译大意；古今评说均标注出处。</p>
      </footer>
    </div>
  );
}
