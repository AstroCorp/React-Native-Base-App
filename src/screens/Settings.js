import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { increment, decrement, listRepos } from '../store/actions/index';

class Settings extends Component {
    render() {
        return (
            <View>
                <Button title="Abrir" onPress={() => this.props.navigation.openDrawer()}/>

                <Text>Pressed {this.props.counter} times!</Text>
                <Button title="Increment" onPress={() => this.props.onIncrement(1)} />
                <Button title="Decrement" onPress={() => this.props.onDecrement(1)} />

                <Button title="Axios" onPress={() => this.props.onListRepos()} />
            </View>
        );
    }
}
 
function mapStateToProps(state) {
    return {
        counter: state.exampleReducer.counter
    };
}
 
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: (value) => dispatch(increment(value)),
        onDecrement: (value) => dispatch(decrement(value)),
        onListRepos: () => dispatch(listRepos()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Settings);