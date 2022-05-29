import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Header() {
  return (
    <View style={styles.container}>
     
       <ImageBackground style={{width: "100%", height:150}} source={{uri: "https://stachka-oz.ru/wp-content/themes/sela/images/bricks.jpg"}}>
       <LinearGradient start={{ x: -1.0, y: -1.0 }} end={{x: 0.0, y: -18.8}} locations={[0.2, 1.0]}
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      </ImageBackground>

      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
        
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 150,
    rotation: 40,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    rotation: 30,
    backgroundColor: "#000"
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
