import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Status from './Status';

const priorityColor = {
    baja: '#198754',
    media: '#ffc107',
    alta: '#dc3545',
}

const Header = ({ uid, department, category, evidence, state, priority }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: evidence[0] ? `data:image/png;base64,${evidence[0].data}` : 'https://dummyimage.com/600x600/fafafa/000000' }} style={styles.icon} />

            <View style={{ maxWidth: '67%' }}>
                <Text style={styles.subTitle}>
                    {uid} -
                    <Text style={{ color: `${priorityColor[priority.toLowerCase()]}` }}> {priority}</Text>
                </Text>
                <Text style={styles.title} numberOfLines={2}>
                    {`${department} - ${category}`}
                </Text>

                <Status state={state} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 40,
    },
    icon: {
        width: '100%',
        maxWidth: '30%',
        aspectRatio: 1,
        borderRadius: 500,
        borderColor: '#3DA891',
        borderWidth: 1,
    },
    subTitle: {
        fontSize: 12,
        color: '#3DA891',
        textTransform: "uppercase",
        fontFamily: 'Montserrat_800ExtraBold'
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#333333',
        marginBottom: 10,
    },
});

export default Header;