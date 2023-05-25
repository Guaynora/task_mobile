import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {setTask} from '../store/reducers/task-reducers';
import type {RootState} from '../store/store-root';

const Task = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handlePress = () => {
    if (newTask !== '') {
      dispatch(setTask({description: newTask}));
      setModalVisible(false);
    } else {
      Alert.alert('Error!', 'No puedes crear una tarea vacia', [
        {text: 'OK', onPress: () => {}},
      ]);
    }
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <CustomButton
        testId="showModal"
        text="New Task"
        onPress={() => setModalVisible(true)}
      />
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.text}>{task.description}</Text>
          </View>
        ))
      ) : (
        <View>
          <Text style={styles.textCenter}>Sin tareas por mostrar</Text>
        </View>
      )}
      <Modal
        testID="modal"
        animationType="fade"
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(true)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              style={styles.input}
            />
            <CustomButton testId="addTask" text="Add" onPress={handlePress} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 12,
    width: 250,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    width: 250,
    borderRadius: 12,
    color: '#000',
  },
  text: {
    color: '#000',
  },
  textCenter: {
    color: '#000',
    textAlign: 'center',
  },
});

export default Task;
