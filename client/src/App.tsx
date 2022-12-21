import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [links, setLinks] = useState<any>([]);

  const fetchAllLists = async () => {
    let { data } = await axios.get("http://localhost:5000/links");
    console.log(data);
    setLinks(data.links);
  };

  console.log("links", links);

  useEffect(() => {
    fetchAllLists();
  }, []);
  return (
    <div className="App">
      <h1>hello world</h1>
      {links.map((link: any) => (
        <div key={link._id}>
          <h1>{link.title}</h1>
          <h1>{link.category}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
