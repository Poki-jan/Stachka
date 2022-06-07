import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { Header } from "../templates/header.jsx";
import { Item } from "../templates/item.tsx";
import { PosterItem } from "../templates/poster.jsx";

export const OzHub = () =>  {

  return (
    
    <View style={styles.container}>
     
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <View>
          <Header text="Главная" image='https://stachka-oz.ru/wp-content/uploads/2021/10/073.jpg'/>
        </View>

        {/* Рабочая область */}
          <View style={styles.work}>

            <Item image="https://stachka-oz.ru/wp-content/uploads/2021/10/burger-s-vishnej.jpg" name="БУРГЕР С ВИШНЕЙ С ПРОВАНСКИМИ ТРАВАМИ И БЕКОНОМ" price="378"/>

            <Item image="https://stachka-oz.ru/wp-content/uploads/2021/10/burger-s-vishnej.jpg" name="БУРГЕР С ВИШНЕЙ С ПРОВАНСКИМИ ТРАВАМИ И БЕКОНОМ" price="378"/>

            <PosterItem image="https://stachka-oz.ru/wp-content/uploads/2022/02/anons_1200-jazz-rocks.png" name="АННА БУТУРЛИНА С ПРОГРАММОЙ «JAZZ ROCKS»" price="1100"/>
            
            <Item image="https://stachka-oz.ru/wp-content/uploads/2021/10/burger-s-vishnej.jpg" name="БУРГЕР С ВИШНЕЙ С ПРОВАНСКИМИ ТРАВАМИ И БЕКОНОМ" price="378"/>

            <Item image="https://stachka-oz.ru/wp-content/uploads/2021/10/burger-s-vishnej.jpg" name="БУРГЕР С ВИШНЕЙ С ПРОВАНСКИМИ ТРАВАМИ И БЕКОНОМ" price="378"/>

            <PosterItem image="https://stachka-oz.ru/wp-content/uploads/2022/02/anons_1200-jazz-rocks.png" name="АННА БУТУРЛИНА С ПРОГРАММОЙ «JAZZ ROCKS»" price="1100"/>
            
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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