import React from "react";
import { Image, Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_800ExtraBold, useFonts } from '@expo-google-fonts/montserrat';

const priorityColor = {
    baja: '#198754',
    media: '#ffc107',
    alta: '#dc3545',
}

const TicketItem = ({ uid, department_data: department, category, comment, evidence, priority, handlePress }) => {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_800ExtraBold,
    });

    if (!fontsLoaded)
        return null;

    return (
        <TouchableHighlight activeOpacity={0.9} underlayColor={'#000'} onPress={() => handlePress(uid)}>
            <View key={uid} style={[styles.container]}>
                <Image source={{ uri: evidence[0] ? `data:image/png;base64,${evidence[0].data}` : 'https://dummyimage.com/600x600/fafafa/000000' }} style={styles.icon} />

                <View>
                    <Text style={styles.subTitle}>
                        {uid} -
                        <Text style={{ color: `${priorityColor[priority.toLowerCase()]}` }}> {priority}</Text>
                    </Text>
                    <Text style={styles.title} numberOfLines={1}>
                        {`${department.name} - ${category}`}
                    </Text>
                    <Text style={styles.comments} numberOfLines={2}>
                        {comment}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    active: {
        borderBottomColor: '#3DA891',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 500,
        borderColor: '#3DA891',
        borderWidth: 1,
    },
    subTitle: {
        fontSize: 12,
        color: '#3DA891',
        textTransform: "uppercase",
        fontFamily: 'Montserrat_800ExtraBold'
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#333333',
        paddingEnd: 110,
    },
    comments: {
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular',
        paddingEnd: 110,
    }
});

export default TicketItem;
