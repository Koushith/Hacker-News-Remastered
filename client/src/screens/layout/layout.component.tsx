import React from "react";
import { LayoutContainer } from "./layout.component.styles";

interface LayoutComponentProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutComponentProps) => {
  return (
    <LayoutContainer>
      <div>nav</div>
      <div className="main-container">
        <aside>ddd</aside>
        <main>ddd</main>
      </div>
    </LayoutContainer>
  );
};
