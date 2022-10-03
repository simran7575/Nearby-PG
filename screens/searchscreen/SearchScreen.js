//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import Icon, { Icons } from "../../components/Icon";
import { Colors } from "../../constants/CustomColor";
import { CustomStyles } from "../../constants/CustomStyles";
import { FeaturedProperties, SelectedProperties } from "../../data/latestdeals";
import ListItem from "./seachScreenComponents/ListItem";

let BigList = FeaturedProperties.concat(SelectedProperties);

function SearchScreen() {
  const [inputQuery, setInputQuery] = useState("");
  const [data, setData] = useState([]);

  const filterData = (input) => {
    let filteredList;
    if (input == "male") {
      filteredList = BigList.filter((item) => {
        return item.gender.toLowerCase() == input;
      });
    } else {
      filteredList = BigList.filter((item) => {
        return (
          item.gender.toLowerCase().includes(input) ||
          item.name.toLowerCase().includes(input) ||
          item.location.toLowerCase().includes(input)
        );
      });
    }

    setData(filteredList);
  };

  const addInputQuery = (input) => {
    setInputQuery(input);
    if (input.length > 0) {
      filterData(input.toLowerCase());
    }
    if (input.length < 1) {
      setData([]);
    }
  };

  return (
    <View style={[CustomStyles.generalContainerPadding, {}]}>
      <View style={CustomStyles.searchTextInputContainer}>
        <TextInput
          autoFocus={true}
          style={CustomStyles.searchTextInput}
          placeholder="Search location name or gender"
          placeholderTextColor={Colors.gray2}
          value={inputQuery}
          onChangeText={addInputQuery}
        />
        <View style={{ flex: 1, paddingLeft: 8 }}>
          <Icon name="search" type={Icons.Ionicons} color={Colors.gray2}></Icon>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {inputQuery.length > 3 && data.length == 0 && (
          <Text style={[CustomStyles.titleTextLarge, { marginTop: 24 }]}>
            No PG Found!!
          </Text>
        )}
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <ListItem data={item.item} />}
          contentContainerStyle={{ paddingBottom: "30%" }}
        />
      </View>
    </View>
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
export default SearchScreen;
