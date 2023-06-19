import { useEffect, useState } from 'react'; 
import Navigator from './routes/stackhakkinda' ;
import './translations/DCSLocalize';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './ekranlar/home';
import Ayarlar from './ekranlar/ayarlar';
import Semboller from './ekranlar/hakkinda';
import Sembolutani from './ekranlar/sembolutani';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import {assignTokenHeader, initializeAxios} from './config/axios-config';

const Stack = createStackNavigator();



const App = () => {

   // Use this to initialize everything regarding app services
   const token = useSelector((state) => state.auth.token);

   useEffect(() => {
     // This runs only once on app open
     initializeAxios();
     if (!token) {
       // Auth user by your provider
     }
   }, []);
 
   useEffect(() => {
     // This runs on token change
     if (token) {
       assignTokenHeader(token);
     }
   }, [token]);

  


    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="sembolutani" component={Sembolutani} />
          <Stack.Screen name="Ayarlar" component={Ayarlar} />
          <Stack.Screen name="Semboller" component={Semboller} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


export default App;