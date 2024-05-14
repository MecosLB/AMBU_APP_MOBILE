import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const Department = ({ styles, currentTicket, addToTicket, nextStep }) => {
    const [department, setDepartment] = useState('');

    // General functions
    const handleSubmit = () => {
        addToTicket({
            ...currentTicket,
            department: 'Pruebas',
        });

        nextStep(true);
    }

    return (
        <FadeInGlobe style={[styles.globe, styles.bgMain, { marginBottom: 24 }]}>
            <View style={[styles.globeDecorator, styles.bgMain]}></View>

            <Text style={styles.globeText}>
                Selecciona el
                <Text style={styles.semibold}> departamento</Text>
            </Text>

            <Picker
                selectedValue={department}
                onValueChange={val => setDepartment(val)}
                style={styles.select}
            >
                <Picker.Item label="Todos" value="" color="#fff" />
                <Picker.Item label="Activo" value="activo" color="#fff" />
                <Picker.Item label="Seguimiento" value="seguimiento" color="#fff" />
                <Picker.Item label="Concluido" value="concluido" color="#fff" />
            </Picker>

            <TouchableHighlight style={{ alignItems: 'flex-end' }} activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={handleSubmit}>
                <FontAwesome6 name="circle-arrow-right" size={32} color="#fff" />
            </TouchableHighlight>
        </FadeInGlobe>
    );
}

export default Department;
