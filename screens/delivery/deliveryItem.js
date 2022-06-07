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
        <Header text="Детальная" image='https://stachka-oz.ru/wp-content/uploads/2021/10/classic.jpg'/>
        </View>

        {/* Рабочая область */}
          <View style={styles.work}>
            <Text>\_( ' - ' )_/ Тут пусто т.к. еще в разработке!</Text>
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