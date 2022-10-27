import React from 'react';
import { ViewProps } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainView = ({ children }: ViewProps) => (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
            { children }
        </SafeAreaView>
    </GestureHandlerRootView>
);

export default MainView;
