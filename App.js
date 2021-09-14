import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'


const getPopularMovies = async() => {
  const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e2a93812004fddd622fb5e91194b8a9')
  console.log(JSON.stringify(result.data.results[0], null, 2));
}

const App = () => {
  getPopularMovies()
  return (
    <View></View>
  )
}


export default App;