//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TitleText from "../../../components/TitleText";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";
import RoomItem from "./RoomItem";

// create a component
const RoomTypes = () => {
  return (
    <View>
      <TitleText innerstyle={CustomStyles.cardTitleText}>RoomTypes</TitleText>
      <View style={CustomStyles.rowWithMargin}>
        <RoomItem
          icon={require("../../../assets/images/singleperson.png")}
          title={CustomStrings.str11}
          price={CustomStrings.str09}
        />
        <RoomItem
          icon={require("../../../assets/images/two_sharing.png")}
          title={CustomStrings.str12}
          price={CustomStrings.str10}
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
    textAlignVertical: "bottom",
  },
});

//make this component available to the app
export default RoomTypes;
