import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
'@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/OnBoarding';
import OnBoarding1 from './screens/OnBoarding1';
import OnBoarding2 from './screens/OnBoarding2';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Otp from './screens/Otp';
import LoginSucess from './screens/LoginSucess';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='OnBoarding' component={OnBoarding}/>
        <Stack.Screen name='OnBoarding1'component={OnBoarding1}/>
        <Stack.Screen name='OnBoarding2'component={OnBoarding2}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Forgot' component={Forgot}/>
          <Stack.Screen name='Otp' component={Otp}/>
          <Stack.Screen name='LoginSucess' component={LoginSucess}/>
          <Stack.Screen name='Signup' component={Signup}/>
          
          
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
