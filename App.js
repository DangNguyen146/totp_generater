import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import ListTotp from "./container/ListTotp";
import QrcodeReader from "./container/QrcodeReader";
import { NavigationContainer } from "@react-navigation/native"; //dùng để quản lý, chuyển màn hình.
import { createStackNavigator } from "@react-navigation/stack";
import Totp from "./container/Totp";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ListTotp" component={ListTotp} />
          <Stack.Screen name="QrcodeReader" component={QrcodeReader} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
