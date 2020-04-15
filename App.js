import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormSubmitted from './components/FormSubmitted';
import HeaderLine from './components/HeaderLine';
import InputForm from './components/InputForm';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const nextHandler = ()  => navigation.navigate('Submitted Screen');

  return (
    <View style={styles.screen}>
      <View style={styles.mainContentContainer}>
        <HeaderLine />
        <InputForm nextHandler={nextHandler}/>
      </View>  
    </View>
  );
}

function FormSubmittedScreen({ navigation }) {
  return <FormSubmitted />
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name=" Home" component={HomeScreen} />
        <Stack.Screen name="Submitted Screen" component={FormSubmittedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#20263f',
    paddingTop: 120,
    fontFamily: 'Roboto',
    justifyContent: 'flex-start',
  },
  mainContentContainer: {
    width: '95%',
  }
});
