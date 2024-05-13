import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Location = ({ coordinates = { lat: 20.659698, lng: -103.349609 } }) => {
    const INITIAL_REGION = {
        latitude: coordinates.lat,
        longitude: coordinates.lng,
        latitudeDelta: 1,
        longitudeDelta: 1,
    }

    return (
        <View style={{ marginBottom: 40 }}>
            <Text style={styles.title}>
                Localización de la incidencia
            </Text>

            <MapView style={{ width: '100%', height: 280, borderRadius: 8 }} showsUserLocation={true} loadingEnabled={true} scrollEnabled={false} initialRegion={INITIAL_REGION} minZoomLevel={13} maxZoomLevel={15}>
                <Marker coordinate={{
                    latitude: coordinates.lat,
                    longitude: coordinates.lng,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                    name: 'Incidencia',
                }} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#333333',
        marginBottom: 8,
    },
});

export default Location;
