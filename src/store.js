import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './features/converter/converterSlice.js';

export const store = configureStore({
    reducer: {
        converter: converterReducer,
    },
});