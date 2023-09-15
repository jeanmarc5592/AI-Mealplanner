import { configureStore } from '@reduxjs/toolkit'
import mealPlanSlice from './slices/mealPlanSlice'

export const store = configureStore({
  reducer: {
    mealPlans: mealPlanSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch