import React from "react";
import Navbar from "../Navbar/Navbar";
import { StyledLayout } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />

      {children}
    </StyledLayout>
  );
};

export default Layout;
