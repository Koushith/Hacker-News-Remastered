import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  const [news, setNews] = useState<any>([]);

  const fetAllNews = async () => {
    const {
      data: { links },
    } = await axios.get("http://localhost:5000/links");

    setNews(links);
  };

  useEffect(() => {
    fetAllNews();
  }, []);
  return (
    <>
      {news.map((n: any, index: number) => (
        <Link to={`/news-details/${n._id}`}>
          <ul key={n._id}>
            <span>{index + 1}</span>
            {n.title}
            <span>{n.createdAt}</span> <br />
            <span>{n.category}</span>
          </ul>
        </Link>
      ))}
    </>
  );
};
