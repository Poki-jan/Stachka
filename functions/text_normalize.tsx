import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, TouchableHighlight, Dimensions, Platform, PixelRatio} from 'react-native';
import { createNavigationContainerRef} from '@react-navigation/native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;
  
  export function normalize(size:any) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }