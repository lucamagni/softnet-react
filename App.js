import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './src/services/navigator/AppNavigator'
import HomePage from './src/app/pages/Home';
/*const Application = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: HomePage}
});

const App = createAppContainer(Application);*/

/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Application/>
      </View>
    );
  }
}*/
export default class App extends React.Component {
	render() {
		return(
				<AppNavigator />
		)
	}
};