import { StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'

export default function Forgot({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{color:"black",marginTop:20,fontSize:22,marginLeft:10}}>Forgot password?</Text>
        <Text style={{color:"grey",fontSize:12,marginLeft:10}}>Enter your email address and we’ll send you confirmation code to reset your password</Text>

      <Text style={{color:"black",marginTop:20,fontSize:12,marginLeft:10}}>Email Address</Text>
     <TextInput style={[styles.input,styles.inputUsername]}
        placeholder='Enter Email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        placeholderTextColor="#cdcdcf"
     />

<TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText} onPress={() => navigation.navigate('Otp')}>Continue</Text>
</TouchableOpacity>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        resizeMode:'contain',
         marginLeft:8,
        backgroundColor: '#fff',
        
      },
    input:{
        margin:10,
        fontSize:13,
        color:"#333333",
        height:40,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor: "#cdcdcf",
    },
    inputUsername:{
        borderRadius: 6,
            borderBottomWidth: 1,
    
    },
    button:{
        height: 42,
    borderRadius: 30,
    backgroundColor: "orange",
    justifyContent: "center",
    marginVertical: 15,
    marginLeft:12,
    marginRight:12,
    marginTop:70,
    
    },
    buttonText:{
        color:'#ffff',
        textAlign:"center",
        fontSize:13,
    },

})