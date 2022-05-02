import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>404 Not found</h1>
      <h2>ページが見つかりません。</h2>
      <Link to="/">トップページへ</Link>
    </div>
  );
};
