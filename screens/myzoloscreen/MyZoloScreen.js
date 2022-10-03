//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Divider from "../../components/Divider";
import { Icons } from "../../components/Icon";
import TitleText from "../../components/TitleText";
import { CustomStyles } from "../../constants/CustomStyles";
import InfoLabel from "../profilescreen/profileScreenComponents/InfoLabel";

// create a component
function MyZoloScreen({ navigation }) {
  return (
    <SafeAreaView style={CustomStyles.generalContainer}>
      <ScrollView
        style={CustomStyles.generalContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: "30%",
        }}
      >
        <View style={CustomStyles.generalContainerPadding}>
          <TitleText>My Item</TitleText>
          <Divider style={CustomStyles.divider} />
          <InfoLabel
            label="Transaction"
            value="Previous Payments"
            icon="card-outline"
            arrow
          />
          <Divider style={CustomStyles.divider} />
          <InfoLabel
            label="Wallet"
            value="Current Balance: $0"
            icon="wallet-outline"
            arrow
          />
          <Divider style={CustomStyles.divider} />
          <InfoLabel
            label="Bookings"
            value="Booking History"
            icon="list"
            arrow
            onPress={() => {
              navigation.navigate("MyBookings");
            }}
          />
          <Divider style={CustomStyles.divider} />
          <InfoLabel
            label="Zolo Care"
            value="Tickets History"
            icon="ios-chatbubble-ellipses-outline"
            arrow
          />
          <Divider style={CustomStyles.divider} />
          <InfoLabel
            label="My Visits"
            value="Visits History"
            icon="foot-print"
            type={Icons.MaterialCommunityIcons}
            arrow
          />
          <Divider style={CustomStyles.divider} />
          <InfoLabel
            label="Favourites"
            value="Properties you liked"
            icon="heart-outline"
            arrow
          />
          <View style={CustomStyles.bottomZoloContainer}>
            <TitleText>Info</TitleText>
            <Divider style={CustomStyles.divider} />
            <InfoLabel
              label="About Zolo"
              value="Read Our Stroy"
              icon="information-circle-outline"
              arrow
            />
            <Divider style={CustomStyles.divider} />
            <InfoLabel
              label="Resident Policy"
              value="Know the rules"
              icon="receipt-outline"
              arrow
            />
            <Divider style={CustomStyles.divider} />
            <InfoLabel
              label={"Cancellation & Refund"}
              value={"Must Read T&C"}
              icon="cash-refund"
              type={Icons.MaterialCommunityIcons}
              arrow
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default MyZoloScreen;
