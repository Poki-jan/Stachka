import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import { Item } from '../../templates/item.jsx'; 
import { Header } from '../../templates/header.jsx';

function Deliverys(img, name, price) { 
  var deliverysItem = [];
  
  for (let index = 0; index < 8; index++) {
    deliverysItem.push(<Item key={deliverysItem.toString()} image={img} name={name} price={price}/>)
  }
  
  return deliverysItem;
}

export const Delivery = () => 
{
  const [delivery, setMovies] = useState({});
  
  useEffect(() => 
  {
  	fetch("https://poki-san13.000webhostapp.com/ShowAllList/")
	  .then((res) => res.json())
	  .then((res) => setMovies(res))
	  .catch((err) => console.error("Ошибка запроса:", err));
  }, []);

  const DeliverysItemAll = () =>
  {
    for (let i = 0; i < delivery.length; i++) 
    {
      return Deliverys(delivery[i].img,delivery[i].title,delivery[i].price)
    }
  }
  function ItemExport (title, img, price)
  {
    fetch('https://poki-san13.000webhostapp.com/InputIItem/', {
      method: 'POST',
      body: JSON.stringify({
 
        item_title : title,
 
        item_img : img,
 
        item_price : price
 
      })
 
      }).then((response) => response.json())
          .then((responseJson) => {
 
            // Showing response message coming from server after inserting records.
            console.log(responseJson);
 
          }).catch((error) => {
            console.error(error);
          });
  }

  return (
    
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <View>
        <Header text="Фуд-холл" image='https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg' trash="нет продуктов в корзине"/>
        </View>

        {/* Рабочая область */}
          <View style={styles.work}>
            {
              DeliverysItemAll()
            }
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
    display:"flex", 
    flexDirection:"row", 
    justifyContent: "space-evenly", 
    flexWrap:"wrap"
  },
});