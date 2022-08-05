import React from "react";
import { Outlet } from "react-router";
import Footer from "../../Footer";
import Header from "../../header";

const WithNav = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export { WithNav };
