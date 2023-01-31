import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { VoteIcon } from "../../assets/icons/voteIcon";
import { Container, News } from "../../components";

import {
  BackButton,
  CommentBoxContainer,
  CommentListContainer,
  FormContainer,
  NewsDetailsContainer,
  LinksWrapper,
} from "./news-details.screen.styles";

export const NewsDetails = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCommentable, setIsCommentable] = useState(false);

  const [news, setNews] = useState<any>([]);
  const [comment, setComment] = useState("");

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const [deletePrompt, setDeletePrompt] = useState(false);

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
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          ></path>
        </svg>{" "}
      </BackButton>

      <NewsDetailsContainer>
        <LinksWrapper key={news._id}>
          <div className="upvote-container">
            <VoteIcon className="icon" />
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
              {!deletePrompt && (
                <span onClick={() => setDeletePrompt(!deletePrompt)}>
                  Delete
                </span>
              )}
              {deletePrompt && (
                <>
                  {" "}
                  <span onClick={deleteHandler}> Confirm Delete</span> |
                  <span
                    style={{ color: "gray" }}
                    onClick={() => setDeletePrompt(!deletePrompt)}
                  >
                    Cancel
                  </span>{" "}
                </>
              )}
            </div>
          </div>
        </LinksWrapper>
      </NewsDetailsContainer>
      {isCommentable && (
        <CommentBoxContainer>
          <textarea
            className="text-area"
            name="text"
            cols={30}
            rows={5}
            placeholder="Enter your comment"
          ></textarea>

          <button>Add Comment</button>
        </CommentBoxContainer>
      )}

      <CommentListContainer>
        <h2>Comments</h2>

        <div className="comments-container">
          <div className="actions">
            <p className="user-name">Koushith</p>{" "}
            <span className="comment-time">less than a min ago</span> |{" "}
            <span className="edit-comment">edit</span> |{" "}
            <span className="delete-comment">delete</span>
          </div>

          <p className="comment">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            quidem mollitia natus, dolor consectetur distinctio? Tempore
            laudantium nisi ullam sequi eligendi. Esse dolorum recusandae
            eligendi quis harum quia fugiat eveniet.
          </p>
        </div>

        <div className="comments-container">
          <div className="actions">
            <p className="user-name">Koushith</p>{" "}
            <span className="comment-time">less than a min ago</span> |{" "}
            <span className="edit-comment">edit</span> |{" "}
            <span className="delete-comment">delete</span>
          </div>

          <p className="comment">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            quidem mollitia natus, dolor consectetur distinctio? Tempore
            laudantium nisi ullam sequi eligendi. Esse dolorum recusandae
            eligendi quis harum quia fugiat eveniet.
          </p>
        </div>

        <div className="comments-container">
          <div className="actions">
            <p className="user-name">Koushith</p>{" "}
            <span className="comment-time">less than a min ago</span> |{" "}
            <span className="edit-comment">edit</span> |{" "}
            <span className="delete-comment">delete</span>
          </div>

          <p className="comment">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            quidem mollitia natus, dolor consectetur distinctio? Tempore
            laudantium nisi ullam sequi eligendi. Esse dolorum recusandae
            eligendi quis harum quia fugiat eveniet.
          </p>
        </div>

        <div className="comments-container">
          <div className="actions">
            <p className="user-name">Koushith</p>{" "}
            <span className="comment-time">less than a min ago</span> |{" "}
            <span className="edit-comment">edit</span> |{" "}
            <span className="delete-comment">delete</span>
          </div>

          <p className="comment">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            quidem mollitia natus, dolor consectetur distinctio? Tempore
            laudantium nisi ullam sequi eligendi. Esse dolorum recusandae
            eligendi quis harum quia fugiat eveniet.
          </p>
        </div>
      </CommentListContainer>

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
