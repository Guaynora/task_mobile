import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({
  text,
  onPress,
  testId,
}: {
  text: string;
  onPress: () => void;
  testId: string;
}) => {
  return (
    <TouchableOpacity testID={testId} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C2DDFC',
    height: 50,
    width: 250,
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
});

export default CustomButton;
