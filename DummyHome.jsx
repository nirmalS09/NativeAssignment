import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import CustomButton from './CustomButton'; // Import CustomButton component

const window = Dimensions.get("window");
const screenHeight = window.height;

export default function DummyHome({ navigation }) {
  const marginFromTop = screenHeight * 0.1;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/bgImage.jpg")}
      >
        <View style={styles.contentContainer}>
          <Text style={[styles.heading, { marginTop: marginFromTop }]}>
            Welcome!!! Let's Shop
          </Text>
          <Image
            style={styles.logo}
            source={{
              uri: "https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg",
            }}
          />
          <Text style={styles.description}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Text>

          <View style={styles.forbtn}>
            <CustomButton 
              title="Login" 
              btnKind="rounded" 
              variant="primary" 
              size="md" 
              navigateTo="Login" 
            />
            <CustomButton 
              title="SignUp" 
              btnKind="rounded" 
              variant="secondary" 
              size="md" 
              navigateTo="Register" 
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "gold",
    textAlign: "center",
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  forbtn: {
    flexDirection: "row",
    marginTop: 20,
  },
});
