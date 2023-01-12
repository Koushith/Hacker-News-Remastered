import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Layout } from "./components";
import { HomeScreen, NewsDetails, SubmitNews } from "./screens";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/news-details/:id" element={<NewsDetails />} />
        <Route path="/submit-news" element={<SubmitNews />} />
      </Routes>
    </Layout>
  );
}

export default App;
