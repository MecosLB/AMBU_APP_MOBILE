import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const CATEGORIES = [
    'fontaneria',
    'electricidad',
    'seguridad',
    'estancias infantiles',
    'forestal',
];

const CategorySelected = ({ category, setCategory, isSelected = false, styles, handleSubmit }) => {
    if (!isSelected)
        return (
            <>
                <Picker
                    selectedValue={category}
                    onValueChange={val => setCategory(val)}
                    style={styles.select}
                >
                    {CATEGORIES.map((category, index) => {
                        return (
                            <Picker.Item key={index} label={category[0].toUpperCase() + category.slice(1)} value={JSON.stringify({ id: index, name: category })} color="#fff" textTransform="capitalize" />
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

            <CategorySelected category={category} setCategory={setCategory} isSelected={isSelected} styles={styles} handleSubmit={handleSubmit} />
        </FadeInGlobe>
    );
}

export default Category;
