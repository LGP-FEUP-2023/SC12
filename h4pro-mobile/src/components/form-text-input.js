import styles from '../styles/login-page.style'
import { COLOR } from '../constants/colors';

import React from 'react';
import { SafeAreaView, TextInput } from 'react-native'

const FormTextInput = ({ placeholder, hide=false }) => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.formTextInput}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={COLOR.lightGray}
        secureTextEntry = {hide}
      />
    </SafeAreaView>
  );
};

export default FormTextInput;

