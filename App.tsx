import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Delivery } from './screens/delivery/delivery.js';
import { Rent } from './screens/rent/rent.js';
import { Poster } from './screens/poster/poster.js';
import { OzHub } from './screens/ozhub.js';
import { SvgProfile } from './svg/svgProfile';
import { SvgCart } from './svg/svgCart'
import { SvgPoster } from './svg/svgPoster';
import { SvgRent } from './svg/svgRent';
import { SvgDelivery } from './svg/svgDelivery.js';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
        <Tab.Screen name="Афиша" options={{headerShown: false, tabBarIcon: () => <SvgPoster/>}} component={Poster}/>
        <Tab.Screen name="Доставка" options={{headerShown: false, tabBarIcon: () => <SvgDelivery/>}} component={Delivery} />
        <Tab.Screen name="Аренда" options={{headerShown: false, tabBarIcon: () => <SvgRent/>}} component={Rent} />
        <Tab.Screen name="Корзина" options={{headerShown: false, tabBarIcon: () => <SvgCart/>}} component={OzHub} />
        <Tab.Screen name="Профиль" options={{headerShown: false, tabBarIcon: () => <SvgProfile/>}} component={Delivery} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}