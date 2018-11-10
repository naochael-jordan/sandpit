import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
  hoge: string;
};
export default (props: Props) => (
  <View
    style={{
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ddd"
    }}
  >
    <Text>hogehogefefefe{props.hoge}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
