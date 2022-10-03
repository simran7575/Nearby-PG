//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon, { Icons } from "../../../components/Icon";
import TitleText from "../../../components/TitleText";
import { Colors } from "../../../constants/CustomColor";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const AddPGHeader = ({ title, screen }) => {
  const navigation = useNavigation();
  return (
    <View style={CustomStyles.header}>
      <Pressable
        style={{ flex: 0.5, justifyContent: "center" }}
        onPress={() => navigation.navigate(screen)}
      >
        <Icon
          name={"arrow-back"}
          type={Icons.Ionicons}
          color={Colors.white}
          size={22}
        />
      </Pressable>
      <TitleText innerstyle={CustomStyles.whiteTitle} outerstyle={{ flex: 10 }}>
        {title}
      </TitleText>
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
export default AddPGHeader;
