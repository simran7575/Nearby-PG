import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";
import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const AddPgButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[CustomStyles.customButtonContainer]}
      onPress={() => navigation.navigate("AddPg")}
    >
      <Icon name="add" color={Colors.white} type={Icons.Ionicons} size={32} />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default AddPgButton;
