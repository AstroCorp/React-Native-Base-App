import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header } from '../components/Header';

class Home extends Component {
    render() {
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