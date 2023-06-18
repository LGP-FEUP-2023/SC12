import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../AuthContext';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { COLOR } from '../constants/colors'
import styles, { BUTTON_SIZE } from '../styles/main-page.style'
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import { StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const SessionScanner = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const { token, setToken } = useContext(AuthContext);


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        console.log(data)
        // let scanned_token = handleDeepLink({ data });
        // if (scanned_token) {
        //     setToken(scanned_token);
        // }

        // check if the scanned data is a valid token

        // matchId = fetch('https://{endpoint}/match', {
        //   method: 'POST',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        //     'Authorization': accessToken,
        //   },
        //   body: JSON.stringify({
        //     courtId: data,
        //     timestamp: gettime(),
        //   }),
        // }.then(response => response.json())
        // .then(json => {
        //   return json.matchId;
        // })
        // .catch(error => {
        //   console.error(error);
        // });
        if (data.startsWith('h4pro')) {
            setToken(data);
            navigation.navigate('Root', { screen: 'Home', params: { snackbar: true, snackmode: 0 } })
        } else {
            navigation.navigate('Root', { screen: 'Home', params: { snackbar: true, snackmode: 1 } })
        }
    };


    if (hasPermission === null) {
        return <Text>Requesting camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container_scanner}>

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

                <View style={styles.overlayContainer_scanner}>
                    <Text style={styles.overlayText_scanner}>Scan session QR code</Text>
                </View>



                <BarcodeMask edgeColor={'#FFFFFF'} showAnimatedLine={false} outerMaskOpacity={0.2} height={270} width={270} />

                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())} style={[styles.closeButton_scanner, { bottom: BUTTON_SIZE / 2 }]}>
                    <Icon name={'close'} color={COLOR.white} size={25} />
                </TouchableOpacity>

            </ View>

        </View>
    )
}

export default SessionScanner



