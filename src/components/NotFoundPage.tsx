import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page narrow notfound">
      <h1>此页不在物语之中</h1>
      <p>你寻找的人物或页面并不存在，如同“云隐”之帖，只留下一个名字。</p>
      <Link to="/" className="text-link">
        返回人物图鉴首页
      </Link>
    </section>
  );
}
