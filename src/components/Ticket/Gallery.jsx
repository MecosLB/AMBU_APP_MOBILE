import React, { useRef } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const Gallery = ({ evidence }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();

    if (!evidence.length) return;

    return (
        <View style={{ marginBottom: 40 }}>
            <Text style={styles.title}>
                Archivos adjuntos
            </Text>

            <View style={styles.container}>
                <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX,
                                },
                            },
                        }], { useNativeDriver: false, }
                    )} scrollEventThrottle={1}>
                    {evidence.map(({ data }, index) => {
                        return (
                            <View key={index} style={[styles.card, { width: windowWidth - 40 }]}>
                                <Image source={{ uri: `data:image/png;base64,${data}` }} style={styles.img} />
                            </View>
                        );
                    })}
                </ScrollView>

                <View style={styles.indicatorContainer}>
                    {
                        evidence.map((imgSrc, index) => {
                            const width = scrollX.interpolate({
                                inputRange: [
                                    windowWidth * (index - 1),
                                    windowWidth * index,
                                    windowWidth * (index + 1),
                                ],
                                outputRange: [8, 16, 8],
                                extrapolate: 'clamp',
                            });
                            return (
                                <Animated.View
                                    key={index}
                                    style={[styles.normalDot, { width }]}
                                />
                            );
                        })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 280,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#333333',
        marginBottom: 8,
    },
    card: {
        height: 250,
    },
    img: {
        flex: 1,
        marginHorizontal: 8,
        borderRadius: 5,
        objectFit: 'contain',
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#3DA891',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Gallery;
