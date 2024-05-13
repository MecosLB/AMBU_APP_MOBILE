import React, { useEffect, useState } from 'react';
import tickets from '../data/tickets.js';
import { ActivityIndicator, FlatList, View } from 'react-native';
import TicketItem from './TicketItem.jsx';
import TicketModal from './TicketModal.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../data/api.js';

const Loading = ({ ticketsArray = [], selectTicket }) => {
    if (!ticketsArray.length)
        return (
            <ActivityIndicator size={'large'} color={'#3DA891'} />
        );

    return (
        <FlatList data={ticketsArray}
            renderItem={({ item: ticket }) => (
                <TicketItem {...ticket} handlePress={selectTicket} />
            )
            }>
        </FlatList >
    );
}

const TicketsList = () => {
    // Tickets
    const [ticketsArray, setTicketsArray] = useState([]);
    const [activeTicket, setActiveTicket] = useState({});
    // Filters
    const [filters, setFilters] = useState({});
    // Modal
    const [modalTicket, setModalTicket] = useState(false);

    // Initital set of user department
    useEffect(() => {
        setDepartment();
    }, []);

    // Filter tickets each time a filter change
    useEffect(() => {
        displayTickets();
    }, [filters]);

    // General functions
    const setDepartment = async () => {
        const { department } = JSON.parse(await AsyncStorage.getItem('user'));

        setFilters({
            ...filters,
            department: department,
        });
    }

    const displayTickets = async () => {
        const { data } = await axios
            .post(`${API_URL}/ticket/get-ticket`, { ...filters })
            .catch(({ response }) => {
                const { data } = response;

                console.log(data);
                if (response.status !== '500')
                    alert(data.message, 'error');
            });

        setTicketsArray([...data]);
    }

    const selectTicket = (_uid = '') => {
        if (!_uid) return;

        let ticketSelected = ticketsArray.find(({ uid }) => uid === _uid);
        setActiveTicket({ ...ticketSelected });
        setModalTicket(true);
    }

    return (
        <View style={{ justifyContent: 'center', height: '100%' }}>
            <Loading ticketsArray={ticketsArray} selectTicket={selectTicket} />

            <TicketModal isVisible={modalTicket} handleModal={setModalTicket} {...activeTicket} />
        </View>

    );
}

export default TicketsList;
