import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

export const PosterItem = (props) =>
{
    return (
    <View style={styles.item_block_big}>
              <Image style={styles.image_item_big} source={{uri: props.image}}/>
              <Text style={styles.buy_txt}>Цена от {props.price}</Text>
              <Text numberOfLines={1} style={styles.text_name_big}>{props.name}</Text>
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
    color: "white"
  },
  item_block_big:
  {
    width: "100%", 
    padding: 7,
    borderRadius: 15
  },
  image_item_big:
  {
    width: "100%", 
    height: 160, 
    alignSelf:"center",
    borderRadius: 8
  },
  button_buy:
  {
    backgroundColor: "rgb(134, 17, 255)",
    width: "50%",
    marginVertical: 4,
    borderRadius: 5
  },
  text_name_big:
  {
    width: "100%",
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