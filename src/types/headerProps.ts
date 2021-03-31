import { DrawerActionHelpers } from '@react-navigation/routers';

export type DrawerNavigationParamList = {
    openDrawer(): void;
    closeDrawer(): void;
    toggleDrawer(): void;
};

export default interface HeaderProps {
	title: string;
    navigation: DrawerActionHelpers<DrawerNavigationParamList>;
}
