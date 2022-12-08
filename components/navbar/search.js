import { Box, Flex, Image, Input, useBoolean } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [showSearchBar, setShowSearchBar] = useBoolean();
  const [inputField, setInputField] = useState();

  const router = useRouter();
  const inputValues = (e) => {
    setInputField(e.target.value);
  };

  const navigateTo = `/searhResults?searchTerm=${inputField}`;

  const ShowResult = (e) => {
    e.preventDefault();

    router.push(navigateTo);
  };
  return (
    <Flex alignItems="center" h="55px">
      <form onSubmit={(e) => ShowResult(e)}>
        <Input
          h="55px"
          bg="#BDE3AB"
          border="none"
          borderRadius="2px"
          borderRightRadius="0"
          visibility={showSearchBar ? "block" : "hidden"}
          onChange={inputValues}
        />
      </form>

      <Box
        bg={showSearchBar ? "#BDE3AB" : "transparent"}
        borderRightRadius="2px"
        p="17px"
        h="100%"
        onClick={() => setShowSearchBar.toggle()}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Image
          src="https://res.cloudinary.com/wavecrest1/image/upload/v1666350546/wetland/Vector_biqtjw.png"
          w="20px"
          h="20px"
          my="auto"
        />
      </Box>
    </Flex>
  );
};

export default Search;
