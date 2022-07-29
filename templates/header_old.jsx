import React from 'react';
import { StyleSheet, View, ImageBackground, Text} from 'react-native';



export function Header()
{
    return (
        <View>
            <ImageBackground source={require('./img/bricks.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.txt_one}>СТАЧКА</Text> 
                <Text style={styles.txt_two}>ПРОСТРАНСТВО КРЕАТИВНОГО КЛАСТЕРА</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image: 
    {
        padding: "4%"
    },
    txt_one:
    {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: "bold"
    },
    txt_two:
    {
        textAlign: 'center',
        fontSize: 10,
    }
  });
  