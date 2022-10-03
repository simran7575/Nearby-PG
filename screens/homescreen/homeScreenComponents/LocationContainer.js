//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";
Colors;
// create a component
const LocationContainer = () => {
  return (
    <View style={CustomStyles.infoOuterContainer}>
      <Pressable style={CustomStyles.locationButtonContainer}>
        <Text style={CustomStyles.cityText}>Bangalore</Text>
        <Icon
          name="chevron-down-outline"
          color={Colors.lightblue}
          type={Icons.Ionicons}
        />
      </Pressable>
      <View style={CustomStyles.infoContainer}>
        <Icon
          name="ios-reader-outline"
          color={Colors.lightblue}
          type={Icons.Ionicons}
          style={CustomStyles.headerIcons}
        />
        <Icon
          name="bell-outline"
          color={Colors.lightblue}
          type={Icons.MaterialCommunityIcons}
          style={CustomStyles.headerIcons}
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
export default LocationContainer;
