//import liraries
import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { CustomStyles } from "../../../constants/CustomStyles";
import HeaderIcons from "./HeaderIcons";

// create a component
const ImageAndIcons = ({ url }) => {
  return (
    <>
      <View style={CustomStyles.imageContainerLarge}>
        <Image source={{ uri: url }} style={CustomStyles.image} />
      </View>

      <HeaderIcons />
    </>
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
export default ImageAndIcons;
