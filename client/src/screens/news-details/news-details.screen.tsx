import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NewsDetails = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCommentable, setIsCommentable] = useState(false);

  const [news, setNews] = useState<any>([]);
  const [comment, setComment] = useState("");

  const { id } = useParams();

  const fetchNewsDetails = async () => {
    const {
      data: { link },
    } = await axios.get(`http://localhost:5000/links/${id}`);

    setNews(link);

    console.log(link);
  };

  useEffect(() => {
    fetchNewsDetails();
  }, []);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const discussHandler = () => {
    setIsCommentable(!isCommentable);
  };

  const deleteHandler = () => {};

  return (
    <div style={{ marginLeft: "800px" }}>
      News det
      <p>{news?.category}</p>
      <p>{news.title}</p>
      <p>{news.link}</p>
      <p>{news.createdAt}</p>
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
          <div>form</div>
        </>
      )}
    </div>
  );
};
