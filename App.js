import React, { useEffect, useState } from 'react'; 
import Navigator from './routes/stackhakkinda' ;
import './translations/DCSLocalize';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './ekranlar/home';
import Ayarlar from './ekranlar/ayarlar';
import Hakkinda from './ekranlar/hakkinda';
import Sembolutani from './ekranlar/sembolutani';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();



export default function App(){

  



  
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="sembolutani" component={Sembolutani} />
          <Stack.Screen name="Ayarlar" component={Ayarlar} />
          <Stack.Screen name="Hakkinda" component={Hakkinda} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


