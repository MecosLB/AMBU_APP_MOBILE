import React from 'react'
import Constants from 'expo-constants';
import { Text, View } from "react-native";
import TopBar from '../components/TopBar';

export default function NewTicket() {
    return (
        <View style={{ flexGrow: 1, backgroundColor: '#fff' }}>
            <TopBar />

            <Text>
                New ticket
            </Text>
        </View>
    )
}