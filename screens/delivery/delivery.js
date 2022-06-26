import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import { Item } from '../../templates/item.tsx'; 
import { Header } from '../../templates/header.jsx';

function Deliverys(img, name, price, unit, id) { 
  var deliverysItem = [];
  for (let index = 0; index < 4; index++) {
    deliverysItem.push(<Item key={deliverysItem.toString()} unit={unit} image={img} name={name} price={price} id={id}/>)
  }
  return deliverysItem;
}

export const Delivery = () => 
{
  const [delivery, setMovies] = useState({});
  
  useEffect(async () => 
  {
  	await fetch("https://poki-san13.000webhostapp.com/ShowAllList/")
	  .then((res) => res.json())
	  .then((res) => setMovies(res))
	  .catch((err) => console.error("Ошибка запроса:", err));
  }, []);

  const DeliverysItemAll = () =>
  {
    var items = [];
    for (let i = 0; i < delivery.length; i++) 
    {
      items.push(Deliverys(delivery[i].img,delivery[i].title,delivery[i].price, delivery[i].unit, delivery[i].id))
    }
    return  items
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
    flexDirection:"column", 
    justifyContent: "space-evenly", 
    flexWrap:"wrap"
  },
});