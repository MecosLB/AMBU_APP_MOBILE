import React from 'react'
import { View } from "react-native";
import TopBar from '../components/TopBar';
import UserSettings from '../components/UserSettings';

export default function Settings({ loginNavigation }) {
    return (
        <View style={{ flexGrow: 1, backgroundColor: '#fff', paddingBottom: 195 }}>
            <TopBar />

            <UserSettings navigation={loginNavigation} />
        </View>
    )
}