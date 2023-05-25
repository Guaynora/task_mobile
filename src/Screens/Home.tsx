import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <CustomButton
        testId="taskButton"
        text="Task"
        onPress={() => navigation.navigate('Task')}
      />
      <CustomButton
        testId="listButton"
        text="List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
