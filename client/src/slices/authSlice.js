import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    username:'',
    role:'',
   
    isLoggedIn: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state,action) => {
        state.isLoggedIn = true;
        state.username=action.payload.username;
        state.role=action.payload.role;
       
      },
      logout: (state) => {
        state.isLoggedIn = false;
        state.username='';
        state.role='';
        state.email=''
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  export default authSlice.reducer;
