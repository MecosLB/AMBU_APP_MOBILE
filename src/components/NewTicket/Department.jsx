import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const DEPARTMENT = [
    {
        name: 'forestal', _id: '663fc6c8e9a623f71c2e293f'
    },
    {
        name: 'electricidad', _id: '663fc79fe9a623f71c2e2941'
    },
    {
        name: 'ecosistemas', _id: '663fcd4fe9a623f71c2e2943'
    },
    {
        name: 'infraestructura', _id: '663fcd59e9a623f71c2e2945'
    },
    {
        name: 'servicios externos', _id: '663fcd65e9a623f71c2e2947'
    },
    {
        name: 'seguridad', _id: '663fcd71e9a623f71c2e2949'
    },
    {
        name: 'eventos', _id: '663fcd78e9a623f71c2e294b'
    }
]

const DepartmentSelected = ({ department, setDepartment, isSelected = false, styles, handleSubmit }) => {
    if (!isSelected)
        return (
            <>
                <Picker
                    selectedValue={department}
                    onValueChange={val => setDepartment(val)}
                    style={styles.select}
                >
                    {DEPARTMENT.map(({ _id, name }) => {
                        return (
                            <Picker.Item key={_id} label={name[0].toUpperCase() + name.slice(1)} value={JSON.stringify({ id: _id, name: name })} color="#fff" textTransform="capitalize" />
                        );
                    })}
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
            <FontAwesome6 name="building" size={24} color="#fff" />

            <Text style={styles.optionSelected}>
                {JSON.parse(department).name}
            </Text>
        </View>
    );
}

const Department = ({ styles, currentTicket, addToTicket, nextStep, isSelected }) => {
    const [department, setDepartment] = useState('');

    // General functions
    const handleSubmit = () => {
        addToTicket({
            ...currentTicket,
            department: JSON.parse(department).id,
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

            <DepartmentSelected department={department} setDepartment={setDepartment} isSelected={isSelected} styles={styles} handleSubmit={handleSubmit} />
        </FadeInGlobe>
    );
}

export default Department;
