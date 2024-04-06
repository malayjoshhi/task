import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'

export default function Backgr({children}) {
  return (
    <View>
      <ImageBackground source={require('../assets/onboarding3.png')} style={{width: '100%', height: '100%'}}/>
    <View>
        {children}
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({})