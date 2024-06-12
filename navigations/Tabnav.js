import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AlarmClock from '../Screens/SetAlarm';
import SettingsScreen from '../Screens/Settings';

const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={AlarmClock} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}