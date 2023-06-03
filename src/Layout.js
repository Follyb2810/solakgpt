import React from "react";
import Navbar from "./Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Message from "./Shared/Mesaage"
import './index.css'
import NavTab from "./Shared/NavTab";



const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <NavTab /> */}
      {/* <Message /> */}
      <Outlet />
      {/* {children} */}
      <Footer />

    </>
  );
};

export default Layout;