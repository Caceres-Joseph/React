import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert
} from 'react-native';
import { Icon } from 'react-native-elements'
const background = require('../assets/images/healt6.jpeg');
const lockIcon = require('../assets/images/icon.png');
const personIcon = require('../assets/images/icon.png');


export default class screens extends Component {


  validation = () => {
    this.props.navigation.navigate('Main')

  }

  render() {
    return (

      <ImageBackground
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover"
        blurRadius={1}
      >

        <View style={styles.container} />
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Icon
                name='label'
                color='#FFFFFF' />
            </View>
            <TextInput
              placeholder="Username"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Icon
                name='lock'
                color='#FFFFFF' />
            </View>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity onPress={this.validation} activeOpacity={.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container} />



      </ImageBackground>
    );
  }
}


function handleLoginPress() {

  props.navigation.navigate('Main');
  //this.props.navigation.navigate('Main');
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false },
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: null,
    height: null
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent"
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A0A2A"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#0A0A2A",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center"
  }
});

AppRegistry.registerComponent('screens', () => screens);