import { isEditable } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

    console.log(link);
  };

  useEffect(() => {
    fetchNewsDetails();
  }, [isEdit]);

  const editHandler = () => {
    setIsEdit(!isEdit);
    setIsCommentable(false);
  };

  const discussHandler = () => {
    setIsCommentable(!isCommentable);
    setIsEdit(false);
  };

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
    setIsEdit(false);
    console.log(":dayaa", data);
  };

  return (
    <div style={{ marginLeft: "800px" }}>
      News details
      <p>{news?.category}</p>
      <p>{news.title}</p>
      <p>{news.link}</p>
      <p>{news.createdAt}</p>
      <p>{news.upVotes} -votes</p>
      <button onClick={editHandler}>Edit</button>
      <button onClick={discussHandler}>Discuss</button>
      <button onClick={deleteHandler}>Delete</button>
      {/*  */}
      <hr />
      {isCommentable && (
        <>
          <textarea name="text" cols={30} rows={10}></textarea>
        </>
      )}
      {isEdit && (
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
            <label htmlFor="category">category- {category}</label>
            <input
              type="text"
              placeholder={news.category}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {/* check later */}
          {/* <div>
            <label htmlFor="tags">title</label>
            <input type="text" placeholder="tags" />
          </div> */}

          <button onClick={editSaveHandler}>Save Changes</button>
        </>
      )}
    </div>
  );
};
