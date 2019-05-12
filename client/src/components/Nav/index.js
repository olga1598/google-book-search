import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar fixed-top">
      <a className="navbar-brand" href="/">
        GOOGLE BOOK SEARCH
      </a>
      <a className="navbar-brand" href="/savedbooks" >
        Your Saved Books
      </a>
    </nav>
  );
}

export default Nav;
