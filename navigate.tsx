import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer,createNavigationContainerRef } from '@react-navigation/native';
import { DeliveryItem } from './screens/delivery/deliveryItem';

const DeliveryStack = createNativeStackNavigator()

// export const navigationRef = createNavigationContainerRef()

export const Navigator = () =>
{
    // navigationRef.navigate("detail_item");
    return(
        <NavigationContainer>
            <DeliveryStack.Navigator>
                <DeliveryStack.Screen name="detail_item" component={DeliveryItem}></DeliveryStack.Screen>
            </DeliveryStack.Navigator>
        </NavigationContainer>
    );
}