import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Park from './Park';

const imgPlaceholder = 'https://imgs.search.brave.com/vNq2jFE3XACsBNx6XivyUP5r0PYaPjic3GaSsrkaloE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc';

const Header = ({ agent_data: agent = {}, img = imgPlaceholder, park_data: park = {}, department_data: department = {} }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.icon} />

            <View style={{ maxWidth: '67%' }}>
                <Park park={park} />

                <Text style={styles.title} numberOfLines={1}>
                    {agent.name}
                </Text>
                <Text style={styles.subTitle} numberOfLines={2}>
                    {`${agent.role} - ${department.name}`}
                </Text>
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
        fontSize: 14,
        color: '#3DA891',
        fontFamily: 'Montserrat_600SemiBold',
        textTransform: 'capitalize',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Montserrat_600SemiBold',
        marginBottom: 5,
        color: '#333333',
    },
});

export default Header;