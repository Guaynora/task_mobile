import {configureStore} from '@reduxjs/toolkit';
import taskReducers from './reducers/task-reducers';

export const store = configureStore({
  reducer: {
    tasks: taskReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
