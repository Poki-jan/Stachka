import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { navigate } from '../navigate';
import { normalize } from '../functions/text_normalize'; 
import { Trash } from '../functions/Trash';

export function Item (props: any)
{
  const [quantity, setQuantity] = useState(0);

    const arrTrash = new Trash;
    return (
    <TouchableHighlight underlayColor={"white"} onPress={() => {navigate('DeliveryItem', {id:props.id, img:props.image})}}>
      <View style={styles.item_block}>
        <Text style={{position:"absolute", marginHorizontal:0, zIndex:1, backgroundColor:"black", color:"white", paddingHorizontal:3, borderRadius:12}}>
          {quantity}
        </Text>
        <Image style={styles.image_item} source={{uri: props.image}}/>

        <View style={styles.item_block_text}>
          <View style={styles.title_unit}>
            <Text style={styles.text_name}>{props.name}</Text>
            <Text style={styles.text_unit}>{props.unit}</Text>
          </View>
          <View style={styles.item_block_buy}>
            <Text style={styles.buy_txt}>{props.price} ₽</Text>
            <TouchableOpacity onPress={()=>{setQuantity(arrTrash.AddTrash(props.id))}} style={styles.button_buy}>
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
      color: "white",
      fontWeight: "bold",
      fontSize: normalize(18)
    },
    image_item:
    {
      borderRadius: 12,
      paddingHorizontal:6,
      aspectRatio: 1/1.1,
      flex: 1.4,
    },
    item_block:
    {
      position: "relative", 
      width: "100%", 
      marginVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 15,
      display:"flex",
      flexDirection:"row", 
      
      
    },
    button_buy:
    {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "black",
      marginVertical: 4,
      borderRadius: 12,
      height: 42,
      flex: 1,
      aspectRatio: 2/1
    },
    text_name:
    {
      // fontFamily: 'Raleway',
      marginVertical:6,
      color: "black",
      fontSize: normalize(20),
      fontWeight: "bold"
    },
    buy_txt:
    {
      color: "black",
      fontSize: 22,
      fontWeight:'bold',
      marginTop: 4,
      alignSelf:"center",
      flex: 1
    },
    item_block_buy:
    {
      display:"flex", 
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%",
      paddingTop:8
    },
    item_block_text:
    {
      flex: 2,
      paddingLeft: 13,
      justifyContent:"space-between"
    },
    text_unit:
    {
      fontSize: normalize(14),
      color:"#9E9E9E",
      fontWeight: "normal"
    },
    title_unit:
    {

    }
  });