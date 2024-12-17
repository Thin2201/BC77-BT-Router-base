import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <footer className="bg-black my-4 text-white text-center">Footer</footer>
    </>
  );
};

export default Home;
