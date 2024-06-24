import { createSlice } from '@reduxjs/toolkit';

export const converterSlice = createSlice({
    name: 'conventer',
    initialState: {
        EURO: '',
        USD: '',
    },
    reducers: {
        convertToEuro: (state, action) => {
            state.EURO = (parseFloat(action.payload) / 1.07).toFixed(2);
        },
        convertToUsd: (state, action) => {
            state.USD = (parseFloat(action.payload) * 1.07).toFixed(2);
        },
        setEuro: (state, action) => {
            state.EURO = action.payload;
        },
        setUsd: (state, action) => {
            state.USD = action.payload;
        },
    },
});

export const { convertToEuro, convertToUsd, setEuro, setUsd } = converterSlice.actions;

export default converterSlice.reducer;