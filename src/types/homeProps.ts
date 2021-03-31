import { DrawerActionHelpers } from '@react-navigation/routers';
import { DrawerNavigationParamList } from './headerProps';

export default interface HomeProps {
	title: string;
    navigation: DrawerActionHelpers<DrawerNavigationParamList>;
}
