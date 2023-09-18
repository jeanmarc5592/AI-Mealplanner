import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type MealPlanDay = {
  day: string;
    totalCalories: string;
    totalCarbs: string;
    totalProteins: string;
    totalFats: string;
    meals: {
      name: string;
      recipe: string;
      calories: string;
      carbs: string;
      proteins: string;
      fats: string
    }[];
}

export type MealPlan = {
  _id?: string;
  _creationTime?: string;
  maxCalories: string;
  maxCarbs: string;
  maxProteins: string;
  maxFats: string;
  name: string;
  content: MealPlanDay[];
};

interface MealPlanState {
  mealPlan?: MealPlan;
  isLoading: boolean;
  error: string;
}

const initialState: MealPlanState = {
  mealPlan: undefined,
  isLoading: false,
  error: "",
}

export const mealPlanSlice = createSlice({
  name: 'mealPlan',
  initialState,
  reducers: {
    addMealPlan: (state, action: PayloadAction<MealPlan | undefined>) => {
      state.mealPlan = action.payload;
    },
    onMealPlanLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    onMealPlanError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
});

export const { addMealPlan, onMealPlanLoading, onMealPlanError } = mealPlanSlice.actions;

export default mealPlanSlice.reducer;