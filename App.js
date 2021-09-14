import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

const getPopularMovies = async () => {
  const result = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e2a93812004fddd622fb5e91194b8a9"
  );
  return result.data.results;
};

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false)

  useEffect(() => {
    getPopularMovies().then((movies) => {
      setMovie(movies[0]);
    }).catch((error) => {
      setError(error);
    });
  }, [])
  return (
    <View>
      <Text> Nom du Film : {movie.original_title} </Text>
      <Text> Langue: {movie.original_language} </Text>
      <Text> Date de sortie:  {movie.release_date} </Text>
       {error && <Text style={{color:'red'}}> Erreur sur le serveur </Text>}
    </View>
  );
};

export default App;
