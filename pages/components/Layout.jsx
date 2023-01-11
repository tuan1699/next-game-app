import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header />

      {props.children}

      <footer>Page footer</footer>
    </div>
  );
};

export default Layout;
