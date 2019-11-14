import React, { PureComponent } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
import { connect } from 'react-redux';

import Tutorial from './Tutorial';
import Home from './Home';
import Settings from './Settings';
import Offline from './Offline';

class Navigation extends PureComponent
{
    configNavigation()
    {
        // Con eso se usará navegación nativa, mejorando el rendimiento
        enableScreens();

        // Navegación de la app
        const AppStack = createDrawerNavigator({
            Home: {
                screen: Home
            },
            Settings: {
                screen: Settings
            }
        },
        {
            initialRouteName: 'Home'
        });

        // Navegación del tutorial
        const TutorialStack = createStackNavigator(
        { 
            Tutorial: Tutorial 
        },
        {
            headerMode: 'none'
        });

        // Navegación offline
        const OfflineStack = createStackNavigator(
        { 
            Offline: Offline 
        }, 
        {
            headerMode: 'none'
        });

        // Zonas de la app
        const MySwitchNavigator = createSwitchNavigator(
            {
                Tutorial: TutorialStack,
                App: AppStack,
                Offline: OfflineStack,  
            },
            {
                initialRouteName: 'Tutorial',
            }
        );
        
        return createAppContainer(MySwitchNavigator);
    }

    render() 
    {
        const AppContainer = this.configNavigation();

        return (
            <AppContainer />
        );
    }
}
 
function mapStateToProps(state) 
{
    return {

    };
}
 
function mapDispatchToProps(dispatch) 
{
    return {

    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);