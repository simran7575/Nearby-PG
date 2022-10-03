//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const LabelAndInput = ({ label, textInputConfig, isValid }) => {
  const inputStyles = [CustomStyles.textInput];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputmultiline);
  }
  return (
    <View style={CustomStyles.labelcontainer}>
      <Text style={CustomStyles.labeltext}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} autoComplete="off" />
      {!isValid && <Text style={CustomStyles.error}>{`Invalid ${label}`}</Text>}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputmultiline: {
    minHeight: 120,
    textAlignVertical: "top",
    paddingTop: 10,
  },
});

//make this component available to the app
export default LabelAndInput;
