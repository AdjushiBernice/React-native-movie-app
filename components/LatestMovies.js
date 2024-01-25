import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
const LatestMovies = ({data}) => {
  return (
    <View style={styles.latest}>
      <Text style={styles.trending}>Trending</Text>
      <Carousel data={data}
      renderItem={({item}) => <MovieCard  item={item}/>}/>
    </View>
  )
}

export default LatestMovies

const styles = StyleSheet.create({
    latest: {
        marginBottom: 8
    },
    trending: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    }
})