import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     name: "",
//   });
const initialFormState = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
};

export default function MainRegister() {
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const marginFromTop = screenHeight * 0.1;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/bgImage.jpg")}
      >
        <View style={styles.contentContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg",
            }}
          />
          <Text style={styles.heading}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="gray"
            value={form.name}
            onChangeText={(value) => handleInputChange("name", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(value) => handleInputChange("email", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => handleInputChange("password", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={(value) =>
              handleInputChange("confirmPassword", value)
            }
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (form.password === form.confirmPassword) {
                console.log("====================================");
                console.log("input name: ", form.name);
                console.log("input email: ", form.email);
                console.log("input password: ", form.password);
                console.log("====================================");
                setForm(initialFormState);
              } else {
                Alert.alert(
                  "Error",
                  "Passwords do not match. Please try again."
                );
                console.log("User given different password and confirm password");
                // setForm(initialFormState);

              }
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black background for text readability
    padding: 20,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "black",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
