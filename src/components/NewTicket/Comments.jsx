import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';

const NextButton = ({ isSelected, handleSubmit }) => {
    if (!isSelected)
        return (
            <TouchableHighlight style={{ alignItems: 'flex-end' }} activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={handleSubmit}>
                <FontAwesome6 name="circle-arrow-right" size={32} color="#fff" />
            </TouchableHighlight>
        );
}

const Comments = ({ styles, isCurrentStep, currentTicket, addToTicket, nextStep, isSelected }) => {
    const [comments, setComments] = useState('');

    if (!isCurrentStep) return;

    // General functions
    const handleSubmit = () => {
        addToTicket({
            ...currentTicket,
            comment: comments,
        });

        nextStep(true);
    }

    return (
        <FadeInGlobe style={[styles.globe, styles.bgMain, { marginBottom: 24 }]}>
            <View style={[styles.globeDecorator, styles.bgMain]}></View>

            <Text style={styles.globeText}>
                Agrega algunos
                <Text style={styles.semibold}> comentarios </Text>
                adicionales (opcional)
            </Text>

            <View style={[styles.flexCenter, { marginVertical: 10 }]}>
                <FontAwesome6 name="comments" size={20} color="#fff" />
                <TextInput style={styles.inputComments} numberOfLines={1} value={comments} onChangeText={text => setComments(text)} />
            </View>


            <NextButton isSelected={isSelected} handleSubmit={handleSubmit} />
        </FadeInGlobe>
    );
}

export default Comments;
