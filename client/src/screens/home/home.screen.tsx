import axios from "axios";
import { useEffect, useState } from "react";

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
        <ul key={n._id}>{n.title}</ul>
      ))}
    </>
  );
};
