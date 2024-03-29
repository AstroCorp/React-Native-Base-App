import React from 'react';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native';
import { increment, decrement, listRepos } from '../store/actions/index';
import Header from '../components/Header';
import { Dispatch } from 'redux';
import State from '../types/redux/state';
import SettingsProps from '../types/react-navigation/SettingsProps';
import MainView from '../components/MainView';

const Settings = (props: SettingsProps) => {
	return (
		<MainView>
			<Header title="Settings" navigation={props.navigation} />

			<Text>Pressed {props.counter} times!</Text>
			<Button title="Increment" onPress={() => props.onIncrement(1)} />
			<Button title="Decrement" onPress={() => props.onDecrement(1)} />

			<Button title="Axios" onPress={() => props.onListRepos()} />
		</MainView>
	);
};

function mapStateToProps(state: State) {
	return {
		counter: state.exampleReducer.counter,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onIncrement: (value: number) => dispatch(increment(value)),
		onDecrement: (value: number) => dispatch(decrement(value)),
		onListRepos: () => dispatch(listRepos()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
