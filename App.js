import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer, useEffect, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';

import { BoxComponent } from './Components/BoxComponent';
import { ButtonComponent } from './Components/ButtonComponent';

var buttons = {
  'Button1' : {
    name: 'Button 1',
  }, 
  'Button2' : {
    name: 'Button 2'
  }, 
  'Button3' : {
    name: 'Button 3'
  }, 
  'Button4' : {
    name: 'Button 4'
  }, 
}

var boxes = {
  'Box1' : {
    name: 'Box 1',
  }, 
  'Box2' : {
    name: 'Box 2'
  }, 
  'Box3' : {
    name: 'Box 3'
  }, 
  'Box4' : {
    name: 'Box 4'
  }, 
}




const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={[styles.item, { backgroundColor: 'rgb(206,235,251)' }]} >
          <View style={styles.spacer}>
              <FlatList
              data={Object.keys(buttons)}
              renderItem={({ item }) => <ButtonComponent title={buttons[item].name}></ButtonComponent>}
              />
          </View>
        </View >
        <View style={[styles.item, { backgroundColor: 'rgb(240,236,235)' }]} >
        <View style={styles.spacer}>
        <FlatList
              data={Object.keys(boxes)}
              renderItem={({ item }) => <BoxComponent title={boxes[item].name}></BoxComponent>}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
  },
  item: {
    marginTop: -100,
      width: '50%',
      backgroundColor: 'green',
      height: 1000

  },
  text: {
      color: 'white'
  },
  spacer: {
    marginTop: 100
  }
})

export default App;
// npm start