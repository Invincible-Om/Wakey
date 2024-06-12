import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AlarmClock from './Screens/SetAlarm';
import Settings from './Screens/Settings';
import Puzzle from './Screens/Puzzle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Snooze from './Screens/Snooze';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SetAlarm" component={AlarmClock} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();