import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Title = () => {
    return (
        <View style={styles.container}>
            <FontAwesome6 name="ticket" style={styles.icon} />

            <Text style={styles.text}>
                Registrar incidencia
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 32,
    },
    icon: {
        fontSize: 28,
        color: '#3DA891'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#333'
    },
});

export default Title;
