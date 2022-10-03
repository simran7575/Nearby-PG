import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { CustomStyles } from "../../../constants/CustomStyles";
import IconButton from "./IconButton";

// create a component
const HeaderIcons = () => {
  const navigation = useNavigation();
  return (
    <View style={CustomStyles.iconContainers}>
      <View style={{ flex: 3 }}>
        <IconButton
          name={"arrow-back"}
          size={18}
          color="black"
          backgroundColor={"white"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={[CustomStyles.infoOuterContainer, { flex: 1 }]}>
        <IconButton
          name={"share-social-outline"}
          size={18}
          color={"black"}
          backgroundColor={"white"}
        />
        <IconButton
          name={"heart-outline"}
          size={18}
          color={"black"}
          backgroundColor={"white"}
        />
      </View>
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
export default HeaderIcons;
