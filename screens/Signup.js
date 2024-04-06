import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  isChecked,
  setChecked,

} from "react-native";
import React, { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";


export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  isFormValid = () => {
    if (email != "" && name != "" && password != "") {
      return true;
    }
    return false;
  }

  handleSubmit = () => {
    if (isFormValid()) {
      navigation.navigate("Login");
    }
  }

  errors = () => {
    if (email == "") {
      return "Email cannot be empty";
    } else if (name == "") {
      return "Name cannot be empty";
    } else if (password == "") {
      return "Password cannot be empty";
    }
  }  

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require('../assets/registration.png')}
          style={styles.contanier}
        />
        <Text
          style={{
            color: "black",
            marginTop: 20,
            fontSize: 12,
            marginLeft: 10,
          }}
        >
          Email Address
        </Text>
        <TextInput
          style={[styles.input, styles.inputUsername]}
          placeholder="Enter Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          placeholderTextColor="#cdcdcf"
          value={email} 
          onChangeText={setEmail} 
        />

        <Text style={{ color: "black", fontSize: 12, marginLeft: 10 }}>
          User Name
        </Text>
        <TextInput
          style={[styles.input, styles.inputPassword]}
          placeholder="User Name"
          autoCapitalize="none"
          keyboardType="default"
          textContentType="username"
          placeholderTextColor="#cdcdcf"
          value={name} 
          onChangeText={setName} 
        />

        <Text style={{ color: "black", fontSize: 12, marginLeft: 10 }}>
          Password
        </Text>
        <TextInput
          style={[styles.input, styles.inputPassword]}
          placeholder="Password"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          textContentType="password"
          placeholderTextColor="#cdcdcf"
          value={password} 
          onChangeText={setPassword} 
        />

        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "orange" : undefined}
        />

        <Text style={{ fontSize: 12 }}>
          I Agree with{" "}
          <Text style={{ color: "orange" }}>Terms of Service </Text>and{" "}
          <Text style={{ color: "orange" }}>Privacy Policy</Text>
        </Text>

        <TouchableOpacity        >
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Register</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/or.png")}
          marginStart={10}
          marginTop={7}
        />

        <TouchableOpacity style={styles.google}>
          <Image source={require("../assets/google.png")} />
        </TouchableOpacity>

        <Text style={styles.RegText}>
          Have an accout?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.color}
          >
            Sign In
          </Text>
        </Text>

          
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    marginTop: 50,
    resizeMode: "contain",
    marginLeft: 8,
  },

  input: {
    margin: 10,
    fontSize: 13,
    color: "#333333",
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#cdcdcf",
  },
  inputUsername: {
    borderRadius: 6,
    borderBottomWidth: 1,
  },
  inputPassword: {
    borderRadius: 6,
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
  RegText: {
    color: "black",
    textAlign: "center",
    paddingTop: 20,
  },
  color: {
    color: "orange",
  },
  google: {
    padding: 10,
  },
});
