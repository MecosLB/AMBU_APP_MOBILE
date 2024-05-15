import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Park = ({ park }) => {
    return (
        <View style={styles.park}>
            <FontAwesome6 name="tree" style={styles.parkIcon} />
            <Text style={styles.parkText}>
                {park.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    park: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        borderRadius: 100,
        marginBottom: 10,
    },
    parkText: {
        fontSize: 12,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#333333',
    },
    parkIcon: {
        color: '#198754',
        fontSize: 15,
    },
});

export default Park;
