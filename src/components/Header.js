import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet, StatusBar } from 'react-native';
import MenuIcon from '../assets/icons/Menu';

export const Header = (props) => (
    <View style={{ height: 60 }}>
        <StatusBar backgroundColor="#346998" />
        <View style={ styles.header }>
            <TouchableWithoutFeedback onPress={ () => props.navigation.openDrawer() }>
                <View style={ styles.menuIcon }>
                    <MenuIcon color="#FFF" size="36" /> 
                </View>   
            </TouchableWithoutFeedback>
            <Text style={ styles.title }>{ props.title }</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3E7DB4',
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuIcon: {
        padding: 12
    },
    title: {
        fontSize: 20,
        paddingLeft: 5,
        marginTop: -2,
        color: "#FFF"
    }
});