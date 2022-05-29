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
      code: "123",
      secret: "JBSWY3DPEHPK3PXP",
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
    return (
      <View style={styles.container}>
        <Totp name={this.state.data[0]} secret={this.state.data[1]} />

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
    //backgroundColor:'black'
  },
});
