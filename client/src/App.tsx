import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components";
import { RoutePaths } from "./routes";
import {
  HomeScreen,
  LoginScreen,
  NewsDetails,
  ProfileScreen,
  RegisterScreen,
  SearchScreen,
  SubmitNews,
  TopScreen,
} from "./screens";

function App() {
  return (
    <Routes>
      <Route path={RoutePaths.home} element={<Header />}>
        <Route path={RoutePaths.home} index element={<HomeScreen />} />
        <Route path={RoutePaths.login} element={<LoginScreen />} />
        <Route path={RoutePaths.register} element={<RegisterScreen />} />
        <Route path={RoutePaths.newsDetails} element={<NewsDetails />} />
        <Route path={RoutePaths.submit} element={<SubmitNews />} />
        <Route path={RoutePaths.top} element={<TopScreen />} />
        <Route path={RoutePaths.search} element={<SearchScreen />} />
        <Route path={RoutePaths.profile} element={<ProfileScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
