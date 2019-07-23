import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
 
class Settings extends Component {
    render() {
        return (
            <View>
                <Button title="Abrir" onPress={() => this.props.navigation.openDrawer()}/>
                <Text>Pressed {this.props.counter} times!</Text>
                <Button title="Increment" onPress={() => this.props.doIncrement()} />
                <Button title="Decrement" onPress={() => this.props.doDecrement()} />
            </View>
        );
    }
}
 
function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}
 
function mapDispatchToProps(dispatch) {
    return {
        doIncrement: () => dispatch({type: 'INCREMENT'}),
        doDecrement: () => dispatch({type: 'DECREMENT'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Settings);