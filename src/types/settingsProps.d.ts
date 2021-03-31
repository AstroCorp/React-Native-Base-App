import { DrawerActionHelpers } from '@react-navigation/routers';
import { DrawerNavigationParamList } from './headerProps';

export default interface SettingsProps {
    navigation: DrawerActionHelpers<DrawerNavigationParamList>;
    counter: number;

    onIncrement: (num: number) => void;
    onDecrement: (num: number) => void;
    onListRepos: () => void;
}
