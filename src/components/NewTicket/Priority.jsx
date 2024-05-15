import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const PrioritySelected = ({ priority, setPriority, isSelected = false, styles, handleSubmit }) => {
    if (!isSelected)
        return (
            <>
                <Picker
                    selectedValue={priority}
                    onValueChange={val => setPriority(val)}
                    style={styles.select}
                >
                    <Picker.Item label="Baja" value="Baja" color="#fff" />
                    <Picker.Item label="Media" value="Media" color="#fff" />
                    <Picker.Item label="Alta" value="Alta" color="#fff" />
                </Picker>

                <TouchableHighlight style={{ alignItems: 'flex-end' }} activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={handleSubmit}>
                    <FontAwesome6 name="circle-arrow-right" size={32} color="#fff" />
                </TouchableHighlight>
            </>
        );

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
        }}>
            <FontAwesome6 name="triangle-exclamation" size={24} color="#fff" />

            <Text style={styles.optionSelected}>
                {priority}
            </Text>
        </View>
    );
}

const Priority = ({ styles, isCurrentStep, currentTicket, addToTicket, nextStep, isSelected }) => {
    const [priority, setPriority] = useState('Baja');

    if (!isCurrentStep) return;

    // General functions
    const handleSubmit = () => {
        addToTicket({
            ...currentTicket,
            priority: priority,
        });

        nextStep(true);
    }

    return (
        <FadeInGlobe style={[styles.globe, styles.bgMain, { marginBottom: 24 }]}>
            <View style={[styles.globeDecorator, styles.bgMain]}></View>

            <Text style={styles.globeText}>
                Selecciona la
                <Text style={styles.semibold}> prioridad</Text>
            </Text>

            <PrioritySelected priority={priority} setPriority={setPriority} isSelected={isSelected} styles={styles} handleSubmit={handleSubmit} />
        </FadeInGlobe>
    );
}

export default Priority;
