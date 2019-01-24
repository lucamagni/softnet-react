/**
 * Created by lmagni on 08/01/2019.
 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MenuButton from '../components/MenuButton';
import LogoutButton from '../components/LogoutButton'

export default class HomePage extends React.Component {    

    render() {
        return (
            <View style={styles.container}>
            <LogoutButton navigation={this.props.navigation} />
            <MenuButton navigation={this.props.navigation} />                
                <Text>Home Page</Text>                
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});