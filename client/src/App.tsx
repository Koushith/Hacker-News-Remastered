import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components";
import {
  HomeScreen,
  LoginScreen,
  NewsDetails,
  RegisterScreen,
  SearchScreen,
  SubmitNews,
  TopScreen,
} from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" index element={<HomeScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="news-details/:id" element={<NewsDetails />} />
        <Route path="submit" element={<SubmitNews />} />
        <Route path="top" element={<TopScreen />} />
        <Route path="search" element={<SearchScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
