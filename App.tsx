import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Delivery } from './screens/delivery/delivery.js';
import { Rent } from './screens/rent/rent.js';
import { Poster } from './screens/poster/poster.js';
import { OzHub } from './screens/ozhub.js';
import { SvgProfile } from './svg/svgProfile';
import { SvgPoster } from './svg/svgPoster';
import { SvgRent } from './svg/svgRent';
import { SvgDelivery } from './svg/svgDelivery.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeliveryItem } from './screens/delivery/deliveryItem';

const DeliveryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DeliveryStackNav() {
  return(
  <DeliveryStack.Navigator initialRouteName='Delivery' screenOptions={{headerShown: false}}>
        <DeliveryStack.Screen name="detail_item" component={DeliveryItem}></DeliveryStack.Screen>
        <DeliveryStack.Screen name="Delivery" component={Delivery}></DeliveryStack.Screen>
      </DeliveryStack.Navigator>
  )
}

export default function App() {

  return (
    
    <NavigationContainer>

      <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
         <Tab.Screen name="Главная" options={{headerShown: false, tabBarIcon: () => <SvgProfile/>}} component={OzHub} /> 
         <Tab.Screen name="Доставка" options={{headerShown: false, tabBarIcon: () => <SvgDelivery/>}} component={DeliveryStackNav} />
        <Tab.Screen name="Аренда" options={{headerShown: false, tabBarIcon: () => <SvgRent/>}} component={Rent} />
        <Tab.Screen name="Афиша" options={{headerShown: false, tabBarIcon: () => <SvgPoster/>}} component={Poster}/>
       
        <Tab.Screen name="Меню" options={{headerShown: false, tabBarIcon: () => <SvgProfile/>}} component={OzHub} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}