import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={styles.bar}>
          <Bars3CenterLeftIcon style={styles.barIcon} />
          <Text></Text>
        </View>
      </SafeAreaView>
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
});
