import { View, Text, StyleSheet } from "react-native";
import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const MonthBreakup = () => {
  return (
    <View style={CustomStyles.infoOuterContainer}>
      <Text style={CustomStyles.cardTitleText}>{CustomStrings.str18}</Text>
      <Icon name={"add"} type={Icons.Ionicons} color={Colors.black} size={30} />
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
export default MonthBreakup;
