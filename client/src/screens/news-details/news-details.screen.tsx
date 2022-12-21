import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NewsDetails = () => {
  const [news, setNews] = useState<any>([]);
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

  return (
    <>
      News det
      <p>{news?.category}</p>
      <p>{news.title}</p>
      <p>{news.link}</p>
      <p>{news.createdAt}</p>
    </>
  );
};
