import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ModelWrapper from "./ModelWrapper";

const CustomModel = ({
  modalVisible,
  setModalVisible,
  title,
  error,
  success,
}) => {
  return (
    <ModelWrapper
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={title}
    >
      <View>
        {error && (
          <View>
            <Text>{title}</Text>
          </View>
        )}

        {success && (
          <View>
            <Text>{title}</Text>
          </View>
        )}
      </View>
    </ModelWrapper>
  );
};

export default CustomModel;
