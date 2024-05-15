import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const CATEGORIES = [
    {
        "_id": "6644385c2cd35d7bc961699a",
        "name": "flora y fauna",
        "department": "663fc6c8e9a623f71c2e293f"
    },
    {
        "_id": "664439082cd35d7bc961699c",
        "name": "plaga",
        "department": "663fc6c8e9a623f71c2e293f"
    },
    {
        "_id": "6644393b2cd35d7bc961699e",
        "name": "árbol",
        "department": "663fc6c8e9a623f71c2e293f"
    },
    {
        "_id": "66443a012cd35d7bc96169a0",
        "name": "postes",
        "department": "663fc79fe9a623f71c2e2941"
    },
    {
        "_id": "66443a1d2cd35d7bc96169a2",
        "name": "cableado",
        "department": "663fc79fe9a623f71c2e2941"
    },
    {
        "_id": "66443a5e2cd35d7bc96169a4",
        "name": "bombilla",
        "department": "663fc79fe9a623f71c2e2941"
    },
    {
        "_id": "66443b252cd35d7bc96169a6",
        "name": "especies invasoras",
        "department": "663fcd4fe9a623f71c2e2943"
    },
    {
        "_id": "66443b6b2cd35d7bc96169a8",
        "name": "biodiversidad",
        "department": "663fcd4fe9a623f71c2e2943"
    },
    {
        "_id": "66443b852cd35d7bc96169aa",
        "name": "contaminación",
        "department": "663fcd4fe9a623f71c2e2943"
    },
    {
        "_id": "66443bba2cd35d7bc96169ac",
        "name": "instalaciones",
        "department": "663fcd59e9a623f71c2e2945"
    },
    {
        "_id": "66443bde2cd35d7bc96169ae",
        "name": "accesos",
        "department": "663fcd59e9a623f71c2e2945"
    },
    {
        "_id": "66443bf62cd35d7bc96169b0",
        "name": "drenaje",
        "department": "663fcd59e9a623f71c2e2945"
    },
    {
        "_id": "66443c4b2cd35d7bc96169b2",
        "name": "recolección residuos",
        "department": "663fcd65e9a623f71c2e2947"
    },
    {
        "_id": "66443c702cd35d7bc96169b4",
        "name": "mantenimiento externo",
        "department": "663fcd65e9a623f71c2e2947"
    },
    {
        "_id": "66443c962cd35d7bc96169b6",
        "name": "programas y educación",
        "department": "663fcd65e9a623f71c2e2947"
    },
    {
        "_id": "66443ce12cd35d7bc96169b8",
        "name": "cámaras de vigilancia",
        "department": "663fcd71e9a623f71c2e2949"
    },
    {
        "_id": "66443cf72cd35d7bc96169ba",
        "name": "robos",
        "department": "663fcd71e9a623f71c2e2949"
    },
    {
        "_id": "66443d132cd35d7bc96169bc",
        "name": "seguridad",
        "department": "663fcd71e9a623f71c2e2949"
    },
    {
        "_id": "66443d502cd35d7bc96169be",
        "name": "impacto ambiental",
        "department": "663fcd78e9a623f71c2e294b"
    },
    {
        "_id": "66443d6f2cd35d7bc96169c0",
        "name": "uso público",
        "department": "663fcd78e9a623f71c2e294b"
    },
    {
        "_id": "66443da52cd35d7bc96169c2",
        "name": "salud pública",
        "department": "663fcd78e9a623f71c2e294b"
    }
]

let deptCategories;

const CategorySelected = ({ category, setCategory, isSelected = false, styles, handleSubmit, currentTicket }) => {
    deptCategories = [...CATEGORIES].filter(({ department }) => department === currentTicket.department);

    if (!isSelected)
        return (
            <>
                <Picker
                    selectedValue={category}
                    onValueChange={val => setCategory(val)}
                    style={styles.select}
                >
                    {deptCategories.map(({ _id, name }) => {
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
            <Ionicons name="grid" size={24} color="#fff" />

            <Text style={styles.optionSelected}>
                {JSON.parse(category).name}
            </Text>
        </View>
    );
}

const Category = ({ styles, isCurrentStep, currentTicket, addToTicket, nextStep, isSelected }) => {
    const [category, setCategory] = useState('');

    if (!isCurrentStep) return;

    // General functions
    const handleSubmit = () => {
        addToTicket({
            ...currentTicket,
            category: JSON.parse(category).id,
        });

        nextStep(true);
    }

    return (
        <FadeInGlobe style={[styles.globe, styles.bgMain, { marginBottom: 24 }]}>
            <View style={[styles.globeDecorator, styles.bgMain]}></View>

            <Text style={styles.globeText}>
                Selecciona la
                <Text style={styles.semibold}> categoría</Text>
            </Text>

            <CategorySelected category={category} setCategory={setCategory} isSelected={isSelected} styles={styles} handleSubmit={handleSubmit} currentTicket={currentTicket} />
        </FadeInGlobe>
    );
}

export default Category;
