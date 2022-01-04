import React, { useState } from "react";

import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Stack,
  ScrollView,
  AspectRatio,
  Heading,
  Flex,
  Divider,
  Link,
  Button,
  Pressable,
} from "native-base";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const carouselItems = [
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
];

const TrendingRecipes = ({ navigation }) => {
  const [liked, setLiked] = useState(false);
  return (
    <NativeBaseProvider>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack>
          {carouselItems.map((item, index) => {
            return (
              <Box
                key={index}
                maxW="80"
                d="flex"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                w={300}
                h={300}
                mt={2}
                mr={2}
              >
                <ImageBackground
                  source={require("../assets/Images/home.jpg")}
                  alt="not found"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Box
                    d="flex"
                    flexDirection="row"
                    m="2"
                    justifyContent="space-between"
                  >
                    <Center
                      bg="gray.500"
                      _text={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "xs",
                      }}
                      width="30%"
                      p="2"
                      rounded="lg"
                    >
                      PASTA
                    </Center>

                    <AntDesign
                      name={liked ? "heart" : "hearto"}
                      size={24}
                      color="white"
                      // backgroundColor="white.200"
                      onPress={() => {
                        setLiked(!liked);
                      }}
                    />
                  </Box>
                  <Stack
                    p="2"
                    m="2"
                    space={3}
                    width="70%"
                    bg="gray.500"
                    rounded="2xl"
                  >
                    <Stack space={2}>
                      <Heading fontSize="lg" color="#fff">
                        {item.title}
                      </Heading>
                      <Flex direction="row">
                        <Text fontSize="xs" color="#fff">
                          {item.time}
                        </Text>
                        <Divider
                          bg="emerald.500"
                          thickness="2"
                          mx="2"
                          orientation="vertical"
                        />
                        <Text fontSize="xs" color="#fff">
                          {item.serve}
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </ImageBackground>
              </Box>
            );
          })}
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default TrendingRecipes;
