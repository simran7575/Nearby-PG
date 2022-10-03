//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icons } from "../../../components/Icon";
import { CustomStyles } from "../../../constants/CustomStyles";
import Icon from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";

// create a component
const FoodItem = ({ title, value }) => {
  return (
    <View style={[CustomStyles.infoContainer, { marginVertical: 6 }]}>
      <View style={[CustomStyles.propertyImageContainer, { marginRight: 8 }]}>
        <Icon
          name={"food-outline"}
          type={Icons.MaterialCommunityIcons}
          color={Colors.black}
          size={20}
        />
      </View>
      <View>
        <Text style={CustomStyles.roomTitle}>{title}</Text>
        <Text style={CustomStyles.priceTextSmall}>{value}</Text>
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
export default FoodItem;
