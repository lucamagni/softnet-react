/**
 * Created by lmagni on 07/01/2019.
 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeybordAvoidingView, AsyncStorage, } from 'react-native';
import {createStackNavigator} from 'react-navigation';

export class ApiService {

    //qui devo costruire una funzione che posso pescare in tutto il progetto e che mi permetta di fare le richieste alle api
    static makeRequest(
        params:any={"entity":"","action":"","id":"","lang":""},
        regbody:any=null,
        method="POST"
    ) {
        let correctUrl= this.constructUrlFromParams(params)

        return fetch(correctUrl, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(regbody)
        })
            .then((response)=>response.json())
            .then((responseJson)=>{return responseJson})
            .catch((error)=>{return error})
    }

    //qui costruisco il percorso all'API
    static constructUrlFromParams(params:any) {
        let baseUrl="http://app.soft-net.it/admin/";
        let realpath = "";
        realpath = baseUrl + params.entity;
        if (params.action)
            realpath += "/" + params.action;

        if (params.id)
            realpath += "/" + params.id;

        if (params.lang)
            realpath += "/" + params.lang;

        return realpath;
    }

    //qui serializzo i parametri da passare TODO DA SISTEMARE
    /*static urlencode(regbody) {
        let params = '';
        if (regbody) {
            for (var param in regbody) {
                let paramToset=regbody[param];
                if(typeof paramToset == "undefined")
                    paramToset="";
                if(typeof paramToset == "object")
                    paramToset=JSON.stringify(paramToset);
                params.set(param, paramToset);
            }
        }
        return params;
    }*/
}
export default ApiService;