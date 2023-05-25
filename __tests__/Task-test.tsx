import React from 'react';
import {setTask, taskSlice} from '../src/store/reducers/task-reducers';
import Task from '../src/Screens/Task';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../src/store/store-root';
import {Alert} from 'react-native';

describe('Test in Task Screen', () => {
  it('Should return default state', () => {
    expect(taskSlice.getInitialState()).toEqual({tasks: []});
  });

  it('Add a new task', () => {
    const newTask = 'New Task';
    let state = taskSlice.getInitialState();
    state = taskSlice.reducer(state, setTask({description: newTask}));
    expect(state.tasks.length).toBeGreaterThan(0);
    expect(state.tasks[0]).toEqual({
      description: expect.any(String),
    });
  });

  it('show alert if new task is empty', () => {
    const alertMock = jest.spyOn(Alert, 'alert');

    const component = (
      <Provider store={store}>
        <Task />
      </Provider>
    );

    const screenPage = render(component);

    let newTask = '';

    const showModal = screenPage.getByTestId('showModal');
    fireEvent.press(showModal);
    const modal = screenPage.getByTestId('modal');
    expect(modal.props.visible).toBe(true);
    const addTask = screenPage.getByTestId('addTask');
    fireEvent.press(addTask);
    expect(newTask).toEqual('');
    expect(alertMock).toHaveBeenCalledWith(
      'Error!',
      'No puedes crear una tarea vacia',
      [{text: 'OK', onPress: expect.any(Function)}],
    );
  });

  it('add new task is not empty', () => {
    const component = (
      <Provider store={store}>
        <Task />
      </Provider>
    );

    const screenPage = render(component);

    let newTask = 'Nueva tarea';

    const showModal = screenPage.getByTestId('showModal');
    fireEvent.press(showModal);
    const modal = screenPage.getByTestId('modal');
    expect(modal.props.visible).toBe(true);
    const addTask = screenPage.getByTestId('addTask');
    fireEvent.press(addTask);
    expect(newTask.length).toBeGreaterThan(0);
    let state = taskSlice.getInitialState();
    state = taskSlice.reducer(state, setTask({description: newTask}));
    expect(state.tasks.length).toBeGreaterThan(0);
    expect(state.tasks[0]).toEqual({
      description: expect.any(String),
    });
  });
});
