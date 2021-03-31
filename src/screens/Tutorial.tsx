import React from 'react';
import { Text, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import StackNavigationProps from '../types/stackNavigationProps';

const Tutorial = (props: StackNavigationProps) => {
	return (
		<SafeAreaView>
			<Text>Tutorial :v</Text>
			<Button
				onPress={() => props.navigation.navigate('Home')}
				title="Entrar en la App"
			/>
		</SafeAreaView>
	);
};

export default Tutorial;
