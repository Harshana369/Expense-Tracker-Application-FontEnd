import React, { Component } from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Home"
import SearchDate from "./components/Home/SearchDate";
import History from "./components/Home/History"
import LogForm from "./components/Home/LogForm"
import ExpenseByDate from "./components/Home/ExpenseByDate"




export default class App extends Component {
    render() {
        return <AppContainer/>;
    }
}

const navigator = createStackNavigator({
    
    Login: {
        screen: Login,
        navigationOptions: {
          headerShown: false,
          headerTransparent: true,
        },
    },

    Register: {
        screen: Register,
        navigationOptions: {
          headerShown: false,
          headerTransparent: true,
        },
      },

    Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
          headerTransparent: true,
        },
      },

      History: {
        screen: History,
        navigationOptions: {
          headerShown: false,
          headerTransparent: true,
        },
      },

      LogForm: {
        screen: LogForm,
        navigationOptions: {
          headerShown: false,
          headerTransparent: true,
        },
      },

      SearchDate: {
        screen: SearchDate,
        navigationOptions: {
          headerShown: false,
          headerTransparent: true,
        },
      },

      ExpenseByDate: {
        screen: ExpenseByDate,
        navigationOptions: {
          headerShown: false,
          headerTransparent: true,
        },
      },

  });
  
  const AppContainer = createAppContainer(navigator);

//   AppRegistry.registerComponent("App", () => App);



