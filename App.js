import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import WelcomeScreen from './screens/welcomescreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {BottomTab} from './components/bottomtab'
import {AppDrawerNavigator} from './components/appdraw'
import UserDetails from './screens/userdetails'
import MyHeader from './components/header'
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'
import Homescreen from './screens/homescreen';
export default class App extends React.Component {
  render(){
  return (
    
    <View style={styles.container}>
    <SafeAreaProvider>
     <AppContainer />
     </SafeAreaProvider>

     
    </View>
   
  );
  }
}
const AppNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator},
  userdetails:{screen:UserDetails},
  
})
const AppContainer=createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex:1
    
   
  }
});
