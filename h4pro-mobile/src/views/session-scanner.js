import React, { Component } from 'react';
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
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from "expo-camera";
import BarcodeMask from 'react-native-barcode-mask';
import { StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SessionScanner extends Component {
    state = {
        hasCameraPermission: null,
        lastScannedUrl: null,
    };

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            LayoutAnimation.spring();
            this.setState({ lastScannedUrl: result.data });
        }
    };

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                {this.state.hasCameraPermission === null ? (
                    <Text>Requesting for camera permission</Text>
                ) : this.state.hasCameraPermission === false ? (
                    <Text style={{ color: '#fff' }}>
                        Camera permission is not granted
                    </Text>
                ) : (
                    <View
                        style={{
                            backgroundColor: 'black',
                            height: Dimensions.get('window').height,
                            width: Dimensions.get('window').width,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{
                                height: '100%',
                                width: '150%',
                            }}
                        />

                        <View style={styles.overlayContainer}>
                            <Text style={styles.overlayText}>Scan session QR code</Text>
                        </View>



                        <BarcodeMask edgeColor={'#FFFFFF'} showAnimatedLine={false} outerMaskOpacity={0.2} height={270} width={270} />


                        <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())} style={[styles.closeButton, { bottom: 25 }]}>
                            <Icon name={'close'} color={COLOR.white} size={BUTTON_SIZE / 2} />
                        </TouchableOpacity>
                    </View>
                )}

                {this._maybeRenderUrl()}

                <StatusBar hidden />
            </View>
        );
    }

    _handlePressUrl = () => {
        Alert.alert(
            'Open this URL?',
            this.state.lastScannedUrl,
            [
                {
                    text: 'Yes',
                    onPress: () => Linking.openURL(this.state.lastScannedUrl),
                },
                { text: 'No', onPress: () => { } },
            ],
            { cancellable: false }
        );
    };

    _handlePressCancel = () => {
        this.setState({ lastScannedUrl: null });
    };

    _maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return;
        }

        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
                    <Text numberOfLines={1} style={styles.urlText}>
                        {this.state.lastScannedUrl}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={this._handlePressCancel}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const BUTTON_SIZE = 50
const BORDER_WIDTH = 1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
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
