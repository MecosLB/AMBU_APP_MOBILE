import React from 'react';
import Constants from 'expo-constants';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/img/topbar-logo.png';
import { FontAwesome6 } from '@expo/vector-icons';

const Search = ({ isActive }) => {
    if (!isActive) return;

    return (
        <Text style={styles.options}>
            <FontAwesome6 name="filter" size={20} color="#fff" />
        </Text>
    );
}

const TopBar = ({ searchActive = false }) => {
    return (
        <View style={[styles.topBar, styles.flexRow]}>
            <Image source={Logo} style={styles.logo} />

            <View style={styles.flexRow}>
                <Search isActive={searchActive} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: '#3DA891',
    },
    flexRow: {
        flexDirection: 'row',
        gap: 22,
    },
    options: {
        color: '#fff',
        fontWeight: 'bold',
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        // flex: 1,
    }
});

export default TopBar;
