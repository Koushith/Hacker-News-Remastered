import styled from "styled-components";
import { flexCenter } from "../../utils";

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
  /* max-width: 1022px;
  margin: 0 auto; */
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

export const CommentBoxContainer = styled.div`
  margin-top: 30px;
  max-width: 450px;

  label {
    display: flex;
    margin-bottom: 10px;
    color: #4a5568;
    font-size: 12px;
    font-weight: 400;
  }

  .text-area {
    border: 1px solid #e2e8f0;
    font-family: inherit;
    width: 100%;
    padding: 12px 24px 12px 16px;
    background-color: #fff;
    color: #4a5568;
    border-radius: 4px;
  }

  button {
    margin-top: 20px;
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

export const CommentListContainer = styled.div`
  margin-top: 40px;

  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #2d3748;
  }

  .comments-container {
    background-color: #fff;
    border-left: 1px solid #f56565;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    max-width: 600px;
    .actions {
      display: flex;
      gap: 10px;
      align-items: flex-end;

      .user-name {
        font-size: 16px;
        color: #2d3748;
        font-weight: 400;
      }

      .comment-time {
        color: #718096;
        font-size: 12px;
        font-weight: 400;
      }

      .edit-comment,
      .delete-comment {
        font-size: 12px;
        font-weight: 400;
        color: #f56565;
      }
    }

    .comment {
      margin-top: 14px;
      color: #4a5568;
      line-height: 21px;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const LinksWrapper = styled.div`
  border-bottom: 1px solid #e2e8f0;
  padding: 24px 20px;
  display: flex;
  gap: 24px;

  .upvote-container {
    ${flexCenter}
  }

  .upvote {
    margin-left: 16px;
  }

  .news-container {
    .link {
      font-size: 18px;
      span {
        font-size: 12px;
        font-weight: 400;
        line-height: 21px;
      }
    }

    .actions-container {
      margin-top: 10px;

      p {
        display: inline-block;
      }

      span {
        margin: 0 4px 0 4px;
        color: #f56565;
      }
    }
  }
`;
