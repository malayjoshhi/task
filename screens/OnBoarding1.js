import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Backgrounds from './Backgrounds'
import { AntDesign } from '@expo/vector-icons';

export default function OnBoarding1({navigation}) {
  return (
    <Backgrounds>
       <View style={{elevation:10,borderRadius:40,backgroundColor:"orange",paddingHorizontal:15,paddingVertical:15,marginLeft:25,marginRight:25,marginTop:-400,marginBottom:25}}>
          <Text style={{color:"white",fontSize:25,textAlign:"center",fontWeight:"bold"}}>We serve{"\n"} incomparable {"\n"}delicacies</Text>
          <Text style={{color:"white",fontSize:10,textAlign:"center"}}>All the best restaurants with their top {"\n"} menu waiting for you, they cant’t wait {"\n"}for your order!!</Text>
          
       <TouchableOpacity >
        <Text style={styles.txt} onPress={() => navigation.navigate('Login')}>Skip</Text>
        </TouchableOpacity> 
        <TouchableOpacity >
        <Text style={{
color:"white",fontSize:10, marginTop:-20, marginRight:20,textAlign:"right"}} onPress={() => navigation.navigate('OnBoarding2')} > Next <AntDesign name="arrowright" size={10} color="white" style={{marginTop:-20}}/></Text>
          </TouchableOpacity>    
      </View>
    

       
    </Backgrounds>
  )
}

const styles = StyleSheet.create({
    txt:{
        color:"white",
        fontSize:10,
        marginTop:20,
        marginLeft:20,
      },
})