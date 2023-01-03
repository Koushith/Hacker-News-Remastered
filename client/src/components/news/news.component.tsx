import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LinksWrapper = styled.div`
  border-bottom: 1px solid #e2e8f0;
  padding: 24px 20px;
  display: flex;
  gap: 24px;

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

export const News = (props: any) => {
  const { news, index, deleteHandler } = props;

  const navigate = useNavigate();

  return (
    <LinksWrapper key={news._id}>
      <div>
        {index + 1} <span className="upvote">upvote</span>
      </div>
      <div className="news-container">
        <h4
          className="link"
          onClick={() => navigate(`/news-details/${news._id}`)}
        >
          {news.title} <span>({news.link})</span>{" "}
        </h4>

        <div className="actions-container">
          <p>0 pts by koushith </p> <span>Discuss</span>| <span>Edit</span>|{" "}
          <span onClick={deleteHandler}>Delete</span>
        </div>
      </div>
    </LinksWrapper>
  );
};
