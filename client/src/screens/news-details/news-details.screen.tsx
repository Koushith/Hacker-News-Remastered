import { isEditable } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { News } from "../../components/intex";
import {
  BackButton,
  Container,
  FormContainer,
  NewsDetailsContainer,
} from "./news-details.screen.styles";

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

export const NewsDetails = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCommentable, setIsCommentable] = useState(false);

  const [news, setNews] = useState<any>([]);
  const [comment, setComment] = useState("");

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const [category, setCategory] = useState(news.category);
  console.log("catttttt", category);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchNewsDetails = async () => {
    const {
      data: { link },
    } = await axios.get(`http://localhost:5000/links/${id}`);

    setNews(link);
  };

  useEffect(() => {
    fetchNewsDetails();
  }, [isEdit]);

  const deleteHandler = async () => {
    const deleteNews = await axios.delete(`http://localhost:5000/links/${id}`);
    console.log("deleteeeeee", deleteNews);
    if (deleteNews) {
      navigate("/");
    }
  };

  const editSaveHandler = async () => {
    console.log({ title, category, link });

    const data = await axios.put(`http://localhost:5000/links/${id}`, {
      title,
      category,
      link,
    });

    if (data.status === 200) {
      setIsEdit(false);
      console.log(":dayaa", data);
    }
  };

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          ></path>
        </svg>{" "}
      </BackButton>

      <NewsDetailsContainer>
        <LinksWrapper key={news._id}>
          <div>
            <span className="upvote">upvote</span>
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
              <span onClick={() => setIsCommentable(!isCommentable)}>
                Discuss
              </span>
              | <span onClick={() => setIsEdit(!isEdit)}>Edit</span>|{" "}
              <span onClick={deleteHandler}>Delete</span>
            </div>
          </div>
        </LinksWrapper>
      </NewsDetailsContainer>
      {isCommentable && (
        <>
          <textarea name="text" cols={30} rows={10}></textarea>
        </>
      )}

      {/* {isEdit && (
        <>
          <div style={{ marginTop: "40px" }}>Edit form</div>
          <div>
            <label htmlFor="title">title</label>
            <input
              type="text"
              placeholder={news.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="link">link</label>
            <input
              type="text"
              placeholder={news.link}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category">
              category- {category}
              <input
                type="text"
                placeholder={news.category}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </div>
        
          <button onClick={editSaveHandler}>Save Changes</button>
        </>
      )} */}
      {isEdit && (
        <FormContainer>
          <div>
            <label htmlFor="title">title</label>
            <input
              type="text"
              placeholder={news.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="link">link</label>
            <input
              type="text"
              placeholder={news.link}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category">category- {category}</label>
            <input
              type="text"
              placeholder={news.category}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button onClick={editSaveHandler}>Save Changes</button>
        </FormContainer>
      )}
    </Container>
  );
};
