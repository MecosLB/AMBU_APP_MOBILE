import React from 'react';
import Constants from 'expo-constants';
import { Modal, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Header from './Ticket/Header';
import Description from './Ticket/Description';
import Gallery from './Ticket/Gallery';
import Location from './Ticket/Location';

const TicketModal = ({ isVisible, handleModal, uid = '', department_data: department = {}, category = '', evidence = [], state = '', comment = '', coordinates = { lat: '0', lng: '0' } }) => {
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <View style={styles.modal}>
                <TouchableHighlight activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={() => handleModal(false)}>
                    <FontAwesome6 name="times-circle" style={styles.closeBtn} />
                </TouchableHighlight>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header uid={uid} department={department.name} category={category} evidence={evidence} state={state} />

                    <Description comment={comment} />

                    <Gallery evidence={evidence} />

                    <Location coordinates={coordinates} />
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        maxWidth: '100%',
        flexGrow: 1,
        marginTop: Constants.statusBarHeight + 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingBottom: 60,
        paddingHorizontal: 20,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOpacity: 0.5,
        elevation: 5,
    },
    closeBtn: {
        fontSize: 30,
        marginStart: 'auto',
        color: '#dc3545',
        marginVertical: 15,
    },
    actionBtn: {
        borderRadius: 8,
        padding: 15,
        marginBottom: 50,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

export default TicketModal;