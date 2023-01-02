import styled from "styled-components";

export const LayoutContainer = styled.div`
  background: red;
  width: 100%;
  height: 100%;
  .main-container {
    display: grid;
    grid-template-columns: 280px 1fr;
  }
  main {
    background: green;
    width: 100%;
    height: 100vh;
  }
  aside {
    background: yellow;
    width: 100%;
    height: 100vh;
  }
`;
