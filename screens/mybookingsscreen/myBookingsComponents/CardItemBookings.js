//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Divider from "../../../components/Divider";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const CardItemBookings = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        CustomStyles.cardContainerVertical,
        pressed && CustomStyles.pressed,
      ]}
      onPress={() => navigation.navigate("Details", { data })}
    >
      <View style={CustomStyles.listContainer}>
        <View style={CustomStyles.cardImageContainerVertical}>
          <Image source={{ uri: data.url }} style={CustomStyles.cardImage} />
        </View>
        <View style={CustomStyles.dealsContainer}>
          <Text style={CustomStyles.cardTitleText}>{data.name}</Text>
          <Text style={CustomStyles.cardDescriptionText}>{data.locality}</Text>
          <Divider style={CustomStyles.divider} />
          <Text style={CustomStyles.cardDescriptionText}>Monthly Rent</Text>
          <View style={CustomStyles.infoContainer}>
            <Text style={CustomStyles.priceText}>&#x20B9;{data.rent}</Text>
            <Text style={CustomStyles.descriptionTextMedium}>onwards</Text>
          </View>
        </View>
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
export default CardItemBookings;
