import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

import BookShelf from './pages/bookshelf';
import Settings from './pages/settings/index';
import Detail from './pages/detail';

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={BookShelf}
        options={{headerTitle: '书架', title: '书架', headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: '设置', title: '设置'}}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
export default function BookClass() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
