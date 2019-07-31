import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NetInfo from "@react-native-community/netinfo";
import { Header } from '../components/Header';

class Home extends Component 
{
    constructor(props)
    {
        super(props);
        
        this.state = { 
            interval: null 
        };

        this.checkConnection();
    }

    componentDidMount() 
    {
        this.state.interval = setInterval(() => {
            this.checkConnection();
        }, 1000);
    }

    componentWillUnmount() 
    {
        clearInterval(this.state.interval);
    }

    checkConnection()
    {
        NetInfo.fetch().then(state => {
            return state.isConnected;
        })
        .then(isConnected => {
            if(!isConnected)
            {
                this.props.navigation.navigate('Offline');
            }
        });
    }

    render() 
    {
        return (
            <ScrollView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Header title="Home" navigation={ this.props.navigation } />
                    <Text>Home :D</Text>
                </SafeAreaView>
            </ScrollView>
        );
    }
}
 
export default Home;