import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  View,
  Animated,
  Easing
} from "react-native";
import Sound from "react-native-sound";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      whoosh: null,
      animals: [
        {
          id: 1,
          name: "elephant",
          current: 0,
          sizeRatio: new Animated.Value(0)
        },
        {
          id: 2,
          name: "elephant",
          current: 0,
          sizeRatio: new Animated.Value(0)
        }
      ]
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

  _onPressButton = item => {
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

    // 拡大アニメーション
    item.current = item.current ? 0 : 1;
    Animated.timing(item.sizeRatio, {
      toValue: item.current,
      duration: 1000,
      easing: Easing.elastic(),
      useNativeDriver: true,
      friction: 4, // 摩擦 (大きい方が振動が減衰しやすい)
      tension: 36 // ばね定数
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            flex: 1,
            paddingTop: 50
            // backgroundColor: "#f00"
          }}
        >
          <FlatList
            data={this.state.animals}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
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
                      padding: 20
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
                      source={require("./elephant.png")}
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
