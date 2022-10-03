import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { Colors } from "../../../constants/CustomColor";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";
import { myBookings } from "../../../data/mybookings";

// create a component

const addToMyBookings = (item) => {
  let alreadyExistingBooking = myBookings.find((element) => {
    return element.id == item.id;
  });
  if (alreadyExistingBooking) {
    Alert.alert("Already Booked!", "PG is already in your bookings!");
    return false;
  } else {
    myBookings.push(item);
    Alert.alert("Successful!", "Sucessfully added Pg In my bookings!");
    return true;
  }
};
const BottomDescriptionBar = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={CustomStyles.bottomDescriptionBar}>
      <View style={CustomStyles.centered}>
        <Text style={CustomStyles.propertyTextLeft}>{CustomStrings.str21}</Text>
        <Text style={CustomStyles.priceTextSmall}>
          &#x20B9;{CustomStrings.str22}
        </Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          CustomStyles.selectRoomButton,
          pressed && CustomStyles.pressed,
        ]}
        onPress={() => {
          let result = addToMyBookings(item);
          if (result) {
            navigation.navigate("MyBookings");
          }
        }}
      >
        <Text style={[CustomStyles.cardTitleText, { color: Colors.white }]}>
          {CustomStrings.str23}
        </Text>
      </Pressable>
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
export default BottomDescriptionBar;
