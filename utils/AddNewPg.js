import { FeaturedProperties } from "../data/latestdeals";
import Card from "../models/card";

let length = FeaturedProperties.length + 1;
let newId = "c" + length;

export const addNewPg = (name, url, price, description, location, gender) => {
  let newpg = new Card(
    newId,
    name,
    url,
    description,
    location,
    "Thanisandra",
    "Tv, Wifi, Refrigerator, Power Backup, Indoor Games, Almirah, HouseKeeping",
    gender,
    price
  );

  FeaturedProperties.push(newpg);
};
