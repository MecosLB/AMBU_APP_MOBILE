import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const statusStyles = {
    'activo': {
        icon: { color: '#198754' },
        container: {
            backgroundColor: 'rgba(117, 183, 152, 0.5)', maxWidth: 100,
        }
    },
    'seguimiento': {
        icon: { color: '#ffc107' },
        container: {
            backgroundColor: 'rgba(255, 218, 106, 0.5)', maxWidth: 150,
        }
    },
    'concluido': {
        icon: { color: '#dc3545' },
        container: { backgroundColor: 'rgba(234, 134, 143, 0.5)', maxWidth: 130 }
    },
}

const Status = ({ state }) => {
    return (
        <View style={[styles.status, statusStyles[state].container]}>
            <FontAwesome6 name="dot-circle" style={[styles.statusIcon, statusStyles[state].icon]} />

            <Text style={[styles.statusText]} numberOfLines={1}>
                {state}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 100,
    },
    statusText: {
        fontSize: 14,
        fontFamily: 'Montserrat_600SemiBold',
        textTransform: 'capitalize',
    },
    statusIcon: {
        fontSize: 20,
    },
});

export default Status;
