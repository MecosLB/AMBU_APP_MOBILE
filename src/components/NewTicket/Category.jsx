import React from 'react';
import { Text, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';

const Category = ({ styles, isCurrentStep }) => {
    if (!isCurrentStep) return;

    return (
        <FadeInGlobe style={[styles.globe, styles.bgMain]}>
            <View style={[styles.globeDecorator, styles.bgMain]}></View>

            <Text style={styles.globeText}>
                Selecciona la
                <Text style={styles.semibold}> categoría</Text>
            </Text>

            <TouchableHighlight style={{ alignItems: 'flex-end' }} activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={() => {
                console.log('next')
            }}>
                <FontAwesome6 name="circle-arrow-right" size={32} color="#fff" />
            </TouchableHighlight>
        </FadeInGlobe>
    );
}

export default Category;
