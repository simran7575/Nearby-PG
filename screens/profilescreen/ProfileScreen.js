import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { CustomStyles } from "../../constants/CustomStyles";
import ProfileBottom from "./profileScreenComponents/ProfileBottom";
import ProfileUpper from "./profileScreenComponents/ProfileUpper";

// create a component
const ProfileScreen = () => {
  return (
    <SafeAreaView style={CustomStyles.generalContainer}>
      <ScrollView
        style={CustomStyles.generalContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,

          justifyContent: "center",
        }}
      >
        <View style={CustomStyles.generalContainer}>
          <ProfileUpper />
          <View style={CustomStyles.profileContainer}>
            <ProfileBottom />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ProfileScreen;
