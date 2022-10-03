import { View, Text, StyleSheet } from "react-native";
import Divider from "../../../components/Divider";
import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";
import InfoLabel from "./InfoLabel";

// create a component
const ProfileBottom = () => {
  return (
    <View style={CustomStyles.profileBottomContainer}>
      <InfoLabel label="Name" value="User" icon="pencil" />
      <Divider style={CustomStyles.divider} />
      <InfoLabel label="Email" value="user@gmail.com" icon="mail" />
      <Divider style={CustomStyles.divider} />
      <InfoLabel label="Phone" value="+91 1234567890" icon="call" />
      <Divider style={CustomStyles.divider} />
      <InfoLabel label="Logout" value="" icon="exit" color={Colors.red} />
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
export default ProfileBottom;
