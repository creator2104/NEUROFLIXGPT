import { configureStore } from '@reduxjs/toolkit';
import userReducer from './useSlice'; 
import moviesReducer from './movieslice';
import gptReducer from './GPTSlice';
import configReducer from './configslice';
// u can give any name to the file, but it is recommended to use the name of the slice

const appStore = configureStore({
     reducer: {
            user: userReducer,
            movies:moviesReducer,
            gpt : gptReducer,
            config: configReducer
     }
})
export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;