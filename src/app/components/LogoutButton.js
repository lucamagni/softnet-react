import React from 'react';
import { View, StyleSheet, Button, AsyncStorage } from 'react-native';

export default class LogoutButton extends React.Component {

	render() {
		return(
			<View style={styles.styleLogout}>
				<Button 
					title="Logout" 
					style={styles.styleLogout}
					onPress={()=> this._logout()} 
				/>
			</View>
			)
	}

	_logout = async () => {
        const removeToken = await AsyncStorage.removeItem('token');
        return this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
	styleLogout: {
		flex:1,
		alignItems: 'flex-end',
		position: 'absolute',
		top: 40,
		right: 20
	}
})