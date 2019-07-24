import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
 
class Settings extends Component {
    render() {
        return (
            <View>
                <Button title="Abrir" onPress={() => this.props.navigation.openDrawer()}/>
                <Text>Pressed {this.props.counter} times!</Text>
                <Button title="Increment" onPress={() => this.props.doIncrement(1)} />
                <Button title="Decrement" onPress={() => this.props.doDecrement(1)} />
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
        doIncrement: (value) => dispatch({type: 'INCREMENT', value: value}),
        doDecrement: (value) => dispatch({type: 'DECREMENT', value: value}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Settings);