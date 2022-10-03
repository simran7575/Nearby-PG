//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TitleText from "../../../components/TitleText";
import { CustomStyles } from "../../../constants/CustomStyles";
// create a component
const ListTitle = ({ title, description, viewall }) => {
  return (
    <View style={CustomStyles.infoOuterContainerMargin}>
      <View>
        <TitleText innerstyle={CustomStyles.listTitle}>{title}</TitleText>
        <TitleText innerstyle={CustomStyles.listDescription}>
          {description}
        </TitleText>
      </View>
      {viewall && (
        <View>
          <TitleText innerstyle={CustomStyles.viewall}>View All</TitleText>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default ListTitle;
