"use client"

import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"
import { MealPlan, addMealPlan, onMealPlanLoading } from "@/store/slices/mealPlanSlice"
import { useEffect } from "react"
import { useAppDispatch } from "@/hooks/store"
import PageHeader from "@/components/common/page-header/PageHeader"
import PageContent from "@/components/common/page-content/PageContent"
import MealPlanDetail from "@/components/meal-plans/MealPlanDetail"
import { Grid } from "@mui/material"

const MealPlanDetailPage= ({ params }: { params: { id: Id<"mealPlans">; } }) => {
  const mealPlan: MealPlan = useQuery(api.mealPlans.getSingleMealPlan, params);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onMealPlanLoading(true));
    if (mealPlan) {
      dispatch(addMealPlan(mealPlan));
      dispatch(onMealPlanLoading(false));
    }
  }, [mealPlan, dispatch]);

  return (
    <main>
      <PageHeader 
        title="Meal Plan Details"
        subTitle="See the details of your meal plan, edit or delete it."
      />
      <PageContent>
        <Grid container>
          <Grid item xs={4}>
            <MealPlanDetail />
          </Grid>
        </Grid>
      </PageContent>
    </main>
  )
}

export default MealPlanDetailPage
