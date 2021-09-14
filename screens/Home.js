import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import List from "../components/List";

import { getPopularMovies, getUpcomingMovies } from "../services/services";

const dimensions = Dimensions.get("screen");
const Home = () => {
  const [moviesImages, setMovieImages] = useState("");
  const [popularMovies, setPopularMovies] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
        const moviesImagesArray = [];
        movies.forEach((movie) => {
          moviesImagesArray.push(
            "https://image.tmdb.org/t/p/w500/" + movie.poster_path
          );
        });
        setMovieImages(moviesImagesArray);
      })
      .catch((err) => {
        setError(err);
      });

    getPopularMovies()
      .then((movies) => {
        setPopularMovies(movies);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimensions.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={styles.carousel}>
      <FlatList
          data={popularMovies}
          horizontal={true}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        ></FlatList>
      </View>
      <View>
        <List title='List component' content={popularMovies}></List>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderStyle: {
    height: 0,
  },
});

export default Home;
