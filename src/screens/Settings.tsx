import React from 'react';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native';
import { increment, decrement, listRepos } from '../store/actions/index';
import Header from '../components/Header';
import SafeAreaView from 'react-native-safe-area-view';

const Settings = (props) => {
    return (
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <Header title="Settings" navigation={props.navigation} />

            <Text>Pressed {props.counter} times!</Text>
            <Button title="Increment" onPress={() => props.onIncrement(1)} />
            <Button title="Decrement" onPress={() => props.onDecrement(1)} />

            <Button title="Axios" onPress={() => props.onListRepos()} />
        </SafeAreaView>
    );
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