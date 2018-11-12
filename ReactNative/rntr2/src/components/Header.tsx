import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface Props {
  hoge: object;
}
export default (props: Props) => (
  <View
    style={{
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ddd"
    }}
  >
    <Text>hogehogefefefe{console.log(111, props.hoge)}</Text>
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
