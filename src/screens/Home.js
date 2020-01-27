import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header } from '../components/Header';
import LottieView from 'lottie-react-native';

class Home extends Component 
{
    render() 
    {
        return (
            <ScrollView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Header title="Home" navigation={ this.props.navigation } />
                    <LottieView source={require('../assets/lottie/party-penguin.json')} autoPlay loop style={{width: 250, height: 250}} />
                    <Text>Home :D</Text>
                </SafeAreaView>
            </ScrollView>
        );
    }
}
 
export default Home;