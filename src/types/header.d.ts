import { DrawerActionHelpers } from "@react-navigation/routers";

type DrawerNavigationParamList = {
    openDrawer(): void;
    closeDrawer(): void;
    toggleDrawer(): void;
};

export default interface Header {
	title: string;
    navigation: DrawerActionHelpers<DrawerNavigationParamList>;
}
