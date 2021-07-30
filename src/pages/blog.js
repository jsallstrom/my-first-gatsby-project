import React from "react";
import Layout from "../components/Layout/Layout";

// Step 1: Import the graphql tag
import { graphql } from "gatsby";

/*
The process for making a query in a page component looks slightly different from useStaticQuery: */

function BlogPage({ data }) {
  // gets the data from the graphql-query
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

// Step 2: Export a page query
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
