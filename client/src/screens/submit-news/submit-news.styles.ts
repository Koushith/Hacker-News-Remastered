import styled from "styled-components";

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
    font-size: 14px;
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

  p {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;

    span {
      font-size: 14px;
      color: #2b6cb0;
      cursor: pointer;
    }
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
