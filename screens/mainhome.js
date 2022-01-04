import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  Avatar,
  HStack,
  Flex,
  Link,
  Image,
  Stack,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../components/Footer";
import TrendingRecipes from "../components/trendingrecipes";

const MainHome = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView px={2} pt={10}>
        <Box space={2} bg="red.100" mt={4}>
          <Box
            d="flex"
            flexDirection="row"
            justifyContent="space-between"
            p={2}
          >
            <VStack>
              <Heading size="md">Hello Luis!</Heading>
              <Heading size="sm" color="gray.500">
                What you want to cook today?
              </Heading>
            </VStack>

            <Avatar
              bg="green.500"
              source={{
                uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
              }}
            >
              SS
            </Avatar>
          </Box>
          <Box p={2}>
            <Input
              placeholder="Search for Anything"
              variant="filled"
              width="100%"
              bg="gray.200"
              borderRadius="10"
              placeholderTextColor="gray.600"
              fontSize="16"
              _hover={{ bg: "gray.200", borderWidth: 0 }}
              borderWidth="0"
              _web={{
                _focus: { style: { boxShadow: "none" } },
              }}
              InputLeftElement={
                <Icon
                  ml="2"
                  size="5"
                  color="gray.500"
                  as={<Ionicons name="ios-search" />}
                />
              }
            />
          </Box>
        </Box>
        <Flex
          direction="row"
          bg="gray.200"
          mb="2.5"
          mt={4}
          p="2"
          rounded="lg"
          _text={{
            color: "gray.800",
          }}
        >
          <Image
            source={require("../assets/Images/home.jpg")}
            alt="not found"
            size="lg"
            rounded="lg"
          ></Image>

          <Center px="10">
            <Text fontSize="sm">You have 12 recipes that</Text>
            <Text fontSize="sm">you haven't tried yet</Text>

            <Link
              _text={{
                color: "green.800",
                fontWeight: "medium",
                fontSize: "md",
              }}
              onPress={() =>
                navigation.navigate("recipeItem", { recipe_id: "12" })
              }
            >
              See Recipes
            </Link>
          </Center>
        </Flex>
        <TrendingRecipes navigation={navigation} />
        <Flex
          direction="row"
          justifyContent="space-between"
          bg="gray.200"
          p={2}
          px={4}
          mt={4}
          rounded="lg"
          _text={{
            color: "gray.800",
          }}
        >
          <Heading fontSize="md" fontWeight="bold">
            Categories
          </Heading>

          <Link
            _text={{
              color: "gray.500",
              fontWeight: "medium",
              fontSize: "md",
            }}
            onPress={() => navigation.navigate("category")}
          >
            View All
          </Link>
        </Flex>
      </ScrollView>

      <Footer />
    </NativeBaseProvider>
  );
};

export default MainHome;
