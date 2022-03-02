import { Link } from "react-router-dom";

const Top = () => {
  return (
    <>
      <Link to="/alert">
        <button>アラートページ</button>
      </Link>
      <Link to="/chart">
        <button>チャートページ</button>
      </Link>
    </>
  );
};
export default Top;
