import * as React from "react";
import {
  NativeBaseProvider,
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Link,
  Heading,
} from "native-base";
import CustomButton from "../components/CustomButton";

import { Dimensions, ImageBackground } from "react-native";

const { width, height } = Dimensions.get("window");
export const Home = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "flex-end",
          width: "100%",
        }}
        source={require("../assets/Images/home.jpg")}
      >
        <Box w="400" display="flex" justifyContent="center">
          <Heading
            mx="3"
            d="flex"
            alignItems="center"
            flexDirection="row"
            color="white"
            size="3xl"
          >
            Welcome Recipes
          </Heading>
        </Box>
      </ImageBackground>
      <Box
        bg="black"
        py="4"
        px="3"
        width="100%"
        maxWidth="100%"
        d="flex"
        justifyContent="flex-end"
      >
        <VStack space="5">
          <Heading color="white" size="md">
            Let's Cook Today!
          </Heading>
          {/* <Button
            size="md"
            padding="4"
            mx="5"
            rounded="full"
            bg="green.600"
            border="none"
            _pressed={{
              bg: "transparent",
              borderWidth: "1",
              borderColor: "green.500",
            }}
            onPress={() => navigation.navigate("login")}
          >
            <Heading size="md" color="white">
              LogIn
            </Heading>
          </Button> */}

          <CustomButton
            title="Login"
            onPress={() => navigation.navigate("login")}
          />

          {/* <Button
            padding="4"
            mx="5"
            rounded="full"
            borderWidth="1"
            borderColor="green.600"
            borderStyle="dotted"
            _pressed={{ bg: "green.500" }}
            bg="transparent"
            onPress={() => navigation.navigate("register")}
          >
            <Heading size="md" color="white">
              Register
            </Heading>
          </Button> */}
          <CustomButton
            title="Register"
            onPress={() => navigation.navigate("register")}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};
