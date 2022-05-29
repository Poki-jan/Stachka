import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: props.image}} resizeMode="cover" style={styles.image}>
        <LinearGradient 
          // Background Linear Gradient
          colors={['rgba(255,255,255,0.98)', 'transparent']}
          style={styles.background} start={{ x: -0.24, y: 0.63}} end={{x: -0.1, y: -0.37}}/>
          <View style={{ display: 'flex', flexDirection:"row"}}>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.trash}>{props.trash}</Text>
          </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
  background: 
  {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 250,
  },
  image: 
  {
    width:"100%",
    height:"100%",
  },
  text: 
  {
    paddingTop:155,
    paddingLeft:11,
    fontSize:48,
  },
  trash: 
  {
    paddingTop:170,
    paddingLeft:13,
    fontSize:16,
    width:"35%",
  }
});
