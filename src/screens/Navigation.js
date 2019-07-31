import { createDrawerNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Tutorial from './Tutorial';
import Home from './Home';
import Settings from './Settings';
import Offline from './Offline';

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

export default Navigation = createAppContainer(MySwitchNavigator);