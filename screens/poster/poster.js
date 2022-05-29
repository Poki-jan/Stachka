import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { Header } from "../../templates/header.jsx";
import { PosterItem } from "../../templates/poster.jsx";

function Posters(id) 
{
  var posterItem = []
  for (let index = 0; index < 8; index++) 
  {
   posterItem.push(<PosterItem key={posterItem.toString()} image="https://stachka-oz.ru/wp-content/uploads/2022/02/anons_1200-jazz-rocks.png" name="АННА БУТУРЛИНА С ПРОГРАММОЙ «JAZZ ROCKS»" price="1100"/>)
    
  }
  return(posterItem)
}

export const Poster = () =>  {

  return (
    
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <Header text="Афиша" image='https://stachka-oz.ru/wp-content/uploads/2022/02/takos-ili-tako.jpg'/>

        {/* Рабочая область */}
          <View style={styles.work}>
            {Posters()}
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