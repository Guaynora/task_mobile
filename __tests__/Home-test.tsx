import React from 'react';
import Home from '../src/Screens/Home';
import {render, fireEvent} from '@testing-library/react-native';

describe('Test in Home Screen', () => {
  it('should go to task screen', () => {
    const navigation = {navigate: jest.fn()};

    const page = render(<Home navigation={navigation} />);

    const taskButton = page.getByTestId('taskButton');

    fireEvent.press(taskButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Task');
  });

  it('should go to list screen', () => {
    const navigation = {navigate: jest.fn()};

    const page = render(<Home navigation={navigation} />);

    const taskButton = page.getByTestId('listButton');

    fireEvent.press(taskButton);

    expect(navigation.navigate).toHaveBeenCalledWith('List');
  });
});
