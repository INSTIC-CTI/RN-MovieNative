import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import { getPopularMovies, getUpcomingMovies } from "../services/services";

const dimensions = Dimensions.get("screen");
const Home = () => {
  const [moviesImages, setMovieImages] = useState("");
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
  });

  //   getPopularMovies()
  //     .then((movies=> {})
  //     .catch((error) => {
  //       setError(error);
  //     })
  // }, []);
  return (
    <View style={styles.sliderContainer}>
      <SliderBox
        images={moviesImages}
        sliderBoxHeight={dimensions.height / 1}
        autoplay={true}
        circleLoop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
