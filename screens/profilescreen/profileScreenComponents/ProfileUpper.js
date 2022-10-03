import { View, Text, StyleSheet } from "react-native";
import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
function ProfileUpper() {
  return (
    <View style={CustomStyles.logoContainerUpper}>
      <View style={CustomStyles.profileImageContainer}>
        <View style={CustomStyles.profileImage}>
          <Icon
            name="person-outline"
            type={Icons.Ionicons}
            color={Colors.primaryblue}
            size={120}
          />
        </View>
        <View style={CustomStyles.camera}>
          <Icon
            name="camera-outline"
            type={Icons.Ionicons}
            color={Colors.primaryblue}
            size={20}
          />
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ProfileUpper;
