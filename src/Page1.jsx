import { Link, useHistory } from "react-router-dom";

const arr = [...Array(100).keys()];

export const Page1 = () => {
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>ページ1です。</h1>
      <br />
      <Link to={{ pathname: "page1/detailA", state: arr }}>Page1DetailA</Link>
      <br />
      <Link to="/page1/detailB">Page1DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
