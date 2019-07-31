import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NetInfo from "@react-native-community/netinfo";

class Offline extends Component 
{
    reconnect()
    {
        NetInfo.fetch().then(state => {
            return state.isConnected;
        }).then(isConnected => {
            if(isConnected)
            {
                this.props.navigation.navigate('App');
            }
        });
    }

    render()
    {
        return (
            <ScrollView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Text>Offline D:</Text>
                    <Button onPress={ () => this.reconnect() } title="Reintentar" />
                </SafeAreaView>
            </ScrollView>
        );
    }
}
 
export default Offline;