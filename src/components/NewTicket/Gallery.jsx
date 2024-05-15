import React from 'react';
import { Image, View } from 'react-native';

const Gallery = ({ styles, evidenceArray }) => {
    if (![...evidenceArray].length) return;

    return (
        <View style={[styles.flexCenter, { justifyContent: 'center', marginVertical: 8 }]}>
            {
                evidenceArray.map(({ data, name }) => {
                    return (
                        <Image key={name} source={{ uri: `data:image/png;base64,${data}` }} style={{ width: 70, aspectRatio: 1 }} />
                    );
                })
            }
        </View>
    );
}

export default Gallery;
