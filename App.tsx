import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/homeScreen';

const image = {uri: 'https://i.pinimg.com/564x/e7/08/0e/e7080e6067b11b08ba3077ce63515786.jpg'};

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <HomeScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
