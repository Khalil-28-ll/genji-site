import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            源
          </span>
          <span className="brand-text">
            源氏物語 · 人物図鑑
            <small>源氏物语人物图鉴</small>
          </span>
        </Link>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>
          资料来源：与谢野晶子现代日语译本（青空文库）、中文维基百科角色列表、本地研读笔记与论文（叶麟婧、徐向玉、王向远、安小康）。
        </p>
        <p>原文引句除注明译名外，均为编者所译大意；古今评说均标注出处。</p>
      </footer>
    </div>
  );
}
