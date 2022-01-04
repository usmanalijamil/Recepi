import React from "react";
import {
  NativeBaseProvider,
  Box,
  ScrollView,
  Text,
  View,
  Heading,
} from "native-base";

const Favourite = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box ml="40%" mt="40%">
          <Heading>Favourite</Heading>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Favourite;
