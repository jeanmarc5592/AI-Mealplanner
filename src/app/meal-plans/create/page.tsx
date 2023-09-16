"use client"

import PageContent from "@/components/common/page-content/PageContent";
import PageHeader from "@/components/common/page-header/PageHeader"
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { MealPlansLink } from "@/lib/constants";
import { addMealPlan } from "@/store/slices/mealPlanSlice";
import { Check } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation"
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { setErrorNotification } from "@/store/slices/notificationSlice";
import MealPlanForm from "@/components/meal-plans/MealPlanForm";
import MealPlanResult from "@/components/meal-plans/MealPlanResult";

const Actions = () => {
  const [isSaving, setIsSaving] = useState(false); 
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mealPlan = useAppSelector((state) => state.mealPlans.mealPlan);
  const saveMealPlan = useMutation(api.mealPlans.createMealPlan);

  const handleCancel = () => {
    router.push(MealPlansLink.href);
    dispatch(addMealPlan(undefined));
  };

  const handleSave = async () => {
    if (!mealPlan) {
      return;
    }

    setIsSaving(true);

    try {
      const mealPlanId = await saveMealPlan(mealPlan);
      dispatch(addMealPlan(undefined));
      router.replace(`${MealPlansLink.href}/${mealPlanId}`);
    } catch (error) {
      dispatch(setErrorNotification('Something went wrong saving your meal plan. Please try again'));
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Button
        variant='outlined' 
        sx={{ marginRight: '1rem' }}
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <LoadingButton
        variant='contained' 
        startIcon={<Check />}
        onClick={handleSave}
        disabled={!mealPlan}
        loading={isSaving}
      >
        Save meal plan
      </LoadingButton>
    </Box>
  )
}

const MealPlanCreatePage = () => {
  return (
    <main>
      <PageHeader
        actions={<Actions />}
        title='New meal plan'
        subTitle='Generate and save a new meal plan with ease.'
      />
      <PageContent>
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <MealPlanForm />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "4rem" }}>
            <MealPlanResult />
          </Grid>
        </Grid>
      </PageContent>
    </main>
  )
}

export default MealPlanCreatePage
