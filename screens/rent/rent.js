import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import { Header } from "../../templates/header.jsx";
import { RentItem } from '../../templates/rent item.jsx';

export const Rent= () =>  {

  return (
    
    <View style={styles.container}>
     
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <View>
        <Header text="Аренда" image='https://stachka-oz.ru/wp-content/uploads/2021/10/073.jpg'/>
        </View>

        {/* Рабочая область */}
          <View style={styles.work}>

            <View style={styles.tags_parent}> 

              <TouchableOpacity style={styles.tag}>
                  <Text>MOROZOFF-HALL</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tag}>
                  <Text>OZ HUB</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tag}>
                  <Text>Услуги</Text>
              </TouchableOpacity>
            </View>

            <RentItem image="https://stachka-oz.ru/wp-content/uploads/2019/04/1.jpg" name="Большая переговорная «Знаменка»" price="1800"/>

            <RentItem image="https://stachka-oz.ru/wp-content/uploads/2019/04/5.jpg" name="Маленькая переговорная «Цех»" price="1200"/>

            <RentItem image="https://stachka-oz.ru/wp-content/uploads/2019/04/2.jpg" name="Маленькая переговорная «Дом Советов»" price="1800"/>

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
    justifyContent: "space-evenly", 
  },
  tags_parent:
  {
    marginTop:6,
    display: 'flex',
    flexDirection: "row"
  },
  tag:
  {
    marginHorizontal: 4,
    borderWidth: 1,
    padding: 5,
    borderRadius: 12
  }
});