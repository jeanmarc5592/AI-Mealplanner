import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  text: string;
  isOpen: boolean;
  severity: AlertColor | undefined;
}

const initialState: NotificationState = {
  text: "",
  isOpen: false,
  severity: undefined,
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setSuccessNotification: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.severity = "success";
      state.text = action.payload;
    },
    setErrorNotification: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.severity = "error";
      state.text = action.payload;
    },
    setInfoNotification: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.severity = "info";
      state.text = action.payload;
    },
    setWarningNotification: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.severity = "warning";
      state.text = action.payload;
    },
    hideNotification: (state) => {
      state.isOpen = false;
    }
  }
});

export const { 
  setSuccessNotification, 
  setErrorNotification, 
  setInfoNotification, 
  setWarningNotification,
  hideNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;