import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { Header } from "../templates/header.jsx";

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

            <Text>Тестовое Меню, тут должен быть профиль</Text>
            
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