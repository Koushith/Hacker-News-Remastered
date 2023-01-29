import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};
