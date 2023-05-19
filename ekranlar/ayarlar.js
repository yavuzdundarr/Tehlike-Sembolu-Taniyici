import React from 'react';
import { StyleSheet, Text, View, Button, Switch, ImageBackground } from 'react-native';
import * as Localization from 'expo-localization';
import {useTranslation} from 'react-i18next';
import { Pressable } from 'react-native';
import '../translations/DCSLocalize';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const localimage =  require ('../Images/arka.png');

export default function Ayarlar  ({ navigation }) {


const [sesAcik, setSesAcik] = useState(true)

    
  useEffect(() => {
    async function loadIsEnabled() {
      const value = await AsyncStorage.getItem('sesAcik');
      setSesAcik(value === 'true');
    }
    loadIsEnabled();
  }, []);

  const toggleSes = async () => {
    const newValue = !sesAcik;
    setSesAcik(newValue);
    await AsyncStorage.setItem('sesAcik', newValue.toString());
  };





    const { t, i18n } = useTranslation();
    const selectLanguageCode = i18n.language;
  


    const LANGUAGES = [
        {code: 'tr', label: 'Turkce'},
        {code: 'en', label: 'English'},
    ];

    const setLanguage = (code) => {
        return i18n.changeLanguage(code);
    }





    return(
        
        <ImageBackground source={localimage}  style={styles.image}>
        <View style = {styles.container}>
        <LinearGradient
            colors={['white', 'pink']}
            style= {styles.background}
            start={{x: 0.5, y: 0 }}
            end={{x: 0.5, y: 1}}
     />
            <Text style={styles.textayarlar}>{t('common:ayarlar')} </Text> 
            {LANGUAGES.map((language)=>{
              const selecetedLanguage = language.code === selectLanguageCode; 
                return (
                <Pressable 
                style={{ Margintop: 10  }}
                disabled={selecetedLanguage}
                onPress={() => setLanguage(language.code)}
                key={language.code}             
                >                   
                   <Text style={styles.ceviri}>{language.label}</Text>
                </Pressable>
                 );
                 })} 

    
<Switch
      value={sesAcik}
      onValueChange={toggleSes}
    />
     

        </View>
        </ImageBackground>
    )
    };


const styles = StyleSheet.create({
    container: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
    },
    textayarlar: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        top: 10,
    },
    ceviri: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        top: 10,
    },
    background: {
        borderRadius:70,
        height: 540,
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        left: 25,
        right: 25,
        bottom: 0,
    }
});

