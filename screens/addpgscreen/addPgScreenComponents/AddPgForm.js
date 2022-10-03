import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert, Image } from "react-native";
import { Colors } from "../../../constants/CustomColor";
import { CustomStrings } from "../../../constants/CustomStrings";
import { CustomStyles } from "../../../constants/CustomStyles";
import { validateNames, validatePrice } from "../../../utils/Validation";
import LabelAndInput from "./LabelAndInput";
import RadioButton from "./RadioButton";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const AddPgForm = ({ addNewPg }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("Male");
  const [image, setImage] = useState(null);
  const [isProductvalid, setIsProductvalid] = useState({
    name: true,
    price: true,
    description: true,
    location: true,
    image: true,
  });
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(null);
  const navigation = useNavigation();

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "name":
        setName(enteredValue);
        const isNameValid = validateNames(enteredValue);
        setIsProductvalid({
          name: isNameValid,
        });
        break;
      case "price":
        setPrice(enteredValue);
        const isPriceValid = validatePrice(enteredValue);
        setIsProductvalid({
          price: isPriceValid,
        });
        break;
      case "description":
        setDescription(enteredValue);
        const isDescriptionValid = validateNames(enteredValue);
        setIsProductvalid({
          description: isDescriptionValid,
        });
        break;
      case "location":
        setLocation(enteredValue);
        const isLocationValid = validateNames(location);
        setIsProductvalid({
          location: isLocationValid,
        });
        break;
      case "gender":
        setGender(enteredValue);
        break;
    }
  }

  async function pickImage() {
    const galleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasGalleryPermissions(galleryStatus.status == "granted");
    if (galleryStatus.status == "denied") {
      Alert.alert("Permissions are required to upload image!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  function addPgHandler() {
    const isNameValid = validateNames(name);
    const isLocationValid = validateNames(location);
    const isPriceValid = validatePrice(price);
    const isDescriptionValid = validateNames(description);
    const isImageValid = !!image;

    setIsProductvalid({
      name: isNameValid,
      price: isPriceValid,
      description: isDescriptionValid,
      location: isLocationValid,
      image: isImageValid,
    });

    if (
      !isNameValid ||
      !isPriceValid ||
      !isDescriptionValid ||
      !isLocationValid ||
      !isImageValid
    ) {
      return;
    }
    addNewPg(name, image, price, description, location, gender);
    Alert.alert("Added", "PG Added Successfully!");
    setPrice("");
    setDescription("");
    setLocation("");
    setName("");
    setGender("");
    setImage("");
    navigation.navigate("Home");
  }

  return (
    <View>
      {!image ? (
        <Pressable
          style={CustomStyles.uploadImageContainer}
          onPress={pickImage}
        >
          <Text style={CustomStyles.uploadImageText}>Upload Image</Text>
        </Pressable>
      ) : (
        <View style={CustomStyles.uploadedImageContainer}>
          <Image source={{ uri: image }} style={CustomStyles.uploadedImage} />
        </View>
      )}
      {!isProductvalid.image && (
        <Text style={CustomStyles.error}>{`Please add Image`}</Text>
      )}
      <LabelAndInput
        label={CustomStrings.str25}
        textInputConfig={{
          value: name,
          onChangeText: updateInputValueHandler.bind(this, "name"),
          keyboardType: "default",
          placeholder: CustomStrings.str25,
          placeholderTextColor: Colors.gray2,
        }}
        isValid={isProductvalid.name}
      />
      <LabelAndInput
        label={CustomStrings.str26}
        textInputConfig={{
          value: location,
          onChangeText: updateInputValueHandler.bind(this, "location"),
          keyboardType: "default",
          placeholder: CustomStrings.str26,
          placeholderTextColor: Colors.gray2,
        }}
        isValid={isProductvalid.location}
      />
      <Text style={[CustomStyles.labeltext, { marginTop: 12 }]}>
        {CustomStrings.str27}
      </Text>
      <View style={CustomStyles.infoOuterContainer}>
        <View style={CustomStyles.rowWithMargin}>
          <RadioButton
            selected={gender == "Male"}
            label="Male"
            selectGender={updateInputValueHandler.bind(this, "gender")}
          />
          <Text style={CustomStyles.labeltext}>Male</Text>
        </View>
        <View style={CustomStyles.rowWithMargin}>
          <RadioButton
            selected={gender == "Female"}
            label="Female"
            selectGender={updateInputValueHandler.bind(this, "gender")}
          />
          <Text style={CustomStyles.labeltext}>Female</Text>
        </View>
        <View style={CustomStyles.rowWithMargin}>
          <RadioButton
            selected={gender == "Unisex"}
            label="Unisex"
            selectGender={updateInputValueHandler.bind(this, "gender")}
          />
          <Text style={CustomStyles.labeltext}>Unisex</Text>
        </View>
      </View>
      <LabelAndInput
        label={CustomStrings.str28}
        textInputConfig={{
          value: price,
          onChangeText: updateInputValueHandler.bind(this, "price"),
          keyboardType: "decimal-pad",
          placeholder: CustomStrings.str28,
          placeholderTextColor: Colors.gray2,
        }}
        isValid={isProductvalid.price}
      />
      <LabelAndInput
        label={CustomStrings.str29}
        textInputConfig={{
          value: description,
          onChangeText: updateInputValueHandler.bind(this, "description"),
          keyboardType: "default",
          placeholder: CustomStrings.str29,
          placeholderTextColor: Colors.gray2,
          multiline: true,
        }}
        isValid={isProductvalid.description}
      />
      <View style={CustomStyles.submitButtonOuter}>
        <Pressable
          style={({ pressed }) => [
            CustomStyles.submitButton,
            pressed && CustomStyles.pressed,
          ]}
          onPress={addPgHandler}
        >
          <Text style={CustomStyles.submitButtonText}>SUBMIT</Text>
        </Pressable>
      </View>
    </View>
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
export default AddPgForm;
