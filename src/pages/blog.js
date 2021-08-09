import React from "react";
import Layout from "../components/Layout/Layout";

import { MDXRenderer } from "gatsby-plugin-mdx";

// Step 1: Import the graphql tag
import { graphql } from "gatsby";

/*
The process for making a query in a page component looks slightly different from useStaticQuery: */

// Use useStaticQuery for “building block” components.

function BlogPage({ data }) {
  // gets the data from the graphql-query
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
}

// Step 2: Export a page query
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
