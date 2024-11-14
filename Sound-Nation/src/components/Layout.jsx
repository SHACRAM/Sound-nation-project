import React from "react";
import { Header } from "./Header";
export const Layout = ({ children, userName }) => {
  return (
    <div>
      <Header userName={userName} />
      {children}
    </div>
  );
};
