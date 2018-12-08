/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import firebase from "react-native-firebase";

firebase
  .auth()
  .signInAnonymously()
  .then(data => {
    console.log(111, data);
  });

const main = async () => {
  // データの取得
  // const snapShot = await firebase
  //   .firestore()
  //   .collection("payments")
  //   .where("userId", "==", "w0Wx7AaAVGlQOBS3RfYM")
  //   // .where("paymentAt", "<", new Date("2018-09"))
  //   // .where("paymentAt", "<", new Date("2018-10"))
  //   .get();
  // const payments = snapShot.docs.map(d => d.data());
  // console.log(payments);
  //
  // 新しく追加 支出
  await firebase
    .firestore()
    .collection("payments")
    .add({
      userId: "w0Wx7AaAVGlQOBS3RfYM",
      value: 10000,
      name: "日用品",
      paymentAt: new Date("2019-7-15")
    });
  //
  // 収入
  // await firebase.firestore().collection('incomes').add({
  //   userId: 'w0Wx7AaAVGlQOBS3RfYM',
  //   value: 300000,
  //   name: '給料',
  //   incomeAt: new Date('2018-09-25'),
  // });
  //
  // データの更新
  // await firebase.firestore().collection('users').doc('w0Wx7AaAVGlQOBS3RfYM').set({
  //   email: 'naochael.jordan@gmail.com',
  //   name: 'ことら',
  //   password: '1234',
  // });
};
main();

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
