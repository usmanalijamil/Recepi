import React from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  Linking,
  Platform,
} from "native-base";

// images
// import Logo from '../assets/images/bata-logo-white.svg';
// import BackIcon from '../assets/images/caret-left.svg';
import BackIcon from "./../assets/Images/caret-left.svg";

const Header = ({ navigation, logo, title, backIcon }) => {
  return (
    <View
      h={14}
      bg="red.100"
      d="flex"
      justifyContent="space-between"
      px={6}
      alignItems="center"
    >
      <View d="flex" flexDirection="row">
        {backIcon && (
          <Pressable onPress={() => navigation.goBack()} pr={4}>
            <BackIcon />
          </Pressable>
        )}

        {title && (
          <Text fontSize="lg" color="white">
            {title}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Header;
