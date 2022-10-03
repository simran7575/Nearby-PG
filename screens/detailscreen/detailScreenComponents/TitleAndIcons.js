//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";
import IconButton from "./IconButton";

// create a component
const TitleAndIcons = ({ name, locality }) => {
  return (
    <View style={CustomStyles.infoOuterContainer}>
      <View style={{ flex: 4 }}>
        <Text style={CustomStyles.titleTextLarge}>{name}</Text>
        <Text style={CustomStyles.priceTextLarge}>{locality}</Text>
      </View>
      <View style={[CustomStyles.infoOuterContainer, { flex: 1 }]}>
        <IconButton
          name={"star-outline"}
          size={18}
          color={"white"}
          backgroundColor={Colors.yellow}
        />
        <IconButton
          name={"male-female-outline"}
          size={18}
          color={"white"}
          backgroundColor={Colors.gray2}
        />
      </View>
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
export default TitleAndIcons;
