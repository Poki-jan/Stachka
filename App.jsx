import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { Delivery } from './screens/delivery/delivery.js';
import { Rent } from './screens/rent/rent.js';
import { Poster } from './screens/poster/poster.js';
import { OzHub } from './screens/ozhub.js';
import { SvgProfile } from './svg/svgProfile';
import { SvgPoster } from './svg/svgPoster';
import { SvgRent } from './svg/svgRent';
import { SvgDelivery } from './svg/svgDelivery.js';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeliveryItem } from './screens/delivery/deliveryItem';
import { navigationRef } from './navigate';
import { normalize } from './functions/text_normalize';

const DeliveryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DeliveryStackNav({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == "DeliveryItem"){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else {
      navigation.setOptions({tabBarStyle: {display: 'flex',  position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          left: "5%",
          width: "90%",
          height: 71,
          bottom: 26,
          backgroundColor: 'white',
          borderRadius: 16,
          shadowRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.35,
          shadowOffset: { width: 0, height: 6},
          elevation: 8}});
    }
}, [navigation, route]);
  return(
      <DeliveryStack.Navigator screenOptions={{headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
          left: "5%",
          width: "90%",
          height: 61,
          bottom: 16,
          borderTopWidth: 10,
          paddingTop: 10,
        }}}>
        <DeliveryStack.Screen name="Delivery" component={Delivery}></DeliveryStack.Screen>
        <DeliveryStack.Screen name="DeliveryItem" component={DeliveryItem}></DeliveryStack.Screen>
      </DeliveryStack.Navigator>
  )
}

export default function App() {

  return (
    
    <NavigationContainer ref={navigationRef}>

      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#8611FF',
        tabBarInactiveTintColor: '#1E1E1E',
        
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          left: "5%",
          width: "90%",
          height: 71,
          bottom: 26,
          backgroundColor: 'white',
          borderRadius: 16,
          shadowRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.35,
          shadowOffset: { width: 0, height: 6},
          elevation: 8
        },
        tabBarItemStyle: {
          height: 55,
          borderRadius: 16,
          marginTop: 8,
          marginBottom: 8
        },
        tabBarIconStyle: {
          marginTop: 'auto',
          marginBottom: 'auto'
        },
        tabBarActiveBackgroundColor: '#F8F8F8',
        tabBarLabelStyle: {
          fontSize: 8,
          fontWeight: 'bold',
          marginTop: 'auto',
          marginBottom: 6
        }
      }}>
         <Tab.Screen name="Доставка" options={{headerShown: false, tabBarIcon: () => <SvgDelivery/>}} component={DeliveryStackNav} />
        <Tab.Screen name="Аренда" options={{headerShown: false, tabBarIcon: () => <SvgRent/>}} component={Rent} />
        <Tab.Screen name="Афиша" options={{headerShown: false, tabBarIcon: () => <SvgPoster/>}} component={Poster}/>
       
        <Tab.Screen name="Меню" options={{headerShown: false, tabBarIcon: () => <SvgProfile/>}} component={OzHub} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  navbar: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'red'
  }
})