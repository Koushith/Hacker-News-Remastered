import { Link, Outlet } from "react-router-dom";
import { Container } from "../layout/container";
import { NavbarContainer } from "./header.component.styles";

export const Header = () => {
  return (
    <>
      <NavbarContainer>
        <nav>
          <ul>
            <Link to="/">
              <h2>Hacker News</h2>
            </Link>

            <li>
              <Link to="/top">Top</Link>
            </li>
            <li>
              {" "}
              <Link to="/search">Search</Link>
            </li>
            <li>
              {" "}
              <Link to="/submit">Submit</Link>
            </li>
          </ul>
          <button>Login</button>
        </nav>
      </NavbarContainer>
      <Outlet />
    </>
  );
};
