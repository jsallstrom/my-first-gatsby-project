import React from "react";

import { Link } from "gatsby";

import {
  title,
  container,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./Layout.module.css";

function Layout({ pageTitle, children }) {
  return (
    <main className={container}>
      <nav className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/image" className={navLinkText}>
            Image
          </Link>
        </li>
      </nav>
      <h1 className={title}>{pageTitle}</h1>
      {children}
    </main>
  );
}

export default Layout;
