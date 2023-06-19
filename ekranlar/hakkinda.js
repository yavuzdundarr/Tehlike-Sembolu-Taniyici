import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Translator from './ayarlar';
import '../translations/DCSLocalize';
import {useTranslation} from 'react-i18next';


const localimage =  require ('../Images/arka.png');

export default function Semboller() {


    const { t, i18n } = useTranslation();
    const selectLanguageCode = i18n.language;



    return(
        <ScrollView style={{ height: 1000, flex:3 }}>
        <ImageBackground source={localimage}  style={styles.image}>
         <View style={styles.container}>
            <LinearGradient
            colors={['white', 'pink']}
            style= {styles.background}
            start={{x: 0.5, y: 0 }}
            end={{x: 0.5, y: 1}}
     />
        <Text style={styles.textyazi1}>{t('common:hakkindayazi1')} </Text>
        <Image
        source={require('../Images/unlem.png')}
        style={{width: 100, height: 100, top: 30, left: 130 }} />
        <Text style={styles.textyazi2}>{t('common:hakkindayazi2')} </Text>
        <Image
        source={require('../Images/yakici.png')}
        style={{width: 100, height: 100, top: 20, left: 130 }} />
        <Text style={styles.textyazi3}>{t('common:hakkindayazi3')} </Text>
        <Image
        source={require('../Images/asindirici.png')}
        style={{width: 100, height: 100, top: 20, left: 130 }} />
        <Text style={styles.textyazi4}>{t('common:hakkindayazi4')} </Text>
        <Image
        source={require('../Images/cevreyezararli.png')}
        style={{width: 100, height: 100, top: 65, left: 130 }} />
        <Text style={styles.textyazi5}>{t('common:hakkindayazi5')} </Text>
        <Image
        source={require('../Images/solunum.png')}
        style={{width: 100, height: 100, top: 110, left: 130 }} />
        </View>
        </ImageBackground> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        height: 1250,
    },
    image: {
        flex: 1,
    },    
    yazi: {
        flex: 1,
    },
    textyazi1: {
        color: 'black',
        top: 10,
        left: 10,
    },
    textyazi2: {
        marginTop: 55,
        padding: 5,
    },
    textyazi3: {
        marginTop: 43,
        padding: 5,
    },
    textyazi4: {
        top: 43,
        padding: 5,
    },
    textyazi5:{
        top: 90,
        padding: 5,
    },
    background: {
        borderRadius:50,
        flex:3,
        height:'100%',
        alignItems: 'center',
        position: 'absolute',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#391e5d',
        bottom: 10,
        top: 10,
        left: 20,
        right: 20,
        
    },    
}
);