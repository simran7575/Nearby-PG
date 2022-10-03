//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CustomStyles } from "../../../constants/CustomStyles";
import CardItemBookings from "./CardItemBookings";

// create a component
const PGMyBookingList = ({ data }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <CardItemBookings data={item.item} />}
      contentContainerStyle={CustomStyles.marginBottom}
    />
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
export default PGMyBookingList;
