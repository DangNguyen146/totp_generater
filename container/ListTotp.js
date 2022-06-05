import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import QrcodeReader from "./QrcodeReader";
import Totp from "./Totp";

export default class ListTotp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: [],
      data: [],
      code: "",
      data: "",
      name: "",
      countDown: 30,
    };
  }
  async componentWillMount() {
    let data = await AsyncStorage.getItem("mydata");

    let editDate = JSON.parse(data).split("/")[3].split("?");
    this.setState({ data: editDate });
  }
  async componentDidMount() {
    let data = await AsyncStorage.getItem("mydata");

    let editDate = JSON.parse(data).split("/")[3].split("?");
    this.setState({ data: editDate });
  }
  async componentWillReceiveProps() {
    let data = await AsyncStorage.getItem("mydata");

    let editDate = JSON.parse(data).split("/")[3].split("?");
    this.setState({ data: editDate });
  }
  render() {
    let temp = this.state.data[1];
    let data;
    if (temp) {
      data = temp.split("&")[0];
    } else data = temp;
    return (
      <View style={styles.container}>
        <Totp name={this.state.data[0]} secret={data} />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("QrcodeReader");
          }}
          style={styles.touchableOpacityStyle}
        >
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png",
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 100,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
