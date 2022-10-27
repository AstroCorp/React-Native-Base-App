import React from 'react';
import { Text, Button } from 'react-native';
import MainView from '../components/MainView';
import TutorialProps from '../types/react-navigation/TutorialProps';

const Tutorial = (props: TutorialProps) => {
	return (
		<MainView>
			<Text>Tutorial :v</Text>
			<Button
				onPress={() => props.navigation.navigate('Drawer')}
				title="Entrar en la App"
			/>
		</MainView>
	);
};

export default Tutorial;
