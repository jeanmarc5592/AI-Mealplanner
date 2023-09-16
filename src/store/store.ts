import { configureStore } from '@reduxjs/toolkit'
import mealPlanSlice from './slices/mealPlanSlice'
import notificationSlice from './slices/notificationSlice'

export const store = configureStore({
  reducer: {
    mealPlans: mealPlanSlice,
    notifications: notificationSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch