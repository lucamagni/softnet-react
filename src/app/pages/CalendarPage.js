import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MenuButton from '../components/MenuButton';
import LogoutButton from '../components/LogoutButton'

export default class CalendarPage extends React.Component {
	render() {
		return(
			<View style={styles.containerCalendar}>
			<MenuButton navigation={this.props.navigation} />
			<LogoutButton navigation={this.props.navigation} />
			<Text>Questa è la pagina del calendario</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    containerCalendar: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});