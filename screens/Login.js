import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,SafeAreaView } from 'react-native'
import React, { useCallback, useState } from 'react'


export default function Login({navigation}) {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');  
              
           
            
  return (
    <SafeAreaView >
    <View>
    <Image source={require("../assets/title.png")} style={styles.contanier}/>

   <Text style={{color:"black",marginTop:20,fontSize:12,marginLeft:10}}>Email Address</Text>
    <TextInput style={[styles.input,styles.inputUsername]}
       placeholder='Enter Email'
       autoCapitalize='none'
       keyboardType='email-address'
       textContentType='emailAddress'
       autoFocus={true}
       placeholderTextColor="#cdcdcf"
       value={email}
       onChangeText={(actualData) => setEmail(actualData)}
       
    />

    <Text style={{color:"black",fontSize:12,marginLeft:10}}>Password</Text>
    <TextInput style={[styles.input,styles.inputPassword]}
       placeholder='Password'
       autoCapitalize='none'
       keyboardType='default'
       secureTextEntry={true}
       textContentType='password'
       placeholderTextColor="#cdcdcf"
       value={password}
       onChangeText={(actualData) => setPassword(actualData)}
       
    />

<TouchableOpacity style={styles.link}>
   <Text style={styles.linkText} onPress={() => navigation.navigate('Forgot')}>Forgot password?</Text>
</TouchableOpacity>
   <TouchableOpacity>
   <Text style={styles.buttonText} onPress={() => navigation.navigate('LoginSucess')}>Sign In</Text>
</TouchableOpacity>

<Image source={require('../assets/or.png')} marginStart={10} marginTop={7}/>

         <TouchableOpacity style={styles.google}>
         <Image  source={require('../assets/google.png')}/>
       </TouchableOpacity>

       <Text style={styles.RegText}>
           Don't have an accout? <Text  onPress={() => navigation.navigate('Signup')}  style={styles.color}>Register</Text>
       </Text>

       
   </View>

   </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    contanier :{
        marginTop:50,
        resizeMode:'contain',
        marginLeft:18,
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
    inputPassword:{
      borderRadius: 6,
            
    },
    button:{
        height: 42,
    borderRadius: 30,
    backgroundColor: "orange",
    justifyContent: "center",
    marginVertical: 15,
    marginLeft:12,
    marginRight:12,
    
    },
    buttonText:{
        color:'#ffff',
        textAlign:"center",
        fontSize:13,
    },
    link:{
        paddingVertical:8,
    },
    linkText:{
        fontSize: 12,
        color:'orange',
        textAlign:'right',
        paddingTop:-0.25,
        marginRight:10,
    },
    RegText:{
      color:'black',
      textAlign:'center',
      paddingTop:20,
    },
    color:{
      color:'orange'
    },
    google:{
      padding:15,
    },
    

})