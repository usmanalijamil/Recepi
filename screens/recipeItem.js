import React, { useState } from "react";
import firebase from "./../firebase";
import axios from "axios";
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
} from "native-base";
import Cheese from "../assets/Ingredients/cheese.png";
import Egg from "../assets/Ingredients/egg.png";
import Chicken from "../assets/Ingredients/chicken.png";
import Potato from "../assets/Ingredients/potato.png";
import Chilli from "../assets/Ingredients/chilli.png";
import Tomato from "../assets/Ingredients/tomato.png";
import Onion from "../assets/Ingredients/onion.png";
import { ImageBackground } from "react-native";

const RecipeItem = ({ route }) => {
  const [ingredients, setIngredients] = useState([]);
  const ref = firebase.database().ref("book_array");
  const { recipe_id } = route.params;
  ref
    .orderByChild("id")
    .equalTo(`${recipe_id}`)
    .once("value")
    .then((snapshot) => {
      // console.log(snapshot.val());
      let data = snapshot.val();
      const recipes = Object.values(data);
      if (recipes?.length > 0) {
        const [recipe] = recipes;
        if (recipe?.ingredients) {
          const newData = recipe?.ingredients?.map((value) => {
            return {
              title: `${value}`,
              qty: "300g",
              image: Cheese,
            };
          });
          setIngredients(newData);
        }
      }
    });

  // const ingredients = [
  //   {
  //     title: "Parmesan Cheese ",
  //     qty: "300g",
  //     image: Cheese,
  //   },
  //   {
  //     title: "Eggs",
  //     qty: "2 pcs",
  //     image: Egg,
  //   },
  //   {
  //     title: "Chicken",
  //     qty: "1/2 kg",
  //     image: Chicken,
  //   },
  //   {
  //     title: "Potato",
  //     qty: "1/2 kg",
  //     image: Potato,
  //   },
  //   {
  //     title: "Chili Sauce",
  //     qty: "4 Tbsp",
  //     image: Chilli,
  //   },
  //   {
  //     title: "Tomato Ketchup",
  //     qty: "6 Tbsp",
  //     image: Tomato,
  //   },
  //   {
  //     title: "Onion",
  //     qty: "2 pcs",
  //     image: Onion,
  //   },
  // ];
  return (
    <NativeBaseProvider>
      <Box>
        <ImageBackground
          source={require("../assets/Images/pizza-slice.jpg")}
          alt="not found"
          style={{
            display: "flex",
            backgroundColor: "green",
            width: "100%",
          }}
        >
          <Center>
            <Stack
              p="2"
              d="flex"
              flexDirection="column"
              justifyContent="flex-end"
              mt={40}
              width="70%"
              bg="gray.800"
              rounded="2xl"
              m="2"
            >
              <Stack space={2} m="2">
                <Heading fontSize="xl" color="gray.300">
                  Recipe By:
                </Heading>
                <Flex direction="row">
                  <Text fontSize="sm" color="#fff">
                    Hello
                  </Text>
                  <Divider
                    bg="emerald.500"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text fontSize="sm" color="#fff">
                    World
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Center>
        </ImageBackground>
      </Box>
      <ScrollView>
        <Box m={7} d="flex">
          <Stack p="2" space={3} rounded="2xl" bg="amber.100">
            <Stack space={2}>
              <Heading fontSize="md" width={120}>
                Spaghetti With Shrimp Sauce
              </Heading>
              <Flex direction="row">
                <Text fontSize="sm" color="#ADADAD">
                  30 Mins
                </Text>
                <Divider
                  bg="gray.500"
                  thickness="2"
                  mx="2"
                  orientation="vertical"
                />
                <Text fontSize="sm" color="#ADADAD">
                  1 Serving
                </Text>
              </Flex>
              <Avatar.Group size="md" max={3}>
                <Avatar
                  bg="green.500"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg",
                  }}
                >
                  SS
                </Avatar>
                <Avatar
                  bg="lightBlue.500"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                  }}
                >
                  AK
                </Avatar>
                <Avatar
                  bg="indigo.500"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
                  }}
                >
                  RS
                </Avatar>
                <Avatar
                  bg="amber.600"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
                  }}
                >
                  MR
                </Avatar>
                <Avatar
                  bg="emerald.600"
                  source={{
                    uri: "https://bit.ly/code-beast",
                  }}
                >
                  CB
                </Avatar>
                <Avatar
                  bg="blue.600"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
                  }}
                >
                  GG
                </Avatar>
                <Avatar
                  bg="black.600"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
                  }}
                >
                  RS
                </Avatar>
                <Avatar
                  bg="blueGray.600"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
                  }}
                >
                  MR
                </Avatar>
              </Avatar.Group>
            </Stack>
          </Stack>

          <Stack
            p="2"
            mt="5"
            width="100%"
            rounded="lg"
            d="flex"
            flexDirection="row"
            justifyContent="space-between"
            bg="gray.200"
          >
            <Heading fontSize="md">Ingredients</Heading>
            <Heading fontSize="md" color="#A9A9A9">
              7 Items
            </Heading>
          </Stack>
          {ingredients.map((item, index) => {
            return (
              <Flex
                key={index}
                direction="row"
                bg="gray.200"
                mb="2.5"
                mt="3"
                py="2"
                rounded="lg"
                _text={{
                  color: "gray.800",
                }}
              >
                <Center width={100}>
                  <Image
                    source={item.image}
                    alt="not found"
                    size="xs"
                    rounded="lg"
                  ></Image>
                </Center>
                <Center
                  d="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  width="70%"
                  pr="5"
                >
                  <Heading fontSize="sm" color="black">
                    {item.title}
                  </Heading>
                  <Heading fontSize="sm" color="gray.500">
                    {item.qty}
                  </Heading>
                </Center>
              </Flex>
            );
          })}
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default RecipeItem;
