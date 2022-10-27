import React from 'react';
import { Text } from 'react-native';
import Header from '../components/Header';
import LottieView from 'lottie-react-native';
import HomeProps from '../types/react-navigation/HomeProps';
import MainView from '../components/MainView';

const Home = (props: HomeProps) => {
	return (
		<MainView>
			<Header title="Home" navigation={props.navigation} />
			<LottieView
				source={require('../assets/lottie/party-penguin.json')}
				autoPlay
				loop
				style={{ width: 250, height: 250 }}
			/>
			<Text>Home :D</Text>
		</MainView>
	);
};

export default Home;
