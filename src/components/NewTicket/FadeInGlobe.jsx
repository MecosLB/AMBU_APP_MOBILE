import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const FadeInGlobe = (props) => {
    const fadeAnimation = useRef(new Animated.Value(0)).current,
        upAnimation = useRef(new Animated.Value(25)).current;

    useEffect(() => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [fadeAnimation]);

    useEffect(() => {
        Animated.timing(upAnimation, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, [upAnimation]);

    return (
        <Animated.View style={[...props.style, { opacity: fadeAnimation, transform: [{ translateY: upAnimation }] }]}>
            {props.children}
        </Animated.View>
    );
}

export default FadeInGlobe;
