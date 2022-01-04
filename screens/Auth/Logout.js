import React from "react";
import { NativeBaseProvider, Box, ScrollView } from "native-base";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import firebase from "./../../firebase";

const Logout = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <NativeBaseProvider>
      <ScrollView px={2} pt={10}>
        <Box space={2} bg="red.100" mt={4}>
          <CustomButton title="Sign Out" onPress={handleSignOut}></CustomButton>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Logout;
