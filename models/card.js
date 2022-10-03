class Card {
  constructor(
    id,
    name,
    url,
    description,
    location,
    locality,
    facilities,
    gender,
    rent
  ) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.description = description;
    this.location = location;
    this.locality = locality;
    this.facilities = facilities;
    this.gender = gender;
    this.rent = rent;
  }
}

export default Card;
