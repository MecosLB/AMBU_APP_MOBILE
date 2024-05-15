import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Description = ({ comment }) => {
    if (!comment) return;

    return (
        <View style={{ marginBottom: 40 }}>
            <Text style={styles.title}>
                Descripción de la incidencia
            </Text>

            <View style={[styles.globe, styles.bgGrey, { marginStart: 10 }]}>
                <View style={[styles.globeDecorator, styles.bgGrey]}></View>

                <Text style={styles.textRegular}>
                    {comment}
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        color: '#333333',
        marginBottom: 8,
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold'
    },
    globe: {
        padding: 10,
        borderRadius: 8,
    },
    globeDecorator: {
        width: 15,
        position: 'absolute',
        bottom: 10,
        transform: [{ rotate: '45deg' }],
        left: -5,
        aspectRatio: 1,
        backgroundColor: 'red',
        elevation: -1,
    },
    bgGrey: {
        backgroundColor: '#E6E6E6',
    },
    textRegular: {
        fontFamily: 'Montserrat_400Regular'
    }

});

export default Description;
