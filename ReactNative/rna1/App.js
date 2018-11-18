import React, { Component } from "react";
import {
  YellowBox,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  View,
  Animated,
  Easing
} from "react-native";
import Sound from "react-native-sound";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [
        {
          id: 1,
          name: "elephant",
          image: require("./elephant.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("elephant1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 2,
          name: "lion",
          image: require("./lion.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("lion1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 3,
          name: "dog",
          image: require("./dog.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("dog1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 4,
          name: "cat",
          image: require("./cat.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("cat1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 5,
          name: "niwatori",
          image: require("./niwatori.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("niwatori1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 6,
          name: "yagi",
          image: require("./yagi.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("yagi1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 7,
          name: "hitsuji",
          image: require("./hitsuji.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("hitsuji1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 8,
          name: "hiyoko",
          image: require("./hiyoko.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("hiyoko1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 9,
          name: "hato",
          image: require("./hato.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("hato1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 10,
          name: "inoshishi",
          image: require("./inoshishi.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("inoshishi1.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 11,
          name: "papa",
          image: require("./papa.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("papa.m4a", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        },
        {
          id: 12,
          name: "mama",
          image: require("./mama.png"),
          current: 0,
          sizeRatio: new Animated.Value(0),
          voice: new Sound("mama.m4a", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
            }
          })
        }
      ]
    };
  }

  _onPressButton = item => {
    // Play the sound with an onEnd callback
    item.voice.play(success => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
        // reset the player to its uninitialized state (android only)
        // this is the only option to recover after an error occured and use the player again
        item.voice.reset();
      }
    });

    // 拡大アニメーション
    item.current = item.current ? 0 : 1;
    Animated.timing(item.sizeRatio, {
      toValue: item.current,
      duration: 1000,
      easing: Easing.elastic()
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            flex: 1,
            paddingTop: 30,
            paddingBottom: 50
            // backgroundColor: "#f00"
          }}
        >
          <FlatList
            data={this.state.animals}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: index ? 0 : 50,
                  paddingBottom: 50
                  // backgroundColor: "#f00"
                }}
              >
                <Animated.View
                  style={[
                    {
                      backgroundColor: "#fff",
                      borderRadius: 200,
                      overflow: "hidden"
                    },
                    {
                      transform: [
                        {
                          scale: item.sizeRatio.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [1, 1.2, 1]
                          })
                        }
                      ]
                    }
                  ]}
                >
                  <TouchableOpacity
                    style={{
                      padding: 32
                    }}
                    onPress={() => this._onPressButton(item)}
                  >
                    <Animated.Image
                      style={[
                        {
                          width: 200,
                          height: 200
                        },
                        {
                          transform: [
                            {
                              scale: item.sizeRatio.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [1, 1.2, 1]
                              })
                            }
                          ]
                        }
                      ]}
                      source={item.image}
                    />
                  </TouchableOpacity>
                </Animated.View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272829"
  }
});