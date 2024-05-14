import React, { useState } from 'react'
import { View } from "react-native";
import TicketsList from '../components/TicketsList';
import TopBar from '../components/TopBar';

export default function Home() {
    // Modal
    const [modalFilter, setModalFilter] = useState(false);

    return (
        <View style={{ flexGrow: 1, backgroundColor: '#fff', paddingBottom: 195 }}>
            <TopBar searchActive={true} handleModal={setModalFilter} />

            <TicketsList modalFilter={modalFilter} setModalFilter={setModalFilter} />
        </View>
    );
}