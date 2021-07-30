import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";

function ImagePage() {
  return (
    <Layout pageTitle="Image">
      <h2>First image is from the interwebs</h2>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      ></StaticImage>

      <h2>Second image is a local static file</h2>
      <StaticImage
        alt="Guy looking at sunset, courtesy of shutterstock"
        src="../images/man-hiking.jpeg"
      ></StaticImage>
    </Layout>
  );
}

export default ImagePage;
