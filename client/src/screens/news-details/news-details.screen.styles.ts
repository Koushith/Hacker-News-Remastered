import styled from "styled-components";

export const Container = styled.div`
  max-width: 1022px;
  margin: 0 auto;
`;

export const BackButton = styled.div`
  width: 40px;
  margin-top: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #f56565;
  }
`;

export const NewsDetailsContainer = styled.div`
  background-color: #fff;
  max-width: 1022px;
  margin: 0 auto;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 0.5px;
  span {
    cursor: pointer;
  }
`;
export const FormContainer = styled.div`
  margin-top: 30px;
  max-width: 450px;

  div {
    margin-bottom: 20px;
  }

  label {
    display: flex;
    margin-bottom: 10px;
    color: #4a5568;
    font-size: 12px;
    font-weight: 400;
  }

  input {
    border: 1px solid #e2e8f0;
    font-family: inherit;
    width: 100%;
    padding: 12px 24px 12px 16px;
    background-color: #fff;
    color: #4a5568;
    border-radius: 4px;
  }

  button {
    background-color: #f56565;
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
