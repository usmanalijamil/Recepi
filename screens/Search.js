import React from "react";
import {
  NativeBaseProvider,
  Box,
  ScrollView,
  Text,
  View,
  Heading,
} from "native-base";

const Search = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box ml="40%" mt="40%">
          <Heading>Search</Heading>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Search;
