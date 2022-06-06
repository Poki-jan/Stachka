import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { DeliveryItem } from './screens/delivery/deliveryItem';

const DeliveryStack = createNativeStackNavigator()

export const Navigator = () =>

{
    return(
        <NavigationContainer>
            <DeliveryStack.Navigator>
                <DeliveryStack.Screen name="detail_item" component={DeliveryItem}></DeliveryStack.Screen>
            </DeliveryStack.Navigator>
        </NavigationContainer>
    );
}