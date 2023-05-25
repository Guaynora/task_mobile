import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: TasksReducerType = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<TaskType>) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const {setTask} = taskSlice.actions;
export default taskSlice.reducer;
