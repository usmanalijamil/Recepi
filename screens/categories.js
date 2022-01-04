import React from "react";
import firebase from "./../firebase";
import {
  Stack,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  NativeBaseProvider,
  HStack,
  Flex,
  Text,
  Box,
  Image,
} from "native-base";
import Wrapper from "../components/Wrapper";
const Categories = () => {
  const ref = firebase.database().ref("book_array");
  ref.once("value").then((snapshot) => {
    console.log(snapshot.val());
  });

  const category = [
    {
      title: "Spaghetti with Shrimp Sauce ",
      serve: " 1 Serving",
      time: "30 Min",
    },
    {
      title: "Spaghetti with Shrimp Sauce",
      serve: " 3 Serving",
      time: "40 Min",
    },
    {
      title: "Spaghetti with Shrimp Sauce",
      serve: " 4 Serving",
      time: "50 Min",
    },
    {
      title: "Mayo with Shrimp Sauce ",
      serve: " 1 Serving",
      time: "30 Min",
    },
    {
      title: "Mayo with Shrimp Sauce",
      serve: " 3 Serving",
      time: "40 Min",
    },
    {
      title: "Mayo with Shrimp Sauce",
      serve: " 4 Serving",
      time: "50 Min",
    },
    {
      title: "Garlic with Shrimp Sauce ",
      serve: " 1 Serving",
      time: "30 Min",
    },
    {
      title: "Garlic with Shrimp Sauce",
      serve: " 3 Serving",
      time: "40 Min",
    },
    {
      title: "Garlic with Shrimp Sauce",
      serve: " 4 Serving",
      time: "50 Min",
    },
  ];
  return (
    <NativeBaseProvider>
      <Wrapper>
        <Box px={6} mt={10}>
          <Heading size="xl">Categories</Heading>
        </Box>

        <VStack display="flex" flexDirection="column" alignContent="center">
          {category.map((item, index) => {
            return (
              <HStack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                rounded="xl"
                bg="gray.300"
                m={3}
                key={index}
              >
                <Stack p="4">
                  <Heading fontSize="lg" color="black">
                    {item.title}
                  </Heading>

                  <Flex direction="row" mt={2}>
                    <Text color="black">{item.time}</Text>
                    <Divider
                      bg="emerald.500"
                      thickness="2"
                      mx="2"
                      orientation="vertical"
                    />
                    <Text color="black">{item.serve}</Text>
                  </Flex>
                </Stack>

                <Image
                  source={require("../assets/Images/home.jpg")}
                  alt="not found"
                  size="md"
                  rounded="lg"

                  //   roundedTopRight='2xl'
                  //   roundedBottomRight='2xl'
                  //   roundedTopLeft='full'
                  //   roundedBottomLeft='full'
                ></Image>
              </HStack>
            );
          })}
        </VStack>
      </Wrapper>
    </NativeBaseProvider>
  );
};

export default Categories;
