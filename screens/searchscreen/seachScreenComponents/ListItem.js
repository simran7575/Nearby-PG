import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon, { Icons } from "../../../components/Icon";
import { Colors } from "../../../constants/CustomColor";
import { CustomStyles } from "../../../constants/CustomStyles";

// create a component
const ListItem = ({ data }) => {
  const navigation = useNavigation();
  const moveToDetailScreen = () => {
    navigation.navigate("Details", { data });
  };
  return (
    <Pressable style={CustomStyles.ListContainer} onPress={moveToDetailScreen}>
      <View style={[CustomStyles.infoContainer, { flex: 5 }]}>
        <View style={[CustomStyles.propertyImageContainer, { marginRight: 8 }]}>
          <Icon
            name="location-outline"
            color={Colors.primaryblue}
            type={Icons.Ionicons}
          />
        </View>
        <View>
          <Text
            style={[CustomStyles.priceTextLarge, { color: Colors.lightBlack }]}
          >
            {data.name}
          </Text>
          <Text style={[CustomStyles.cardDescriptionText, { maxWidth: "90%" }]}>
            {data.location}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={[
            CustomStyles.descriptionTextMedium,
            { textAlignVertical: "center" },
          ]}
        >
          {data.gender}
        </Text>
      </View>
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
export default ListItem;
