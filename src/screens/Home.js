import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Home extends Component {
    render() {
        return (
            <ScrollView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Button title="Abrir" onPress={() => this.props.navigation.openDrawer()}/>
                </SafeAreaView>
            </ScrollView>
        );
    }
}
 
export default Home;