import axios from "axios";
import { useState } from "react";

export const SubmitNews = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/links/", {
      title,
      link,
      category,
    });

    console.log("res", res);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Submit </h1>

      <input
        type="text"
        placeholder="Enter title"
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="enter link"
        onChange={(e: any) => setLink(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="enter category"
        onChange={(e: any) => setCategory(e.target.value)}
      />
      <br />
      {/* todo- remove tags... */}
      <br />
      {/* <input type="text" placeholder="" /> */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
