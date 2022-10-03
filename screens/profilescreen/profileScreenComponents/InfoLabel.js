//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const InfoLabel = ({
  label,
  value,
  icon,
  type = Icons.Ionicons,
  color,
  arrow,
  onPress,
}) => {
  return (
    <Pressable
      style={CustomStyles.infoOuterContainer}
      onPress={onPress ? onPress : () => {}}
    >
      <View style={CustomStyles.infoContainer}>
        <View style={CustomStyles.profileIcon}>
          <Icon
            name={icon}
            type={type}
            color={color ? color : Colors.lightBlack}
            size={20}
          />
        </View>
        <View>
          <Text
            style={[
              CustomStyles.priceTextLarge,
              { color: color ? color : Colors.lightBlack },
            ]}
          >
            {label}
          </Text>
          <Text
            style={[
              CustomStyles.descriptionTextMedium,
              { color: color ? color : Colors.gray4 },
            ]}
          >
            {value}
          </Text>
        </View>
      </View>
      {arrow && (
        <View>
          <Icon
            name="arrow-forward"
            type={Icons.Ionicons}
            color={Colors.primaryblue}
            size={22}
          />
        </View>
      )}
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
export default InfoLabel;
