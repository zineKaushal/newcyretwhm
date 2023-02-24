import React from 'react';
import { ActivityIndicator, StatusBar, View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }


    _bootstrapAsync = async () => {
        let user_id = await AsyncStorage.getItem('userToken');
        console.log("valid token -----------", user_id);
        
        this.props.navigation.navigate(user_id ? 'Home' : 'Login');
    };

  
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="light" />
            </View>
        );
    }
}

export default AuthLoadingScreen