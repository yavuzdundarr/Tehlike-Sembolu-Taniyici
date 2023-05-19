import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const localimage =  require ('../Images/arka.png');

export default function Hakkinda() {
    return(
        <ImageBackground source={localimage}  style={styles.image}>
         <View style={styles.container}>
         <View style={styles.yazi}>
            <LinearGradient
            colors={['white', 'pink']}
            style= {styles.background}
            start={{x: 0.5, y: 0 }}
            end={{x: 0.5, y: 1}}
     />
        <Text style={styles.textyazi}> About screen </Text>
        </View>
        </View>
        </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    image: {
        flex: 1,
    },    
    textyazi: {
        color: 'white',
    },
    background: {
        borderRadius:70,
        height: 550,
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        bottom: 0,
    },    
}
);