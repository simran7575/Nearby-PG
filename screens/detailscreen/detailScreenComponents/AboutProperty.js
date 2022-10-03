//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const AboutProperty = () => {
  return (
    <View>
      <Text style={CustomStyles.cardTitleText}>{CustomStrings.str19}</Text>

      <Text style={CustomStyles.signatureDescription}>
        {CustomStrings.str20}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default AboutProperty;
