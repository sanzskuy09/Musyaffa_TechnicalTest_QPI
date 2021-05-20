import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <button className="btn-style btn-all">
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          All
        </Link>
      </button>
      <button className="btn-style btn-table">
        <Link to="/table" style={{ color: "black", textDecoration: "none" }}>
          Table
        </Link>
      </button>
      <button className="btn-style btn-chart">
        <Link to="/chart" style={{ color: "black", textDecoration: "none" }}>
          Chart
        </Link>
      </button>
    </section>
  );
};

export default Header;
