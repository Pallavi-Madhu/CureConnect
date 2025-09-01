import { ToastAndroid } from "react-native";
import {submitDonor} from "./DonorThunk";

const donorSlice= createSlice({
    name: "donor",
    initialState:{
        donor: null,
        loading: false,
        error: null,
    },
    reducers: {},

extraReducers: (builder) => {
    builder
        .addCase(submitDonor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(submitDonor.fulfilled, (state, action) => {
            state.loading =false;
            state.patient = action.payload;
            ToastAndroid.show("Donor registered successfully", ToastAndroid.SHORT);
        })
        .addCase(submitDonor.rejected, (state, action) => {
            state.loading = false;
            state.error =action.payload;
            ToastAndroid.show(`Error: ${action.payload}`, ToastAndroid.LONG);
        });
},
});

export default donorSlice.reducer;