import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image

} from "react-native";
import axios from "react-native-axios";
import { Input, Button } from "react-native-elements";


import Inputs from "./Dising/Inputs";
import Submit from "./Dising/Submit";
import Account from "./Dising/Account";


export default class Login extends Component {

  state = {
    users: [],
    username: "",
    password: "",
    loginStatus: 0
  };


  login = () => {
   const { username, password } = this.state;
    axios
      .post("http://192.168.8.100:4000/api/login", {
        username: username,
        password: password
      })
      .then(res => {
        if (res.data.success) {
          this.setState({
            loginStatus: 1  
          });

  //      //  this.storeData();

        } else if (!res.data.success) {
          console.log(res);
          Alert.alert("Invalid Login");
        }
      })
      .catch(error => {
        console.log(error);
      });
  

    
    if (this.state.loginStatus == 1) {
      this.props.navigation.navigate("Home");
      
    }
    if (this.state.loginStatus == 1) {
      this.state.loginStatus = 0;
      
    }

  
    };


  // log = (LOGIN) => {
  //     Alert.alert("testok");
  // }



  // storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem("username", this.state.username);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };


  render() {

    return (
    
      // <View
      //   style={{
      //     height: 100,
      //     marginTop: 100,
      //     display: "flex",
      //     flexDirection: "column",
      //     width: "100%"
      //   }}
      // >
      //   <Text style={{ fontSize: 30, color: "#141823", marginLeft: '40%'}}>Login</Text>
      //   <Text />
      //   <TextInput
      //     name="username"
      //     placeholder="Username"
      //     style={{ width: "80%" }}
    //      onChangeText={username => this.setState({ username: username, editable: true })}
      //   />
      //   <Text />
      //   <TextInput
      //     name="password"
      //     secureTextEntry={true}
      //     style={{ width: "80%" }}
      //     placeholder="Password"
      //     onChangeText={password => this.setState({ password })}
      //   />
      //   <Text />
      //   <Text />
      //   <Button title="Login" type="solid" onPress={this.login} />
       

      //   <View
      //     style={{
      //       height: 100,
      //       marginTop: 100,
      //       display: "flex",
      //       flexDirection: "column",
      //       alignItems: "center",
      //       width: "100%"
      //     }}
      //   >
      //     <Text>Not registered? Click on the register tab below</Text>
      //     <Button title="Register" type="solid" onPress={() => this.props.navigation.navigate("Register")} />

      //   </View>
      // </View>
//----------------------------------

<ScrollView style={{backgroundColor: 'white'}}>
<View style={styles.container}>
    <Image 
        source={require('./Dising/assets/login.png')} 
        resizeMode="center" 
        style={styles.image} />

    <Text style={styles.textTitle}>Welcome back</Text>

    <Text style={styles.textBody}>Log in to your existant account</Text>

    <View style={{marginTop: 20}} />
  
<TextInput
          name="username"
          placeholder="Username"
          style={{ width: "80%" }}
         onChangeText={username => this.setState({ username: username, editable: true })}
        />

<TextInput
          name="password"
          secureTextEntry={true}
          style={{ width: "80%" }}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
        />
    
    <View style={{width: '90%'}}>
        <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Password?</Text>
    </View>

    {/* <Submit title="LOGIN" color="#0148a4"  /> */}

    <Button title="Login" type="solid" onPress={this.login} />  

    <Text style={styles.textBody}>Or connect using</Text>
    <View style={{flexDirection: 'row'}}>
        <Account color="#3b5c8f" icon="facebook" title="Facebook" />
        <Account color="#ec482f" icon="google" title="Google" />
    </View>
    <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Text style={styles.textBody}>Don't Have an account</Text>
        <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => this.props.navigation.navigate("Register")}> Sign Up</Text>
    </View>
</View>
</ScrollView>   


    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  image: {
      width: 400,
      height: 250,
      marginVertical: 10
  },
  textTitle: {
      fontFamily: 'Foundation',
      fontSize: 40,
      marginVertical: 10,
  },
  textBody: {
      fontFamily: 'Foundation',
      fontSize: 16
  }
});
