import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface MealPlan {
  day: string;
    totalCalories: number;
    totalCarbs: number;
    totalProeteins: number;
    totalFats: number;
    meals: {
      name: string;
      recipe: string;
      calories: number;
      carbs: number;
      proteins: number;
      fats: number
    }[];
}

interface MealPlanState {
  mealPlan?: MealPlan
}

const initialState: MealPlanState = {
  mealPlan: undefined,
}

export const mealPlanSlice = createSlice({
  name: 'mealPlan',
  initialState,
  reducers: {
    addMealPlan: (state, action: PayloadAction<MealPlan>) => {
      state.mealPlan = action.payload;
    }
  }
});

export const { addMealPlan } = mealPlanSlice.actions;

export default mealPlanSlice.reducer;