import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, News } from "../../components";
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
    margin-top: 40px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border-radius: 0.5px;
  `;

  const deleteHandler = async () => {
    const deleteNews = await axios.delete(
      `http://localhost:5000/links/${news._id}`
    );
    console.log("deleteeeeee", deleteNews);
  };

  return (
    <Container>
      <>
        <LinksContainer>
          {news.map((n: any, index: number) => (
            <div key={n._id}>
              <News news={n} index={index} deleteHandler={deleteHandler} />
            </div>
          ))}
        </LinksContainer>
      </>
    </Container>
  );
};
