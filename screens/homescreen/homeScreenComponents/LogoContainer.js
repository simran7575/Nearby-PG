//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const LogoContainer = () => {
  return (
    <View style={CustomStyles.logoContainer}>
      <Image
        source={require("../../../assets/images/zolo.png")}
        style={CustomStyles.zoloImage}
      />
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
export default LogoContainer;
