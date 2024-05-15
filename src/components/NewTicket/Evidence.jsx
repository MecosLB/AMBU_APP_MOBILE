import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FadeInGlobe from './FadeInGlobe';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';
import Camera from './Camera';
import Gallery from './Gallery';

const CameraButton = ({ isSelected, styles, setModalCamera }) => {
    if (!isSelected)
        return (
            <TouchableHighlight onPress={() => setModalCamera(true)} style={[styles.btnAction, { marginTop: 8 }]} activeOpacity={1} underlayColor={'#DFE38B'}>
                <View style={[styles.flexCenter, { justifyContent: 'center' }]}>
                    <FontAwesome6 name="camera" size={24} color="#333" />

                    <Text style={styles.btnText}>Cámara</Text>
                </View>
            </TouchableHighlight>
        );
}

const NextButton = ({ isSelected, handleSubmit }) => {
    if (!isSelected)
        return (
            <TouchableHighlight style={{ alignItems: 'flex-end' }} activeOpacity={1} underlayColor={'rgba(0,0,0,0)'} onPress={handleSubmit}>
                <FontAwesome6 name="circle-arrow-right" size={32} color="#fff" />
            </TouchableHighlight>
        );
}

const Evidence = ({ styles, isCurrentStep, currentTicket, addToTicket, nextStep, isSelected }) => {
    const [evidence, setEvidence] = useState([]);
    // Camera Modal
    const [modalCamera, setModalCamera] = useState(false);

    if (!isCurrentStep) return;

    // General functions
    const handleSubmit = () => {
        addToTicket({
            ...currentTicket,
            evidence: [...evidence],
        });

        nextStep(true);
    }

    return (
        <FadeInGlobe style={[styles.globe, styles.bgMain, { marginBottom: 24 }]}>
            <View style={[styles.globeDecorator, styles.bgMain]}></View>

            <Text style={styles.globeText}>
                Adjunta la
                <Text style={styles.semibold}> evidencia </Text>
                necesaria (opcional)
            </Text>

            <CameraButton isSelected={isSelected} styles={styles} setModalCamera={setModalCamera} />

            <Gallery styles={styles} evidenceArray={evidence} />

            <NextButton isSelected={isSelected} handleSubmit={handleSubmit} />

            <Camera isVisible={modalCamera} setVisible={setModalCamera} evidenceArray={evidence} addEvidence={setEvidence} />
        </FadeInGlobe>
    );
}

export default Evidence;
