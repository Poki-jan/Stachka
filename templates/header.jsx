import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { normalize } from '../functions/text_normalize'; 

export const Header = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: props.image}} resizeMode="cover" style={styles.image}>
        <LinearGradient 
          // Background Linear Gradient
          colors={['rgba(255,255,255,1)', 'transparent']}
          style={styles.background} start={{ x: -0.2, y: 0.66}} end={{x: -0.1, y: -0.1}}/>
          <View style={{ display: 'flex', flexDirection:"row"}}>
            <Text style={styles.text}>{props.text}</Text>
            {/* <Text style={styles.trash}>{props.trash}</Text> */}
          </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    height: 311,
  },
  background: 
  {
    position: 'absolute', 
    left: 0,
    right: 0,
    top: 0,
    height: 311,
  },
  image: 
  {
    width:"100%",
    height:"97%",
  },
  text: 
  {
    paddingTop: 220,
    paddingLeft: 14,
    fontSize: normalize(46),
    fontWeight: "bold"
  },
  trash: 
  {
    paddingTop:290,
    paddingLeft:13,
    fontSize:16,
    width:"35%",
  }
});
