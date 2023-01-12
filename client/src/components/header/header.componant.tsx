import { Container } from "../layout/container";
import { Navs, NavContainer } from "./header.component.styles";

export const Header = () => {
  return (
    <>
      <NavContainer>
        <Navs>
          <div className="nav-container">
            Hacker News
            <nav>
              <ul>
                <li>New</li>
                <li>Top</li>
                <li>Search</li>
                <li>Submit</li>
              </ul>
            </nav>
          </div>
          <button>Login</button>
        </Navs>
      </NavContainer>
    </>
  );
};
