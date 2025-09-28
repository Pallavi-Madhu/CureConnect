import {createSlice} from '@reduxjs/toolkit';
import { ToastAndroid } from "react-native";
import {submitPatient} from "./PatientThunk";

const patientSlice= createSlice({
    name: "patient",
    initialState:{
        patient: null,
        loading: false,
        error: null,
    },
    reducers: {},

extraReducers: (builder) => {
    builder
        .addCase(submitPatient.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(submitPatient.fulfilled, (state, action) => {
            state.loading =false;
            state.patient = action.payload;
            ToastAndroid.show("Patient registered successfully", ToastAndroid.SHORT);
        })
        .addCase(submitPatient.rejected, (state, action) => {
            state.loading = false;
            state.error =action.payload;
            ToastAndroid.show(`Error: ${action.payload}`, ToastAndroid.LONG);
        });
},
});

export default patientSlice.reducer;