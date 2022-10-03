//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import TitleText from "../../../components/TitleText";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";
import {
  propertyDataSmaller,
  propertyData,
} from "../../../data/propertyamenities";

// create a component
const PropertyAmenities = () => {
  const [isClicked, setIsClicked] = useState(false);

  const expandList = () => {
    setIsClicked(true);
  };
  let renderItem = (
    <View style={CustomStyles.propertyContainer}>
      {propertyDataSmaller.map((item) => (
        <View key={item.id} style={CustomStyles.propertyItem}>
          <View style={CustomStyles.propertyImageContainer}>
            <Image source={item.image} style={CustomStyles.propertyImage} />
          </View>
          <View style={CustomStyles.propertyTextContainer}>
            <Text style={CustomStyles.propertyText}>{item.title}</Text>
          </View>
        </View>
      ))}
      <Pressable style={CustomStyles.propertiesButton} onPress={expandList}>
        <Text>{CustomStrings.str08}</Text>
      </Pressable>
    </View>
  );

  if (isClicked) {
    renderItem = (
      <View style={CustomStyles.propertyContainer}>
        {propertyData.map((item) => (
          <View key={item.id} style={CustomStyles.propertyItem}>
            <View style={CustomStyles.propertyImageContainer}>
              <Image source={item.image} style={CustomStyles.propertyImage} />
            </View>
            <View style={CustomStyles.propertyTextContainer}>
              <Text style={CustomStyles.propertyText}>{item.title}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TitleText innerstyle={CustomStyles.cardTitleText}>
        Property Amenities
      </TitleText>
      {renderItem}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default PropertyAmenities;
