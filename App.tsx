/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Task from './src/Screens/Task';
import List from './src/Screens/List';
import Home from './src/Screens/Home';
import {Provider} from 'react-redux';
import {store} from './src/store/store-root';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Task" component={Task} />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
