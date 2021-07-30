import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

import {
  title,
  container,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./Layout.module.css";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  console.log(data);

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
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
      </nav>
      <h1 className={title}>{pageTitle}</h1>
      {children}
    </main>
  );
}

export default Layout;
