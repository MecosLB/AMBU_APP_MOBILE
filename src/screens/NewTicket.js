import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from "react-native";
import TopBar from '../components/TopBar';
import Department from '../components/NewTicket/Department';
import Category from '../components/NewTicket/Category';
import Title from '../components/NewTicket/Title';
import { useFocusEffect } from '@react-navigation/native';
import Priority from '../components/NewTicket/Priority';

export default function NewTicket({ navigation }) {
    // Reset screen
    const [entered, setEntered] = useState(true);
    // Ticket steps
    const [categoryStep, inCategoryStep] = useState(false);
    const [priorityStep, inPriorityStep] = useState(false);
    const [evidenceStep, inEvidenceStep] = useState(false);
    // Ticket info
    const [ticketInfo, setTicketInfo] = useState({});

    useFocusEffect(
        React.useCallback(() => {
            setEntered(true);

            return () => {
                // Restart all states
                setEntered(false);
                setTicketInfo({});
                inCategoryStep(false);
                inPriorityStep(false);
            }
        }, [])
    );

    // TESTIN LOG ONLY
    useEffect(() => {
        console.log(ticketInfo);
    }, [ticketInfo]);

    if (!entered) return;

    return (
        <View style={{ flexGrow: 1, backgroundColor: '#fff' }}>
            <TopBar />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Title />

                <Department styles={styles} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inCategoryStep} isSelected={categoryStep} />

                <Category styles={styles} isCurrentStep={categoryStep} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inPriorityStep} isSelected={priorityStep} />

                <Priority styles={styles} isCurrentStep={priorityStep} currentTicket={ticketInfo} addToTicket={setTicketInfo} nextStep={inEvidenceStep} isSelected={evidenceStep} />
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
    }
});