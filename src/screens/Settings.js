import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { increment, decrement, listRepos } from '../store/actions/index';
import { Header } from '../components/Header';

class Settings extends Component
{
    render() 
    {
        return (
            <ScrollView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Header title="Settings" navigation={ this.props.navigation } />

                    <Text>Pressed {this.props.counter} times!</Text>
                    <Button title="Increment" onPress={() => this.props.onIncrement(1)} />
                    <Button title="Decrement" onPress={() => this.props.onDecrement(1)} />

                    <Button title="Axios" onPress={() => this.props.onListRepos()} />
                </SafeAreaView>
            </ScrollView>
        );
    }
}
 
function mapStateToProps(state) 
{
    return {
        counter: state.exampleReducer.counter
    };
}
 
function mapDispatchToProps(dispatch) 
{
    return {
        onIncrement: (value) => dispatch(increment(value)),
        onDecrement: (value) => dispatch(decrement(value)),
        onListRepos: () => dispatch(listRepos()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Settings);