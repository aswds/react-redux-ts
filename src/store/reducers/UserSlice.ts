import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./../../models/IUser";
import { fetchUsers } from "./ActoinCreators";
interface UserSlice {
  users: IUser[];
  isLoading: boolean;
  error: null | string;
}

const initialState: UserSlice = {
  users: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersFetching: (state) => {},
    usersFetchingSuccess: (state, action: PayloadAction<IUser[]>) => {},
    usersFetchingError: (state, action: PayloadAction<string>) => {},
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
