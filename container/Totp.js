import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import jsSHA from "jssha";
import jsonp from "./jsOTP.js";

export default class Totp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "123",
      secret: "JBSWY3DPEHPK3PXP",
      name: "",
      countDown: 30,
    };
  }
  async componentDidMount() {
    this.setState({
      name: this.props.name,
      secret: this.props.secret.split("=")[1],
    });
  }
  async componentWillReceiveProps() {
    this.setState({
      name: this.props.name,
      secret: this.props.secret.split("=")[1],
    });
  }
  render() {
    if (this.state.code == "123") this.setState({ code: "Waiting loading" });

    let secret = this.state.secret;
    var totp = new jsOTP.totp();
    var code = totp.getOtp(this.state.secret);
    var hotp = new jsOTP.hotp();
    var doge = hotp.getOtp(this.state.secret, 0);

    setInterval(() => {
      let epoch = Math.round(new Date().getTime() / 1000.0);
      let countDown = 30 - (epoch % 30);
      this.setState({ countDown: countDown });
      if (epoch % 30 == 0) this.setState({ code: totp.getOtp(secret) });
    }, 1000);
    return (
      <>
        <Text>Secret: {this.state.secret}</Text>
        <Text>TOTP code: {this.state.code}</Text>
        <Text>Count: {this.state.countDown}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#ff6347",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 5,
          }}
          onPress={() => {
            this.setState({ code: "456" });
          }}
        >
          <Text>Name: {this.state.name}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
