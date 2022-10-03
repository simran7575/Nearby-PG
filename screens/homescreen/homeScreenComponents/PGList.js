import { FlatList } from "react-native";
import CardItem from "./CardItem";

// create a component
const PGList = ({ data, horizontal }) => {
  return (
    <FlatList
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <CardItem data={item.item} />}
    />
  );
};

// define your styles

//make this component available to the app
export default PGList;
