import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>ページ2です。</h1>
      <br />
      <Link to="/page2/000">Page2 URL Parameter</Link>
      <br />
      <Link to="/page2/000?name=okym">Page2 Query Parameter</Link>
    </div>
  );
};
