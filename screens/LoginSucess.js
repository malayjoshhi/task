import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";

export default function LoginSucess({ navigation }) {
  return (
    <Background>
      <View
        style={{
          elevation: 10,
          borderRadius: 20,
          backgroundColor: "white",
          paddingHorizontal: 15,
          paddingVertical: 15,
          marginLeft: 5,
          marginRight: 5,
          marginTop: -400,
        }}
      >
        
        <Image source={require("../assets/img.png")} style={styles.imc} />
        <Text
          style={{
            color: "black",
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Login Sucessful
        </Text>
        <Text style={{ color: "grey", fontSize: 10, textAlign: "center" }}>
          An event has been created and the invite has been sent to you on mail.
        </Text>
        <TouchableOpacity style={styles.button}>
          
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Login")}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    width: 370,
  },
  imc: {
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    height: 42,
    borderRadius: 30,
    backgroundColor: "orange",
    justifyContent: "center",
    marginVertical: 15,
    marginLeft: 12,
    marginRight: 12,
  },
  buttonText: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 13,
  },
});
