import React, { useState } from 'react'
import { View } from "react-native";
import TicketsList from '../components/TicketsList';
import TopBar from '../components/TopBar';
import { useFocusEffect } from '@react-navigation/native';

export default function Home() {
    const [entered, setEntered] = useState(true);
    // Modal
    const [modalFilter, setModalFilter] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setEntered(true);

            return () => {
                setEntered(false);
            }
        }, [])
    );

    if (!entered) return;

    return (
        <View style={{ flexGrow: 1, backgroundColor: '#fff', paddingBottom: 195 }}>
            <TopBar searchActive={true} handleModal={setModalFilter} />

            <TicketsList modalFilter={modalFilter} setModalFilter={setModalFilter} />
        </View>
    );
}