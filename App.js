import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Navigation from './src/screens/Navigation';
import { PersistGate } from 'redux-persist/integration/react';
import NetInfo from "@react-native-community/netinfo";

const store = configureStore();

export default class App extends Component {
	state = {
		isConnected: true,
	};

	componentDidMount() 
	{
		this.toggleInternetStatus();
	}

	componentWillUnmount()
	{
		this.toggleInternetStatus();
	}

	toggleInternetStatus = () => NetInfo.addEventListener(state => {
		this.setState({
			isConnected: state.isConnected,
		});
	});

	render() {
		return (
			<Provider store={store.store}>
				<PersistGate loading={null} persistor={store.persistor}>
					<StatusBar backgroundColor="#1775C2" barStyle="light-content" />
					<Navigation />
					{ this.state.isConnected ? null :
						<View style={styles.bg}>
							<Text style={styles.text}>Sin conexión</Text>
						</View>
					}
				</PersistGate>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	bg: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},

	text: {
		color: '#E51212',
		marginBottom: 35
	}
});