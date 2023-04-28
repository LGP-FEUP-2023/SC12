import styles from '../styles/main-page.style'
import { COLOR } from '../constants/colors';

import React from 'react';
import { SafeAreaView, TextInput } from 'react-native'

const FormTextInput = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.formTextInput}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email or username"
        placeholderTextColor={COLOR.lightGray}
      />
    </SafeAreaView>
  );
};


export default FormTextInput;
