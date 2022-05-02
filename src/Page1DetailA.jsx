import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  const onClickPage1 = () => history.push("/page1");
  return (
    <div>
      <h1>ページ1A詳細画面です。</h1>
      <button onClick={onClickPage1}>ページ1</button>
      {Array.isArray(state) &&
        state.map((key) => <p key={key}>私のキーは{key + 1}番目です　</p>)}
    </div>
  );
};
