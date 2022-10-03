//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomStyles } from "../constants/CustomStyles";

// create a component
const TitleText = ({ outerstyle, innerstyle, children }) => {
  return (
    <View style={[CustomStyles.titleouter, { ...outerstyle }]}>
      <Text style={[CustomStyles.titleinner, { ...innerstyle }]}>
        {children}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default TitleText;
