import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import { Context } from "../context/Context";

const RootLayout = () => {
//  const {user} = useContext(Context);
//  console.log(user)
  return (
    <>
      <Navbar />
      <main><Outlet/></main>
    </>
  );
};

export default RootLayout;
