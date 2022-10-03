import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import Divider from "../../components/Divider";
import { CustomStyles } from "../../constants/CustomStyles";
import AboutProperty from "./detailScreenComponents/AboutProperty";
import BottomDescriptionBar from "./detailScreenComponents/BottomDescriptionBar";
import FoodOptions from "./detailScreenComponents/FoodOptions";
import ImageAndIcons from "./detailScreenComponents/ImageAndIcons";
import MonthBreakup from "./detailScreenComponents/MonthBreakup";
import PropertyAmenities from "./detailScreenComponents/PropertyAmenities";
import RoomTypes from "./detailScreenComponents/RoomTypes";
import Signature from "./detailScreenComponents/Signature";
import TitleAndIcons from "./detailScreenComponents/TitleAndIcons";

// create a component
const DetailScreen = ({ route }) => {
  const item = route.params.data;

  return (
    <SafeAreaView style={CustomStyles.generalContainer}>
      <ScrollView
        style={CustomStyles.generalContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: "30%",
        }}
      >
        <View style={CustomStyles.generalContainer}>
          <ImageAndIcons url={item.url} />
          <View style={CustomStyles.mainContainer}>
            <TitleAndIcons name={item.name} locality={item.locality} />
            <Divider style={CustomStyles.divider} />
            <Signature />
            <Divider style={CustomStyles.divider} />
            <PropertyAmenities />
            <Divider style={CustomStyles.dividerNoUpperMargin} />
            <RoomTypes />
            <Divider style={CustomStyles.divider} />
            <FoodOptions />
            <Divider style={CustomStyles.divider} />
            <MonthBreakup />
            <Divider style={CustomStyles.divider} />
            <AboutProperty />

            <Divider style={CustomStyles.dividerShort} />
          </View>
        </View>
      </ScrollView>
      <BottomDescriptionBar item={item} />
    </SafeAreaView>
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
export default DetailScreen;
