import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Camera = ({ isVisible, setVisible, evidenceArray, addEvidence }) => {
    // Camera
    let camera;
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        if (!permission)
            return;

        if (!permission.granted)
            requestPermission();
    }, [permission]);

    // General functions
    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const takePicture = async () => {
        if (!camera) return;

        let { uri, base64 } = await camera.takePictureAsync({ base64: true });
        uri = uri.split('/');
        uri = uri.pop();

        const imgObj = { name: uri, data: base64, type: "image" };

        addEvidence(
            [...evidenceArray, imgObj]
        );
        // setVisible(false);
    }

    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <CameraView facing={facing} style={styles.camera} ref={r => { camera = r }}>
                {/* <View style={{ backgroundColor: 'red', flex: 1 }}> */}
                <TouchableOpacity onPress={toggleCameraFacing}>
                    <FontAwesome6 name="camera-rotate" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity onPress={takePicture}>
                    <FontAwesome6 name="camera" size={60} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setVisible(false)}>
                    <FontAwesome6 name="times-circle" size={30} color="#fff" />
                </TouchableOpacity>
                {/* </View> */}
            </CameraView>
        </Modal>
    );
}


const styles = StyleSheet.create({
    camera: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 60,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Camera;
