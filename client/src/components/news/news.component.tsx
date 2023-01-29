import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// @ts-ignore
// import VoteIcon from "../../assets/icons/upVote.svg";
import { VoteIcon } from "../../assets/icons/voteIcon";

const LinksWrapper = styled.div`
  border-bottom: 1px solid #e2e8f0;
  padding: 24px 20px;
  display: flex;
  gap: 24px;

  .upvote-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .upvote {
      margin-top: 2px;
    }
    p {
      font-size: 16px;
      font-weight: 700;
    }
    .icon {
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* transform: rotate(180deg); */
    }
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
        cursor: pointer;
      }
    }
  }
`;

export const News = (props: any) => {
  const { news, index, deleteHandler } = props;

  const navigate = useNavigate();

  return (
    <LinksWrapper key={news._id}>
      <div className="upvote-container">
        <p> {index + 1} </p>
        <span className="upvote">
          <VoteIcon className="icon" />
        </span>
      </div>

      <div className="news-container">
        <h4
          className="link"
          onClick={() => navigate(`/news-details/${news._id}`)}
        >
          {news.title} <span>({news.link})</span>{" "}
        </h4>

        <div className="actions-container">
          <p>0 pts by koushith </p>{" "}
          <span onClick={() => navigate(`/news-details/${news._id}`)}>
            Discuss
          </span>
          | <span>Edit</span>| <span onClick={deleteHandler}>Delete</span>
        </div>
      </div>
    </LinksWrapper>
  );
};
