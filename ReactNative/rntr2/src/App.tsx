import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header hoge="fuga" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
