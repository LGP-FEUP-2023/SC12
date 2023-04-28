import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { COLOR } from '../constants/colors'
import {
    Alert,
    Linking,
    Dimensions,
    LayoutAnimation,
    Text,
    View,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Button,
} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import { StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SessionScanner = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setResult(data);
    };

    const handleScanAgain = () => {
        setScanned(false);
        setResult('');
    };

    if (hasPermission === null) {
        return <Text>Requesting camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {scanned ? (
                <>
                    <Text style={styles.resultText}>Result: {result}</Text>
                    <Button title="Scan Again" onPress={handleScanAgain} />
                </>
            ) : (
                <View
                    style={{
                        backgroundColor: 'black',
                        height: Dimensions.get('window').height,
                        width: '150%',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <BarCodeScanner
                        style={[[StyleSheet.absoluteFillObject]]}
                        onBarCodeScanned={handleBarCodeScanned}
                    />

                    <View style={styles.overlayContainer}>
                        <Text style={styles.overlayText}>Scan session QR code</Text>
                    </View>



                    <BarcodeMask edgeColor={'#FFFFFF'} showAnimatedLine={false} outerMaskOpacity={0.2} height={270} width={270} />

                    <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())} style={[styles.closeButton, { bottom: 25 }]}>
                        <Icon name={'close'} color={COLOR.white} size={BUTTON_SIZE / 2} />
                    </TouchableOpacity>

                </ View>
            )}
        </View>
    );
}

export default SessionScanner

const BUTTON_SIZE = 50
const BORDER_WIDTH = 1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        marginVertical: 10,
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },
    overlayContainer: {
        top: 100,
        backgroundColor: COLOR.gray,
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 20,
        position: 'absolute',
    },
    overlayText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    closeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: BUTTON_SIZE + BORDER_WIDTH,
        height: BUTTON_SIZE + BORDER_WIDTH,
        borderWidth: BORDER_WIDTH,
        borderRadius: BUTTON_SIZE / 2,
        backgroundColor: COLOR.gray,
        borderColor: COLOR.gray,
        position: 'absolute',
    }
});
