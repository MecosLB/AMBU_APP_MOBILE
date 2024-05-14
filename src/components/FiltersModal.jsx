import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const FiltersModal = ({ isVisible, handleModal, filters, setFilters }) => {
    // status
    const [status, setStatus] = useState();
    // date
    const [dateFrom, setDateFrom] = useState(new Date());

    // General functions
    const filterTickets = async () => {
        setFilters({
            ...filters,
            state: status,
        });

        handleModal(false);
    }

    return (
        <Modal animationType='fade' transparent={true} visible={isVisible}>
            <View style={styles.bg}>
                <View style={styles.modal}>
                    <TouchableHighlight activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={() => handleModal(false)}>
                        <FontAwesome6 name="times-circle" style={styles.closeBtn} />
                    </TouchableHighlight>

                    <Text style={styles.title}>
                        Estatus de la incidencia
                    </Text>
                    <View style={styles.flexCenter}>
                        <FontAwesome6 name="dot-circle" style={styles.icon} />

                        <Picker
                            selectedValue={status}
                            onValueChange={val => setStatus(val)}
                            style={styles.select}
                        >
                            <Picker.Item label="Todos" value="" />
                            <Picker.Item label="Activo" value="activo" />
                            <Picker.Item label="Seguimiento" value="seguimiento" />
                            <Picker.Item label="Concluido" value="concluido" />
                        </Picker>
                    </View>

                    <TouchableHighlight activeOpacity={1} style={styles.filterBtn} underlayColor={'#1c4f44'} onPress={filterTickets}>
                        <View style={styles.flexCenter}>
                            <FontAwesome6 name="filter" size={24} color={'#fff'} />

                            <Text style={styles.btnText}>
                                Filtrar incidencias
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    bg: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    modal: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOpacity: 0.5,
        elevation: 5,
    },
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    icon: {
        fontSize: 24,
        color: '#333',
        width: '8%',
        textAlign: 'center'
    },
    title: {
        color: '#333333',
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold'
    },
    select: {
        marginTop: -10,
        width: '90%',
    },
    filterBtn: {
        borderRadius: 8,
        padding: 15,
        backgroundColor: '#3DA891',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat_600SemiBold',
    },
    closeBtn: {
        fontSize: 30,
        marginStart: 'auto',
        color: '#dc3545',
        marginBottom: 15,
    },
});

export default FiltersModal;