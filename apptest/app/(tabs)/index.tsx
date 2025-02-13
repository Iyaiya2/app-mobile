import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://www.barcelone-pas-cher.com/wp-content/uploads/2020/04/Les-boutiques-de-vêtements-chaussures-et-accessoires-à-Barcelone.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bienvenue</Text>
        <Text style={styles.subText}>
          Merci de visiter notre application. Nous espérons que vous passerez un
          bon moment ici !
        </Text>
      </View>
    </View>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  imageContainer: {
    height: height * 0.3,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subText: {
    fontSize: 20,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
});
