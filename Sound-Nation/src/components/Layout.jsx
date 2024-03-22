import React from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Nav />
    </div>
  );
};
