//import liraries
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Colors } from "../../constants/CustomColor";
import { CustomStrings } from "../../constants/CustomStrings";

import { CustomStyles } from "../../constants/CustomStyles";
import { addNewPg } from "../../utils/AddNewPg";

import AddPgForm from "./addPgScreenComponents/AddPgForm";
import AddPGHeader from "./addPgScreenComponents/AddPGHeader";

// create a component
function AddPgScreen({ navigation }) {
  const addPGNavigate = (name, image, price, description, location, gender) => {
    addNewPg(name, image, price, description, location, gender);
  };
  return (
    <SafeAreaView style={CustomStyles.generalContainer}>
      <AddPGHeader title={CustomStrings.str24} screen="Home" />
      <ScrollView
        style={[
          CustomStyles.generalContainer,
          { backgroundColor: Colors.appBackground },
        ]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: "10%",
        }}
      >
        <View
          style={[
            CustomStyles.generalContainerPadding,
            { backgroundColor: Colors.appBackground },
          ]}
        >
          <AddPgForm addNewPg={addPGNavigate} />
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
export default AddPgScreen;
