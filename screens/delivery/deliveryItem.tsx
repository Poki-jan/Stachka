import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text,TouchableOpacity} from 'react-native';
import { Header } from '../../templates/header.jsx';
import { createNavigationContainerRef} from '@react-navigation/native';
import { navigateGoBack } from '../../navigate';

export const navigationRef1 = createNavigationContainerRef()

export function DeliveryItem (props:any)
{
  const {id, img} = props.route.params;

  return (
    
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Шапка */}
        <View>
        <Header text="Детальная" image={img}/>
        </View>

        {/* Рабочая область */}
          <View style={styles.work}>
            <Text>\_( ' - ' )_/ Тут пусто т.к. еще в разработке! ID товара :{id}</Text>
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
  },
  GoBack:
  {
    width:"100%",
    marginVertical:35,
    paddingVertical:20,
    paddingHorizontal:45,
    backgroundColor:"black",
    borderRadius:18,
  }
});