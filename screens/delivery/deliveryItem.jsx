import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text,TouchableOpacity, ActivityIndicator} from 'react-native';
import { Header } from '../../templates/header.jsx';
import { createNavigationContainerRef} from '@react-navigation/native';
import { navigateGoBack } from '../../navigate';

export const navigationRef1 = createNavigationContainerRef()

export function DeliveryItem (props)
{
  const [deliveryItem, setMovies] = useState({});
 
    useEffect(async () => 
    {
       await fetch('https://poki-san13.000webhostapp.com/ShowItem/', {
        method: 'POST',
        body: JSON.stringify(
          {
  
          item_id: id
  
          })
        })
        .then((res) => res.json())
        .then((res) => setMovies(res))
        .catch((err) => console.error("Ошибка запроса:", err));
        
    }, []);

    const {id, img} = props.route.params;

    if (!deliveryItem[0]) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }

  return (
    
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <View>
        <Header text={deliveryItem[0].title} image={img}/>
        </View>
        {/* Рабочая область */}
          <View style={styles.work}>
            
            <Text>{deliveryItem[0].text}</Text>
            <TouchableOpacity style={styles.GoBack} onPress={() => {navigateGoBack()}}><Text style={{color:"white", textAlign:"center"}}>Назад</Text></TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex : 1,
    backgroundColor: '#fff',
  },
  work:
  {
    width:"100%", 
    paddingHorizontal:35,
  },
  GoBack:
  {
    width:"100%",
    marginVertical:35,
    paddingVertical:20,
    backgroundColor:"black",
    borderRadius:18,
  }
});