interface NavigationProps {
    navigate: (viewName: string) => void;
}

export default interface StackNavigationProps {
    navigation: NavigationProps;
}
