/**
 * Created by lmagni on 07/01/2019.
 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ApiService from '../../services/api-admin/config';
import HomePage from '../pages/Home';

export default class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            "username":"",
            "password":""
        }
    }

    async onClickLogin(username, password) {
        try {
            let resp = await ApiService.makeRequest({"entity":"login"}, {"_username":username,"_password":password});
            //non sono riuscito a capire come raccogliere l'errore di autenticazione, per ora controllo solamente che mi risponda con il valore token nell'array
            if (resp.token) {
                console.log("Risposta corretta, ora salvo il token");
                AsyncStorage.setItem('token', resp.token);
                AsyncStorage.setItem('username', username);
                return this.props.navigation.navigate('HomePage');//Navigator.switchNavigator(HomePage);
                //const customnav = Navigator.switchNavigator(HomePage);
            }
            else {
                alert('Login errato');
            }
        }
        catch(e) {
            console.log(e);
        }

    }

    render() {
        return (
            <View>
                <View style={loginstyle.title}>
                    <Text>Piatti Login</Text>
                </View>
                <TextInput placeholder="Username" onChangeText={(username)=>this.setState({username})}></TextInput>
                <TextInput placeholder="Password" onChangeText={(password)=>this.setState({password})}></TextInput>
                <View style={loginstyle.button}>
                <Button loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} onPress={()=>this.onClickLogin(this.state.username, this.state.password)} title="Login" />
                </View>
            </View>
        );
    }
}

const loginstyle = StyleSheet.create({
    title: {
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    button: {
        marginTop: 20
    }
});