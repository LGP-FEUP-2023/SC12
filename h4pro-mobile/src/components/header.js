import React from 'react';
import styles from "../styles/main-page.style";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { IMAGES } from "../constants/images";
import { useNavigation } from '@react-navigation/native';

export default function Header({ route, navigation }) {
    // const navigation = useNavigation();
    return (
        <View style={headerStyles.container}>
            <Image style={styles.logo} source={IMAGES.logo} />
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#363636',
        elevation: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});