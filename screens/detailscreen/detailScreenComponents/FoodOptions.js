//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TitleText from "../../../components/TitleText";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";
import FoodItem from "./FoodItem";

// create a component
const FoodOptions = () => {
  return (
    <View>
      <TitleText innerstyle={CustomStyles.cardTitleText}>
        Food Options
      </TitleText>
      <View style={CustomStyles.marginTop6}>
        <FoodItem title={CustomStrings.str13} value={CustomStrings.str15} />
        <FoodItem title={CustomStrings.str14} value={CustomStrings.str16} />
        <Text
          style={[CustomStyles.descriptionTextMediumSmall, { marginTop: 8 }]}
        >
          {CustomStrings.str17}
        </Text>
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
export default FoodOptions;
