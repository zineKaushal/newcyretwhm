import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar, Platform, TouchableOpacity } from 'react-native';
import Login from './screens/Login';
import Icon from 'react-native-vector-icons/Feather';

import { Homescreen } from './screens/Home';
import CardViewPage from './screens/CardView';
import Location_Transfer from './screens/Location_Transfer'
import POApproval from './screens/PO_approval_list_view'
import CycleCount from './screens/CycleCount';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
const Stack = createStackNavigator();

export default function Navigationscreen() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <SafeAreaProvider style={{ flex: 1 }} forceInset={{ top: 'never' }}>
    <NavigationContainer style={{ flex: 1 }} na>
      <StatusBar
        translucent
        backgroundColor="transparent"
        networkActivityIndicatorVisible={true}
        animated={true}
      />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false ,gestureEnabled: false }}
        />
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false ,gestureEnabled: false }}
          // options={{
          //   title: 'Location Transfer',
          //   headerStyle: {
          //     backgroundColor: '#0F2A37',
          //   },
            
          // }}
        />

        <Stack.Screen
          name="CardViewPage"
          component={CardViewPage}
          // options={{ headerShown: false ,gestureEnabled: false }}
          
        /> 
        <Stack.Screen
            name="Location_Transfer"
            component={Location_Transfer}
            // options={{headerShown: true}}
            options={{
              title: 'Location Transfer',
              headerStyle: {
                backgroundColor: '#0F2A37',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

<Stack.Screen
            name="cyclecount"
            component={CycleCount}
            // options={{headerShown: true}}
            options={{
              title: 'Cycle Count',
              headerStyle: {
                backgroundColor: '#0F2A37',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        
        <Stack.Screen
            name="Poapproval"
            component={POApproval}
            options={{headerShown: false}}
          />
          
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    // </SafeAreaView>
  );
}
