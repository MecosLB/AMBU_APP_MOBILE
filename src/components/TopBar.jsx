import React from 'react';
import Constants from 'expo-constants';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Logo from '../../assets/img/topbar-logo.png';
import { FontAwesome6 } from '@expo/vector-icons';

const Search = ({ isActive, handler }) => {
    if (!isActive) return;

    return (
        <TouchableHighlight activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={() => handler(true)}>
            <FontAwesome6 name="filter" size={20} color="#fff" />
        </TouchableHighlight>
    );
}

const TopBar = ({ searchActive = false, handleModal }) => {
    return (
        <View style={[styles.topBar, styles.flexRow]}>
            <Image source={Logo} style={styles.logo} />

            <View style={styles.flexRow}>
                <Search isActive={searchActive} handler={handleModal} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: '#3DA891',
        zIndex: 100,
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
