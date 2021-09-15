import React, { useState, useEffect } from "react";

import { Image, ScrollView, StyleSheet } from "react-native";
import { getMovie } from "../services/services";
const placeholderImage = require("../assets/images/placeholder.png");

const Detail = ({ route, navigation }) => {
  const [movieDetail, setDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const movieId = route.params.movieDetail.id;

  useEffect(() => {
    getMovie(movieId).then((movieData) => {
      setDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      "https://image.tmdb.org/t/p/w500" +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
        </ScrollView>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 125,
    borderRadius: 20,
  },
});

export default Detail;
