import React, { useState } from "react";
import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import { PlusCircle } from "react-native-feather";
import Table from "../Components/table";

const Ingredients = () => {
  const { control, getValues } = useForm();
  const [showTable, setShowTable] = useState(false);
  const [fields, setFields] = useState([{ value: null }]);

  function handleInputText(value, index) {
    const newFields = [...fields];
    newFields[index].value = value;
    setFields(newFields);
  }

  function handleAdd() {
    const newFields = [...fields];
    newFields.push({ value: null });
    setFields(newFields);
  }

  const handleSubmit = () => {
    console.log(fields);

    setShowTable(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fill the blank with Ingredients Details</Text>
      {fields.map((field, index) => {
        return (
          <View style={styles.controller} key={`${field}-${index}`}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  value={field.value || ""}
                  onChangeText={(value) => handleInputText(value, index)}
                />
              )}
            />
            <PlusCircle
              stroke="white"
              fill="blue"
              width={40}
              height={40}
              onPress={handleAdd}
            />
          </View>
        );
      })}
      <View style={styles.button}>
        <Button color="green" title="Submit" onPress={handleSubmit} />
      </View>
      {showTable && <Table field={fields} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#fff",
  },
  controller: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  label: {
    color: "black",
    paddingBottom: 10,
    marginLeft: 0,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 4,
    marginTop: 5,
    padding: 5,
  },

  button: {
    display: "flex",
    alignSelf: "center",
    marginTop: 40,
    width: 150,
  },
});

export default Ingredients;
