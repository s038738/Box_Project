import React, { useState, useReducer} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView
} from 'react-native';
import { BoxComponent } from './Components/BoxComponent';
import { ButtonComponent } from './Components/ButtonComponent';

const App = () => {
  const [index, button] = useState([]);
  const reducer = (state, action) => {
    state[action] = !state[action];
    button([]);
    return state;
  };
  const [state, dispatch] = useReducer(reducer, [true, true, true, true]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={[styles.item, { backgroundColor: 'rgb(206,235,251)' }]} >
          <View style={styles.spacer}>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => {
                return (
                  <ButtonComponent
                    title={"Button "}
                    index={item}
                    buttonPress={(buttonPress) => { dispatch(buttonPress - 1); }}>
                  </ButtonComponent>
                );
              }} />
          </View>
        </View >
        <View style={[styles.item, { backgroundColor: 'rgb(240,236,235)' }]} >
          <View style={styles.spacer}>
            <FlatList
              data={state}
              renderItem={({ index }) => {
                return (
                  <BoxComponent
                    title={"Box "}
                    index={index + 1}
                    style={state[index]
                      ? { backgroundColor: 'rgb(108,116,118)' }
                      : { backgroundColor: 'rgb(238,50,51)' }}
                  ></BoxComponent>
                );
              }} />
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
  spacer: {
    marginTop: 120,
    

  }
})

export default App;
// npm start