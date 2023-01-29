import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, News } from "../../components";
import { Layout } from "../layout/layout.component";
import { SearchBox } from "./home.styles";

export const HomeScreen = () => {
  const [news, setNews] = useState<any>([]);

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(news);

  const fetAllNews = async () => {
    const {
      data: { links },
    } = await axios.get("http://localhost:5000/links");

    setNews(links);
  };

  useEffect(() => {
    fetAllNews();
  }, []);

  useEffect(() => {
    const searchString = news.filter((s: any) => {
      return s.title.toLocaleLowerCase().includes(searchText);
    });
    setSearchResults(searchString);
  }, [searchText, news]);

  const LinksContainer = styled.div`
    background-color: #fff;

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

  const searchHandler = (e: any) => {
    setSearchText(e.target.value.toLocaleLowerCase());
  };

  return (
    <Container>
      <SearchBox>
        <input
          type="text"
          placeholder="Search for Link"
          onChange={searchHandler}
          value={searchText}
        />
      </SearchBox>
      <LinksContainer>
        {searchResults.map((n: any, index: number) => (
          <div key={n._id}>
            <News news={n} index={index} deleteHandler={deleteHandler} />
          </div>
        ))}
      </LinksContainer>
    </Container>
  );
};
