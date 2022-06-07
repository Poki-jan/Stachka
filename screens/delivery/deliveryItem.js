import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import { Header } from '../../templates/header.jsx';


export const DeliveryItem = () => 
{

  return (
    
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <View>
        <Header text="Фуд-холл" image='https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg' trash="нет продуктов в корзине"/>
        </View>

        {/* Рабочая область */}
          <View style={styles.work}>
            <Text>HIIII !!!!!</Text>
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