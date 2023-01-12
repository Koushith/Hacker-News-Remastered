import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 90px;
`;

export const Navs = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  background-color: red;
  /* align-items: center; */
  justify-content: space-between !important;

  .nav-container {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
  }
`;
