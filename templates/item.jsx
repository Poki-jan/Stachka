import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';


export const Item = (props) =>
{
    return (
    <View style={styles.item_block}>
              <Image style={styles.image_item} source={{uri: props.image}}/>
              <Text style={styles.buy_txt}>Цена: {props.price}</Text>
              <Text numberOfLines={1} style={styles.text_name}>{props.name}</Text>
              <TouchableOpacity style={styles.button_buy}>
                <Text style={styles.text_item}>Купить</Text>
              </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    text_item:
    {
      textAlign: "center",
      padding: 4,
      color: "white",
    },
    image_item:
    {
      width: "100%", 
      height: 165, 
      alignSelf:"center",
      borderRadius: 8
    },
    item_block:
    {
      width: "47%", 
      marginVertical: 6,
      marginHorizontal: 5,
      borderRadius: 15
    },
    button_buy:
    {
      backgroundColor: "rgb(134, 17, 255)",
      width: "50%",
      marginVertical: 4,
      borderRadius: 5
    },
    text_name:
    {
      width: 165,
      marginVertical:5,
      color: "black",
      fontSize: 13
    },
    buy_txt:
    {
      color: "black",
      paddingHorizontal: 2,
      fontSize:16,
      fontWeight:'bold',
      marginTop: 4
    }
  });