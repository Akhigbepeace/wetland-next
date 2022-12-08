import { Flex } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Logo from "../logo";
import MobileSideBar from "../mobileNavBar";
import Search from "./search";
import DonateButton from "../donateButton";
import NavPages from "./navlink";

const Navbar = () => {
  return (
    <Fragment>
      <Flex
        w={{
          sm: "300px",
          md: "500px",
          lg: "700px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        my="30px"
        justifyContent="space-between"
        zIndex="6"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Logo />

        <Flex justifyContent="space-between" alignItems="center">
          <Search />
          <NavPages />
          <DonateButton />
        </Flex>
      </Flex>
      <MobileSideBar />
    </Fragment>
  );
};

export default Navbar;
