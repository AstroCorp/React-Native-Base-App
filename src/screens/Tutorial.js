import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Tutorial extends Component
{
    goToApp()
    {
        this.props.navigation.navigate('App');
    }

    render() 
    {
        return (
            <View>
                <Text>Tutorial :v</Text>
                <Button onPress={ () => this.goToApp() } title="Entrar en la App" />
            </View>
        );
    }
}
 
export default Tutorial;