import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ShadowPropTypesIOS,
} from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
  control,
  errors,
  defaultValues,
  name,
  errorMessage,
  rules,
  label,
  password,
  keyboardType,
  placeholder,
  style,
  maxLength,
  setError,
  secureTextEntry,
  uppercase,
  autoComplete,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          // <View style={styles.card}>
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholder={placeholder}
            uppercase={uppercase}
            setError={setError}
            autoComplete={autoComplete}
          />
          // </View>
        )}
        name={name}
      />
      {errors[name] && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#fff',
  },

  input: {
    width: '100%',
    height: 55,
    fontSize: 18,
    paddingHorizontal: 18,
    elevation: 8,
    opacity: 0.8,
    // borderColor: "black",
    // borderWidth: 2,

    borderRadius: 50,
    backgroundColor: '#fff',
  },

  // card: {
  //   borderRadius: 50,

  //   backgroundColor: "#fff",

  //   // shadowColor: "#FFFF00",
  //   // shadowOpacity: 0.7,
  //   shadowRadius: 12,
  //   // marginHorizontal: 4,
  //   // marginVertical: 6,
  // },

  errorMessage: {
    color: '#E4001C',
    marginLeft: 5,
    marginTop: 5,
  },
});

export default CustomInput;
