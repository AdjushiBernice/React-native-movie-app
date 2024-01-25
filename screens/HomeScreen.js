import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styling, theme } from "../theme/theme";
import LatestMovies from "../components/LatestMovies";

const HomeScreen = () => {
  const [latest, setLatest] = useState([1,2,3])
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={styles.bar}>
          <Bars3CenterLeftIcon style={styles.barIcon} />
          <Text style={styles.textStyling}>
            <Text style={styling.text}>F</Text>ilm{" "}
            <Text style={styling.text}>Q</Text>uest
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <LatestMovies data={latest} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(51, 51, 51)",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "4",
  },
  barIcon: {
    fontSize: "30px",
    strokeWidth: "2px",
    color: "white",
  },
  textStyling: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  searchIcon: {
    fontSize: "30px",
    strokeWidth: "2px",
    color: "white",
  },
});
