import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { DeliverysItemAll } from './functions/DeliveryFunc'; 
import { Header } from '../../templates/header';


export const Delivery = () => 
{
  const [delivery, setDelivery] = useState({});
  
  useEffect(async () => 
  {
  	await fetch("https://poki-san13.000webhostapp.com/ShowAllList/")
	  .then((res) => res.json())
	  .then((res) => setDelivery(res))
	  .catch((err) => console.error("Ошибка запроса:", err));
  }, []);

  return (
    
    <View style={styles.container}>
      
      <StatusBar barStyle="light-content" translucent={true} backgroundColor='transparent'/>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <View>
        
        <Header text="Фуд-холл" image='https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg' trash="нет продуктов в корзине"/>
        </View>

        {/* Рабочая область */}
          <View style={styles.work}>
            {
              DeliverysItemAll(delivery)
            }
            {/* <Item unit="100г" image="https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg" name="Тест Бургер" price="100" id="1"/>
            <Item unit="100г" image="https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg" name="Тест Бургер" price="100" id="1"/>
            <Item unit="100г" image="https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg" name="Тест Бургер" price="100" id="1"/>
            <Item unit="100г" image="https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg" name="Тест Бургер" price="100" id="1"/> */}
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