import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

class Tutorial extends Component
{
    render() 
    {
        return (
            <SafeAreaView>
                <Text>Tutorial :v</Text>
                <Button onPress={ () => this.props.navigation.navigate('Home') } title="Entrar en la App" />
            </SafeAreaView>
        );
    }
}
 
export default Tutorial;