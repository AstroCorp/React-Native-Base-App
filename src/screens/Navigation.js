import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';

const Navigation = createDrawerNavigator({
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

export default createAppContainer(Navigation);