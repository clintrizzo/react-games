import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../NavbarHome.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;