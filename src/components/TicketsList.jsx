import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import TicketItem from './TicketItem.jsx';
import TicketModal from './TicketModal.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../data/api.js';
import FiltersModal from './FiltersModal.jsx';
import Toast from 'react-native-toast-message';

const alert = (msg, type = 'success') => {
    const titleDict = {
        success: 'Éxito',
        error: 'Error',
        info: 'Notifición',

    }

    if (!msg) return;

    return Toast.show({
        type: type,
        text1: titleDict[type],
        text2: msg,
    });
}

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

const TicketsList = ({ modalFilter, setModalFilter }) => {
    // Tickets
    const [ticketsArray, setTicketsArray] = useState([]);
    const [activeTicket, setActiveTicket] = useState({});
    // Filters
    const [filters, setFilters] = useState({});
    // Modal
    const [modalTicket, setModalTicket] = useState(false);

    // Filter tickets each time a filter change
    useEffect(() => {
        displayTickets();
    }, [filters]);

    const displayTickets = async () => {
        setTicketsArray([]);
        const { department_data } = JSON.parse(await AsyncStorage.getItem('user'));

        const { data } = await axios
            .post(`${API_URL}/ticket/get-ticket`, { ...filters, department: department_data._id })
            .catch(({ response }) => {
                const { data } = response;

                if (response.status !== '500')
                    alert(data.message, 'error');
            });

        setTicketsArray([...data]);

        if (!data.length)
            return alert('No hay resultados para esta búsqueda por el momento', 'error');
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

            <FiltersModal isVisible={modalFilter} handleModal={setModalFilter} filters={filters} setFilters={setFilters} />
        </View>

    );
}

export default TicketsList;
