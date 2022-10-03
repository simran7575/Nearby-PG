//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const SearchContainer = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={CustomStyles.searchContainer}
      onPress={() => {
        navigation.navigate("Search");
      }}
    >
      <View style={CustomStyles.infoOuterContainer}>
        <Text style={CustomStyles.descriptionTextMediumLight}>
          {CustomStrings.str01}
        </Text>
        <Icon name="search" type={Icons.Ionicons} color={Colors.gray2}></Icon>
      </View>
    </Pressable>
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
export default SearchContainer;
