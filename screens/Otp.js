import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'


export default function Otp({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.txt}>OTP</Text>
        <Text style={{color:"black",marginTop:20,fontSize:22,marginLeft:10}}>Email verification</Text>
         
        <OTPInputView
           style={{width: '80%', height: 200}}
           pinCount={4}
           // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
           // onCodeChanged = {code => { this.setState({code})}}
           autoFocusOnLoad
           codeInputFieldStyle={styles.underlineStyleBase}
           codeInputHighlightStyle={styles.underlineStyleHighLighted}
           onCodeFilled = {(code) => {
               console.log(`Code is ${code}, you are good to go!`)
           }}
        />
    


     
    <Text style={{color:"grey",fontSize:12,flexDirection:"row",alignItems:"center"}}>Didn’t receive code?</Text>
    <TouchableOpacity>
        <Text style={{color:"ornange"}} onPress={() => navigation.navigate('Rest')}>Resend</Text>
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
    txt:{
        color:"black",
        fontSize:12,
        textAlign:"center",
        fontWeight:"bold"
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
})