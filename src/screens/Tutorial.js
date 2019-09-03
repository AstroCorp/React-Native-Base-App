import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Tutorial extends Component
{
    goToApp()
    {
        this.props.navigation.navigate('App');
    }

    render() 
    {
        return (
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <Text>Tutorial :v</Text>
                <Button onPress={ () => this.goToApp() } title="Entrar en la App" />
            </SafeAreaView>
        );
    }
}
 
export default Tutorial;