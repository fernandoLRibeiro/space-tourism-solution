import React from "react";
import PrimaryHeader from "./PrimaryHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <PrimaryHeader />
      {children}
    </div>
  );
};

export default Layout;
