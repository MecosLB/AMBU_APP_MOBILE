import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from "react-native";
import TopBar from '../components/TopBar';
import Department from '../components/NewTicket/Department';
import Category from '../components/NewTicket/Category';
import Title from '../components/NewTicket/Title';
import { useFocusEffect } from '@react-navigation/native';
import Priority from '../components/NewTicket/Priority';
import Evidence from '../components/NewTicket/Evidence';
import Comments from '../components/NewTicket/Comments';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';
import axios from 'axios';
import { API_URL } from '../data/api';
import Toast from 'react-native-toast-message';
import * as Location from 'expo-location';

const alert = (msg, type = 'success') => {
    const titleDict = {
        success: 'Éxito',
        error: 'Error',
        info: 'Notifición',

    }

    if (!msg) return;

    return Toast.show({
        type: type,
        text1: titleDict[type],
        text2: msg,
    });
}

const Loading = ({ loading }) => {
    if (!loading)
        return (
            <>
                <FontAwesome6 name="paper-plane" size={30} color="#333" />
                <Text style={[styles.btnText, styles.sendText]}>ENVIAR</Text>
            </>
        );

    return (
        <ActivityIndicator size={'small'} color={'#333'} />
    );
}

const SendButton = ({ sendStep, handleSubmit, loading }) => {
    if (!sendStep) return;

    return (
        <TouchableHighlight onPress={handleSubmit} style={[styles.btnAction, { marginBottom: 24 }]} activeOpacity={1} underlayColor={'#DFE38B'}>
            <View style={[styles.flexCenter, { justifyContent: 'center' }]}>
                <Loading loading={loading} />
            </View>
        </TouchableHighlight>
    );
}

export default function NewTicket({ navigation }) {
    // Reset screen
    const [entered, setEntered] = useState(true);
    // Ticket steps
    const [categoryStep, inCategoryStep] = useState(false);
    const [priorityStep, inPriorityStep] = useState(false);
    const [evidenceStep, inEvidenceStep] = useState(false);
    const [commentsStep, inCommentsStep] = useState(false);
    const [sendStep, inSendStep] = useState(false);
    // Ticket info
    const [ticketInfo, setTicketInfo] = useState({});
    // Loader
    const [loading, setLoading] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setEntered(true);

            return () => {
                // Restart all states
                setEntered(false);
                setTicketInfo({});
                inCategoryStep(false);
                inPriorityStep(false);
                inEvidenceStep(false);
                inCommentsStep(false);
                inSendStep(false);
            }
        }, [])
    );

    // General functions
    const sendTicket = async () => {
        setLoading(true);
        const coordinates = await requestLocation();

        // const { data } = await axios
        //     .post(`${API_URL}/ticket`, { ...ticketInfo, coordinates: coordinates })
        //     .catch(({ response }) => {
        //         const { data } = response;

        //         console.log(data);
        //         if (response.status !== '500')
        //             alert(data.message, 'error');
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });

        // console.log(Object.keys(data));
        setLoading(false);
        alert('Incidencia registrada exitosamente', 'success');
        navigation.navigate('Home');
    }

    const requestLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted')
            return alert('Permiso para acceder a la localización denegado', 'error');

        const { coords: coordinates } = await Location.getCurrentPositionAsync({}),
            { latitude: lat, longitude: lng } = coordinates;

        return { lat: lat, lng: lng };
    }

    if (!entered) return;

    return (
        <View style={{ flexGrow: 1, backgroundColor: '#fff', paddingBottom: 125 }}>
            <TopBar />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} ref={ref => { this.scrollView = ref }} onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
                <Title />

                <Department styles={styles} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inCategoryStep} isSelected={categoryStep} />

                <Category styles={styles} isCurrentStep={categoryStep} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inPriorityStep} isSelected={priorityStep} />

                <Priority styles={styles} isCurrentStep={priorityStep} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inEvidenceStep} isSelected={evidenceStep} />

                <Evidence styles={styles} isCurrentStep={evidenceStep} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inCommentsStep} isSelected={commentsStep} />

                <Comments styles={styles} isCurrentStep={commentsStep} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inSendStep} isSelected={sendStep} />

                <SendButton sendStep={sendStep} handleSubmit={sendTicket} loading={loading} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        overflow: 'visible',
    },
    globe: {
        padding: 10,
        borderRadius: 8,
    },
    globeDecorator: {
        width: 15,
        position: 'absolute',
        bottom: 10,
        transform: [{ rotate: '45deg' }],
        left: -5,
        aspectRatio: 1,
        backgroundColor: 'red',
        elevation: -1,
    },
    globeText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
    },
    semibold: {
        fontFamily: 'Montserrat_600SemiBold',
    },
    bgMain: {
        backgroundColor: '#3DA891',
    },
    select: {
        marginTop: -10,
    },
    optionSelected: {
        fontSize: 24,
        fontFamily: 'Montserrat_600SemiBold',
        textDecorationLine: 'underline',
        textTransform: 'capitalize',
        color: '#fff',
        marginVertical: 8,
    },
    btnAction: {
        marginBottom: 10,
        width: 'auto',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#EFF396',
    },
    btnText: {
        fontFamily: 'Montserrat_600SemiBold',
        color: '#333',
    },
    sendText: {
        fontSize: 16,
    },
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    inputComments: {
        flexGrow: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        maxWidth: '85%',
        fontFamily: 'Montserrat_400Regular',
        padding: 10,
    }
});