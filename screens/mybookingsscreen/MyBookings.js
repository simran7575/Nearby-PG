//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../constants/CustomColor";
import { CustomStrings } from "../../constants/CustomStrings";
import { CustomStyles } from "../../constants/CustomStyles";
import { myBookings } from "../../data/mybookings";
import AddPGHeader from "../addpgscreen/addPgScreenComponents/AddPGHeader";
import PGMyBookingList from "./myBookingsComponents/PGMyBookingList";

// create a component
const MyBookings = () => {
  return (
    <View style={CustomStyles.generalContainer}>
      <AddPGHeader title={CustomStrings.str31} screen="MyZolo" />
      {myBookings.length != 0 ? (
        <View style={CustomStyles.generalContainerMargin}>
          <View style={CustomStyles.carousel}>
            <PGMyBookingList data={myBookings} />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/3973477.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.detailText}>
            {"There is no data , sorry try \n again any later time."}
          </Text>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.appBackground,
  },
  image: {
    width: 250,
    height: 200,
  },
  imageContainer: {
    marginVertical: 12,
  },
  detailText: {
    fontSize: 16,
    fontFamily: "poppins-regular",
    textAlign: "center",
    marginBottom: 48,
  },
});

//make this component available to the app
export default MyBookings;
