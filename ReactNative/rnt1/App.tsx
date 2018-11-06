// components/Hello.tsx
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// export interface Props {
//   name: string;
//   enthusiasmLevel?: number;
//   onIncrement?: () => void;
//   onDecrement?: () => void;
// }

// interface State {
//   enthusiasmLevel: number;
// }

export class Hello extends React.Component {
  // constructor() {
  //   super();

  //   // if ((props.enthusiasmLevel || 0) <= 0) {
  //   //   throw new Error("You could be a little more enthusiastic. :D");
  //   // }

  //   // this.state = {
  //   //   enthusiasmLevel: props.enthusiasmLevel || 1
  //   // };
  // }

  // onIncrement = () =>
  //   this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
  // onDecrement = () =>
  //   this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
  // getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

  render() {
    return <View style={styles.root} />;
  }
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
});
