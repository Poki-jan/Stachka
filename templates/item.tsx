import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { createNavigationContainerRef} from '@react-navigation/native';
import { navigate } from '../navigate';

export function Item (props: any)
{
    return (
    <TouchableHighlight underlayColor={"white"} onPress={() => {navigate('DeliveryItem')}}>
      <View style={styles.item_block}>
              <Image style={styles.image_item} source={{uri: props.image}}/>

              <View style={styles.item_block_text}>
                <View style={styles.title_unit}>
                  <Text style={styles.text_name}>{props.name}</Text>
                  <Text style={styles.text_unit}>{props.unit}</Text>
                </View>
                <View style={styles.item_block_buy}>
                  <Text style={styles.buy_txt}>{props.price} ₽</Text>
                  <TouchableOpacity style={styles.button_buy}>
                    <Text style={styles.text_item}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
    </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    text_item:
    {
      textAlign: "center",
      paddingVertical: 10,
      paddingHorizontal:46,
      color: "white",
    },
    image_item:
    {
      width: 150,
      height: 150,
      borderRadius: 12,
      paddingHorizontal:6
    },
    item_block:
    {
      width: "100%", 
      marginVertical: 10,
      paddingLeft:15,
      paddingRight:17,
      borderRadius: 15,
      display:"flex", 
      flexDirection:"row", 
      justifyContent: "space-between",
      
    },
    button_buy:
    {
      backgroundColor: "black",
      marginVertical: 4,
      borderRadius: 20
    },
    text_name:
    {
      // fontFamily: 'Raleway',
      marginVertical:6,
      color: "black",
      fontSize: 15.3,
      fontWeight:"bold"
    },
    buy_txt:
    {
      color: "black",
      fontSize: 17,
      fontWeight:'normal',
      marginTop: 4,
      alignSelf:"center"
    },
    item_block_buy:
    {
      display:"flex", 
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%",
      paddingVertical:8
    },
    item_block_text:
    {
      width:"51%",
      justifyContent:"space-between"
    },
    text_unit:
    {
      fontSize: 15,
      color:"#9E9E9E"
    },
    title_unit:
    {

    }
  });