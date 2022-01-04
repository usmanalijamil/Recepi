import React, { useState } from "react";
import Model from "../../components/CustomModel";
import { useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../../components/CustomButton";
import {
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  Input,
  Button,
  Text,
  Link,
  Image,
  Center,
  Modal,
  NativeBaseProvider,
} from "native-base";
import CustomInput from "../../components/CustomInput";

import firebase from "../../firebase";
import { marginBottom } from "styled-system";

export const Register = ({ navigation }) => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [modalVisible, setModalVisible] = useState(false);

  // const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
    // if (fullname === null) {
    //   errorMessage = "Fullname is required";
    // } else if (/^[A-Z][a-z0-9_-]{3,19}$/.test(fullname)) {
    //   errorMessage = "First letter must be capital";
    // }

    // if (email.length() === 0) {
    //   errorMessage = "Email is required";
    // } else if (/\S+@\S+\.\S+/.test(email)) {
    //   errorMessage = "Entered value does not match email format";
    // }

    // if (password && confirmPassword === null) {
    //   errorMessage = "Password is required";
    // } else if (password !== confirmPassword) {
    //   errorMessage = setShowModal(true);
    // }

    if (data.password !== data.confirmPassword) {
      setModalVisible(true);
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          res.user.updateProfile({
            fullName: data.fullName,
          });
          setModalVisible(true);
        })
        .catch((error) => console.log({ errorMessage: error.message }));
    }
  };

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        p="10"
        safeArea
        justifyContent="center"
        w="100%"
        maxW="490"
      >
        <Box position="absolute">
          <Image
            style={{
              width: 130,
              height: 130,
              marginLeft: 320,
              marginBottom: 550,
            }}
            source={require("./../../assets/Images/circle.png")}
            alt="circle image"
          />
        </Box>
        <Box d="flex" alignItems="center" mb={60}>
          <Heading size="md" mr="20" fontWeight="600" color="black">
            Welcome To,
          </Heading>
          <Heading
            size="md"
            bold
            ml="4"
            color="warning.500"
            fontWeight="medium"
          >
            Register Our Company!
          </Heading>
        </Box>
        <Box>
          <Text
            style={{ fontSize: 22, color: "grey", marginTop: 3, marginLeft: 5 }}
          >
            Register .....
          </Text>
        </Box>
        <Box mb="5">
          <VStack space={2}>
            <CustomInput
              control={control}
              errors={errors}
              name="fullName"
              rules={{
                required: "true",
              }}
              errorMessage="Username is required!"
              placeholder="name"
            />
            <Icon
              size={23}
              name="user"
              color="#808080"
              style={{
                position: "absolute",
                marginTop: 42,
                marginLeft: 277,
              }}
            />
            <CustomInput
              control={control}
              errors={errors}
              name="email"
              rules={{
                required: "true",
              }}
              errorMessage="Email is required!"
              placeholder="email"

              // ref={register("email", {
              //   required: "required",
              //   pattern: {
              //     value: /\S+@\S+\.\S+/,
              //     message: "Entered value does not match email format",
              //   },
              // })}
            />
            <Icon
              size={20}
              name="envelope"
              color="#808080"
              style={{
                position: "absolute",
                marginTop: 140,
                marginLeft: 274,
              }}
            />
            <CustomInput
              control={control}
              errors={errors}
              name="password"
              rules={{
                required: "true",
              }}
              errorMessage="Password is required!"
              placeholder="password"
              secureTextEntry={true}
            />
            <Icon
              size={25}
              name="lock"
              color="#808080"
              style={{
                position: "absolute",
                marginTop: 237,
                marginLeft: 276,
              }}
            />
            <CustomInput
              control={control}
              errors={errors}
              name="confirmPassword"
              rules={{
                required: "true",
              }}
              errorMessage="Confirm Password is required!"
              placeholder="confirm password"
              secureTextEntry={true}
            />
            <Icon
              size={25}
              name="check-circle"
              color="#808080"
              style={{
                position: "absolute",
                marginTop: 333,
                marginLeft: 273,
              }}
            />
            <Box mt="2">
              {/* <Button
                padding="4"
                rounded="full"
                width="60%"
                bg="amber.500"
                mt="2"
                onPress={handleSubmit(onSubmit)}
              >
                <Heading size="md" color="white">
                  Sign Up
                </Heading>
              </Button> */}
              <CustomButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
            </Box>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="md" color="black" mt="1">
                Already User{""}
              </Text>
              <Link
                ml="1"
                _text={{
                  color: "black",
                  fontWeight: "medium",
                  fontSize: "md",
                }}
                onPress={() => navigation.navigate("login")}
              >
                <Text bold fontSize="md" mt="1">
                  Login Here
                </Text>
              </Link>
              <Box position="absolute">
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    marginRight: 380,
                  }}
                  source={require("./../../assets/Images/circle.png")}
                  alt="circle image"
                />
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>

      {modalVisible && (
        <Model
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(!modalVisible)}
          title="Congratulation register successful"
          success
        />
      )}
    </NativeBaseProvider>
  );
};
