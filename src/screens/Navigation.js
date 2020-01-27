import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
// import { enableScreens } from 'react-native-screens';

import Tutorial from './Tutorial';
import Home from './Home';
import Settings from './Settings';

// Con eso se usará navegación nativa, mejorando el rendimiento
// enableScreens();

// Navegación de la app
const AppStack = createDrawerNavigator({
    Home: Home,
    Settings: Settings
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
    initialRouteName: 'Tutorial',
    headerMode: 'none'
});

// Zonas de la app
const MySwitchNavigator = createSwitchNavigator(
{
    Tutorial: TutorialStack,
    App: AppStack,
},
{
    initialRouteName: 'Tutorial',
});

export default Navigation = createAppContainer(MySwitchNavigator);