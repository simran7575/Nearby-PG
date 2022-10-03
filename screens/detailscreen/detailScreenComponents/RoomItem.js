//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const RoomItem = ({ icon, title, price }) => {
  return (
    <View style={[CustomStyles.infoContainer, { flex: 1 }]}>
      <View style={[CustomStyles.propertyImageContainer, { marginRight: 8 }]}>
        <Image source={icon} style={CustomStyles.propertyImage} />
      </View>
      <View>
        <Text style={CustomStyles.roomTitle}>{title}</Text>
        <View style={CustomStyles.infoContainer}>
          <Text style={CustomStyles.priceTextSmall}>&#x20B9;{price}</Text>
          <Text style={CustomStyles.descriptionTextMediumSmall}>onwards</Text>
        </View>
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
export default RoomItem;
