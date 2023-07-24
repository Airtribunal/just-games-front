import React from "react";
import { Navbar } from "../sections";
import { Outlet } from "react-router-dom";

const AppLayout = ({quantity}) => {
  return (
    <>
      <Navbar quantity={quantity}/>
      <Outlet />
    </>
  );
};

export default AppLayout;
