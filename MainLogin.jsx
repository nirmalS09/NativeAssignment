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
} from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;

export default function MainLogin() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <Text style={styles.heading}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={(aq) => setEmail(aq)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("====================================");
              console.log("input email", email);
              console.log("input password", password);
              console.log("====================================");
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Forgot Password?</Text>
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
  link: {
    marginTop: 15,
  },
  linkText: {
    color: "#3498db",
    fontSize: 16,
  },
});
