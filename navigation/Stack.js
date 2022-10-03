import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPgScreen from "../screens/addpgscreen/AddPgScreen";
import DetailScreen from "../screens/detailscreen/DetailScreen";
import MyBookings from "../screens/mybookingsscreen/MyBookings";
import BottomTabBar from "./BottomTab";

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTabBar}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen name="AddPg" component={AddPgScreen} options={{}} />

      <Stack.Screen name="Details" component={DetailScreen} options={{}} />
      <Stack.Screen name="MyBookings" component={MyBookings} options={{}} />
    </Stack.Navigator>
  );
}

export default StackNav;
