import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { News } from "../../components/intex";
import { Layout } from "../layout/layout.component";

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

  const LinksContainer = styled.div`
    background-color: #fff;
    max-width: 1022px;
    margin: 0 auto;
    border: 1px solid #e2e8f0;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border-radius: 0.5px;
  `;

  return (
    <div>
      <>
        <LinksContainer>
          {news.map((n: any, index: number) => (
            <div key={n._id}>
              {/* <Link to={`/news-details/${n._id}`}>
                <ul key={n._id}>
                  <span>{index + 1}</span>
                  {n.title}
                  <span>{n.createdAt}</span> <br />
                  <span>{n.category}</span>
                </ul>
              </Link>
              <Link to={`/news-details/${n._id}`}>
                <button>Discuss</button>
              </Link>
              <Link to={`/news-details/${n._id}`}>
                <button>Edit</button>
              </Link> */}
              <News news={n} index={index} />
            </div>
          ))}
        </LinksContainer>
      </>
      {/* <Layout /> */}
      {/* {news.map((n: any, index: number) => (
        <>
          <Link to={`/news-details/${n._id}`}>
            <ul key={n._id}>
              <span>{index + 1}</span>
              {n.title}
              <span>{n.createdAt}</span> <br />
              <span>{n.category}</span>
            </ul>
          </Link>
          <Link to={`/news-details/${n._id}`}>
            <button>Discuss</button>
          </Link>
          <Link to={`/news-details/${n._id}`}>
            <button>Edit</button>
          </Link>
        </>
      ))} */}
    </div>
  );
};
