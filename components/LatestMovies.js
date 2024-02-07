import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,Image
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import cute from "../assets/cuteAnime.webp"
const { width, height } = Dimensions.get("window");
const LatestMovies = ({ data }) => {
  const navigation = useNavigation()
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <View style={styles.latest}>
      <Text style={styles.trending}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        sliderHeight={300}
        slideStyle={{ display: "flex", alignItems: "center" }}
        windowSize={data.length}
      />
    </View>
  );
};

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={cute} alt="amine"
        style={styles.anime}
         />
    </TouchableWithoutFeedback>
  );
};

export default LatestMovies;

const styles = StyleSheet.create({
  latest: {
    marginBottom: 8,
  },
  trending: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  slider: {
    color: "white",
  },
  anime: {
    width: width*0.6,
    height: height*0.4,
    borderRadius: 60,
  }
});
