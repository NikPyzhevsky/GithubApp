import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ROUTES} from './types';
import {DarkTheme} from './constants';
import { UserListScreen } from "../screens";
import { UserDetailsScreen } from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName={ROUTES.EVENTS_LIST}>
        <Stack.Screen name={ROUTES.EVENTS_LIST} component={UserListScreen} />
        <Stack.Screen
          name={ROUTES.EVENT_DETAILS}
          component={UserDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
