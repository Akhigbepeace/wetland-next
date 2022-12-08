import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../../components/navbar";

const Partner = () => {
  return (
    <Box>
      <Head>
        <title>WETLAND CULTURAL AND EDUCATIONAL FOUNDATION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Partner;
