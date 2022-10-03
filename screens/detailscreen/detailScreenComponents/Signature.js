//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const Signature = () => {
  return (
    <View style={CustomStyles.infoOuterContainer}>
      <Image
        source={require("../../../assets/images/building.png")}
        style={CustomStyles.buildingImage}
      />
      <View>
        <Text style={CustomStyles.cardTitleText}>{CustomStrings.str06}</Text>
        <Text style={CustomStyles.signatureDescription}>
          {CustomStrings.str07}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Signature;
