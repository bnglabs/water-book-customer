import {createSlice} from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: 'Bilal Raza',
    },
  },
  reducers: {
    changeName: (state, name) => {
      state.user.name += name;
    },
  },
});

export const {changeName} = auth.actions;

export default auth.reducer;
