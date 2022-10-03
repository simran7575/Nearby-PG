import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon, { Icons } from "../components/Icon";
import { Colors } from "../constants/CustomColor";
import ProfileScreen from "../screens/profilescreen/ProfileScreen";
import HomeScreen from "../screens/homescreen/HomeScreen";
import MyZoloScreen from "../screens/myzoloscreen/MyZoloScreen";
import SearchScreen from "../screens/searchscreen/SearchScreen";

const Tab = createBottomTabNavigator();

function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryblue,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          height: "7%",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          flex: 0.6,
          fontFamily: "poppins-regular",
        },
        tabBarIconStyle: {
          flex: 1,
          top: 4,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View styles={styles.bottomtabIcon}>
              <Icon
                type={Icons.Ionicons}
                name="home-outline"
                color={focused ? Colors.primaryblue : Colors.gray2}
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyZolo"
        component={MyZoloScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View styles={styles.bottomtabIcon}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="hand-wave-outline"
                color={focused ? Colors.primaryblue : Colors.gray2}
                size={24}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View styles={styles.bottomtabIcon}>
              <Icon
                type={Icons.Ionicons}
                name="search"
                color={focused ? Colors.primaryblue : Colors.gray2}
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View styles={styles.bottomtabIcon}>
              <Icon
                type={Icons.Ionicons}
                name="person-outline"
                color={focused ? Colors.primaryblue : Colors.gray2}
                size={24}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomtabIcon: {
    justifyContent: "center",
    alignItems: "center",
    top: 40,
  },
});

export default BottomTabBar;
