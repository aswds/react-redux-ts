import { userSlice } from "./UserSlice";
import { AppDispatch } from "./../index";
import { IUser } from "./../../models/IUser";
import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching);
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e: unknown) {
//     const error = e as AxiosError;

//     dispatch(userSlice.actions.usersFetchingError(error.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
