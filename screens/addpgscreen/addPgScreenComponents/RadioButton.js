//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component

function RadioButton({ style, selected, label, selectGender }) {
  const changeSelection = () => {
    selectGender(label);
  };
  return (
    <Pressable onPress={changeSelection} style={CustomStyles.marginRight6}>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: Colors.primaryblue,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ]}
      >
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: Colors.primaryblue,
            }}
          />
        ) : null}
      </View>
    </Pressable>
  );
}

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
export default RadioButton;
