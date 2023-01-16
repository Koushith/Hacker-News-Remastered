import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #fff;
  padding: 20px auto;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    height: 80px;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 40px;

      li {
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        a {
          text-decoration: none;
          color: #000;
          &:hover {
            color: #f56565;
          }
        }
      }
    }

    button {
      background-color: #f56565;
      padding: 12px 20px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
