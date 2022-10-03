import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { CustomStrings } from "../../constants/CustomStrings";
import { CustomStyles } from "../../constants/CustomStyles";
import { FeaturedProperties, SelectedProperties } from "../../data/latestdeals";
import AddPgButton from "./homeScreenComponents/AddPgButton";
import ListTitle from "./homeScreenComponents/ListTitle";
import LocationContainer from "./homeScreenComponents/LocationContainer";
import LogoContainer from "./homeScreenComponents/LogoContainer";
import PGList from "./homeScreenComponents/PGList";
import SearchContainer from "./homeScreenComponents/SearchContainer";

// create a component
function HomeScreen() {
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
        <View style={CustomStyles.generalContainerPadding}>
          <LogoContainer />
          <LocationContainer />
          <SearchContainer />
          <ListTitle
            title={CustomStrings.str02}
            description={CustomStrings.str03}
            viewall
          />
          <View style={CustomStyles.carousel}>
            <PGList data={FeaturedProperties} horizontal />
          </View>
          <ListTitle
            title={CustomStrings.str04}
            description={CustomStrings.str05}
          />
          <View style={CustomStyles.carousel}>
            <PGList data={SelectedProperties} horizontal />
          </View>
        </View>
      </ScrollView>
      <AddPgButton />
    </SafeAreaView>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default HomeScreen;
