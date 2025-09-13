import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import DonorSlice from './DonorSlice';

const store = configureStore({
    reducer: {
        user : UserSlice,
        donor: DonorSlice
    }
});

export default store;

