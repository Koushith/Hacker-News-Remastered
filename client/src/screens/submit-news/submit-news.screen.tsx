import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { FormContainer } from "./submit-news.styles";

export const SubmitNews = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/links/", {
      title,
      link,
      category,
    });

    console.log(res);

    if (res.status === 201) {
      navigate("/");
    }
  };

  return (
    <>
      <Container>
        <FormContainer>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={(e: any) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="link">Link</label>
            <input
              type="text"
              placeholder="enter link"
              onChange={(e: any) => setLink(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="title">Category</label>
            <input
              type="text"
              placeholder="enter category"
              onChange={(e: any) => setCategory(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>Submit</button>
        </FormContainer>
      </Container>
    </>
  );
};
