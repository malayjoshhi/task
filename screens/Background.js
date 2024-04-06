import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

export default function Background({children}) {
  return (
    <View>
      <ImageBackground source={require('../assets/onboarding.png')} style={{width: '100%', height: '100%'}}/>
    <View>
        {children}
    </View>
    
    </View>
    
  )
}

const styles = StyleSheet.create({})