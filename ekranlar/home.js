import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Switch } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Translator from './ayarlar';
import '../translations/DCSLocalize';
import {useTranslation} from 'react-i18next';
import React, { useEffect, useState } from 'react'; 
import { Audio } from 'expo-av';
import Ayarlar from '../ekranlar/ayarlar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toggleSes } from '../ekranlar/ayarlar';
import { Sound } from 'expo-av/build/Audio';

const localimage =  require ('../Images/arka.png');



export default function Home ({ navigation }) {

 
const [myBoolean, setMyBoolean] = useState(false);
const isFocused = useIsFocused();

useEffect(() => {
  async function loadIsEnabled() {
    const value = await AsyncStorage.getItem('sesAcik');
    setMyBoolean(value === 'true');
  }
  loadIsEnabled();
}, [isFocused]);

const toggleSes = async () => {
  const newValue = !myBoolean;
  setMyBoolean(newValue);
  await AsyncStorage.setItem('sesAcik', newValue.toString());
};

  
  handlePlaySound = async () => {
    const soundObj = new Audio.Sound()
    
    try {
      await soundObj.loadAsync(require('../assets/ses/button.mp3'))
      if (myBoolean === true ){
      await soundObj.playAsync()
      .then(async playbackStatus => {
        setTimeout(() => {
          soundObj.unloadAsync()
        }, playbackStatus.playableDurationMillis)
      })
    .catch(error => {
      console.log(error)
    })}
    else{ console.log('Error toggling sound')}
  } catch(error){
    console.log(error)
  }
}
  
  const { t, i18n } = useTranslation();
  const selectLanguageCode = i18n.language;

 
  const pressHandler = () => {
    navigation.navigate('Hakkinda');
  }
 
  return(

  <ImageBackground source={localimage}  style={styles.image}>
   <View style={styles.container}>
    
    <View style={styles.ustyazi}>
     <LinearGradient  
     colors={['#485996', '#391e5d']}
     style= {styles.background1}
     start={{x: 0.5, y: 0 }}
     end={{x: 0.5, y: 1.5}}
     />
      <Text style = {styles.ustyazitext}>{t('common:ustyazitext')}</Text>
   </View> 

   <TouchableOpacity style={styles.page1} onPress={() => {navigation.navigate('sembolutani');
    if (myBoolean) {
      this.handlePlaySound();}

  }}>
     <LinearGradient 
     colors={['red', 'pink']}
     style= {styles.background2}
     start={{x: 0.5, y: 0 }}
     end={{x: 0.5, y: 1}}
     />
      <Text style={styles.boldText1}>{t('common:boldText1')} </Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.page2} onPress={() => {navigation.navigate('Semboller');
    if (myBoolean) {
      this.handlePlaySound();}

  }}>
    <LinearGradient 
     colors={['red', 'pink']}
     style= {styles.background3}
     start={{x: 0.5, y: 0 }}
     end={{x: 0.5, y: 1}}
     />
     <Text style={styles.boldText2}>{t('common:boldText2')} </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.page3} onPress={() => {navigation.navigate('Ayarlar');
     if (myBoolean) {
      this.handlePlaySound();}
   }}>
     
     <LinearGradient 
     colors={['red', 'pink']}
     style= {styles.background4}
     start={{x: 0.5, y: 0 }}
     end={{x: 0.5, y: 1}}
     />
     <Text style={styles.boldText3}> {t('common:boldText3')} </Text>
     </TouchableOpacity>
    
    </View>  
   </ImageBackground> 
 );  

   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    image: {
      flex: 1,
      justifyContent: 'center',

  },
  ustyazi: {
    top: 25,
    padding: 20,
    marginHorizontal: 30,
    
  },
  background1: {
   borderWidth: 6,
   borderColor: '#391e5d',
   borderRadius:60,
   height: 120,
   alignItems: 'center',
   position: 'absolute',
   top: 40,
   left: 0,
   right: 0,
   bottom: 0,
  },

  ustyazitext: {
    top: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textAlignVertical: 'center',
    fontSize: 27,
  },
  page1: {
    textAlignVertical: 'center',
    padding: 50,
    marginHorizontal:30,
    top: 140,
    marginVertical:4,
    borderRadius:20,
  },
  background2: {
    borderWidth: 6,
    borderColor: '#391e5d',
    borderRadius:60,
    height: 100,
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
   },
  boldText1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    bottom:5,
    fontSize: 22,
  },
  page2: {
    textAlignVertical: 'center',
    padding: 50,
    marginHorizontal: 30,
    top: 160,
    marginVertical: 4,
    borderRadius:20,
  },
  background3: {
    borderWidth: 6,
    borderColor: '#391e5d',
    borderRadius:60,
    height: 100,
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
   },
  boldText2: {
    color: 'white',
    fontWeight: 'bold',
    bottom:5,
    textAlign: 'center',
    fontSize: 22,
  },
  page3: {
    textAlignVertical: 'center',
    padding: 50,
    marginHorizontal: 30,
    top: 180,
    marginVertical: 4,
    borderRadius:20,
    },
    background4: {
      borderWidth: 6,
      borderColor: '#391e5d',
      borderRadius:60,
      height: 100,
      alignItems: 'center',
      position: 'absolute',
      top: 10,
      left: 0,
      right: 0,
      bottom: 0,
     },
  boldText3: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    bottom:5,
    textAlign: 'center',
    textAlignVertical: 'center',
}
});

