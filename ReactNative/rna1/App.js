import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import Sound from "react-native-sound";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      whoosh: null
    };
  }

  componentWillMount() {
    this.setState({
      whoosh: new Sound("elephant1.mp3", Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log("failed to load the sound", error);
          return;
        }
        // loaded successfully
        console.log(
          "duration in seconds: " +
            this.state.whoosh.getDuration() +
            "number of channels: " +
            this.state.whoosh.getNumberOfChannels()
        );
      })
    });
    console.log(this);
  }

  _onPressButton = () => {
    // Play the sound with an onEnd callback
    this.state.whoosh.play(success => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
        // reset the player to its uninitialized state (android only)
        // this is the only option to recover after an error occured and use the player again
        this.state.whoosh.reset();
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={this._onPressButton}
        >
          <Image style={styles.button} source={require("./elephant.png")} />
        </TouchableOpacity>
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
  buttonWrapper: {
    padding: 30,
    backgroundColor: "#fff",
    borderColor: "#666",
    borderWidth: 6,
    borderRadius: 200,
    shadowColor: "#555",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 0,
    shadowOpacity: 1
  },
  button: {
    width: 200,
    height: 200,
    shadowColor: "#333",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 0,
    shadowOpacity: 1
  }
});
