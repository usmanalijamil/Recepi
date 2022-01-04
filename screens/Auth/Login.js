import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import CustomInput from "../../components/CustomInput";
import Model from "./../../components/CustomModel";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "./../../components/CustomButton";
import { View, TextInput, StyleSheet, Image } from "react-native";
// import {Card} from 'react-native-shadow-cards';

import {
  Radio,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Pressable,
  Modal,
} from "native-base";
import { marginTop, styles, textAlign } from "styled-system";

export const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [modalVisible, setModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email.trim(), data.password)
      .then((res) => {
        res.user.updateProfile({
          fullName: data.fullName,
        });
        console.log("Successfull Login");
        navigation.navigate("mainhome");
      })
      .catch((error) => {
        setErrorMsg({ errorMessage: error.message });
        setModalVisible(true);
      });
  };

  console.log(errorMsg);

  return (
    <>
      <Image
        style={style.backgroundImage}
        source={require("./../../assets/Images/main.jpg")}
      />

      <NativeBaseProvider>
        <Box
          flex={1}
          p="10"
          justifyContent="center"
          w="100%"
          // maxW="490"
          bg="white"
          opacity="1"
        >
          <Box mb="20">
            <Box position="absolute">
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: 300,
                }}
                source={require("./../../assets/Images/circle.png")}
              />
            </Box>
            <Box
              d="flex"
              alignItems="center"
              mb="20"
              style={{ marginRight: 120 }}
            >
              <Heading
                bold
                size="md"
                fontWeight="600"
                style={{ marginRight: 46 }}
              >
                Welcome To,
              </Heading>
              <Heading
                size="md"
                ml="15"
                color="warning.500"
                bold
                fontWeight="medium"
                style={{ fontSize: 19 }}
              >
                Our Company Name
              </Heading>
            </Box>

            {/* <Image source={require("./../../assets/Images/dotted2.png")} /> */}

            <Box>
              <Text style={{ fontSize: 22, color: "grey", marginTop: 3 }}>
                Login.....
              </Text>
            </Box>
            <Box mb="5">
              <VStack space={3}>
                <CustomInput
                  control={control}
                  errors={errors}
                  label="Email"
                  name="email"
                  rules={{
                    required: "true",
                  }}
                  errorMessage="Email is required!"
                  placeholder="Email"
                />
                <Icon
                  size={20}
                  name="envelope"
                  color="#808080"
                  style={{
                    position: "absolute",
                    marginTop: 43,
                    marginLeft: 275,
                  }}
                />

                <CustomInput
                  control={control}
                  errors={errors}
                  label="Password"
                  name="password"
                  rules={{
                    required: "true",
                  }}
                  errorMessage="Password is required!"
                  placeholder="Password"
                  secureTextEntry={true}
                />
                <Icon
                  size={25}
                  name="lock"
                  color="#808080"
                  style={{
                    position: "absolute",
                    marginTop: 146,
                    marginLeft: 278,
                  }}
                />
                <Radio.Group>
                  <Radio value="one" my={1} mt={2}>
                    <Text
                      style={{ color: "grey", fontSize: 15, marginLeft: 5 }}
                    >
                      Save Password
                    </Text>
                  </Radio>
                </Radio.Group>
                {/* <Button
                  width="50%"
                  padding="4"
                  rounded="full"
                  bg="amber.500"
                  mt="1"
                  onPress={handleSubmit(onSubmit)}
                >
                  <Heading size="md" color="white">
                    Login Now
                  </Heading>
                </Button> */}
                <CustomButton
                  title="Login Now"
                  onPress={handleSubmit(onSubmit)}
                />
                <HStack mt="3" justifyContent="center" mr="20">
                  <Text
                    fontSize="md"
                    color="black"
                    _dark={{
                      color: "white",
                    }}
                  >
                    Already have an account{""}
                  </Text>
                  <Link ml="1" onPress={() => navigation.navigate("register")}>
                    <Text bold fontSize="md">
                      signup?
                    </Text>
                  </Link>
                  <Box position="absolute">
                    <Image
                      style={{
                        width: 70,
                        height: 70,
                        marginRight: 300,
                        marginTop: 40,
                      }}
                      source={require("./../../assets/Images/circle.png")}
                    />
                  </Box>
                </HStack>
              </VStack>
            </Box>
            <Box position="absolute" mt="7">
              <Heading
                size="md"
                fontWeight="600"
                ml="10"
                style={{
                  marginTop: 650,
                  backgroundColor: "orange",

                  color: "black",
                  padding: 15,
                  width: 250,

                  borderRadius: 50,
                }}
              >
                Also Along With
              </Heading>
            </Box>
            <Box
              position="absolute"
              bg="white"
              w="6"
              h="6"
              alignItems="center"
              borderRadius="full"
              style={{ marginLeft: 210, marginTop: 695 }}
            >
              <Box style={{ marginTop: 6, marginRight: 1 }}>
                <Link>
                  <Icon name="facebook" color="black" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        {modalVisible && (
          <Model
            modalVisible={modalVisible}
            setModalVisible={() => setModalVisible(!modalVisible)}
            title={errorMsg.errorMessage}
            error
          />
        )}
      </NativeBaseProvider>
    </>
  );
};

const style = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  backgroundTransperant: {
    backgroundColor: "transparent",
  },
});
