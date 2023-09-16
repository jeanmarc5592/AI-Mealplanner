"use client"

import PageContent from "@/components/common/page-content/PageContent";
import PageHeader from "@/components/common/page-header/PageHeader"
import NewMealPlan from "@/components/meal-plans/NewMealPlan";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { MealPlansLink } from "@/lib/constants";
import { addMealPlan } from "@/store/slices/mealPlanSlice";
import { Check } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation"

const Actions = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mealPlan = useAppSelector((state) => state.mealPlans.mealPlan);

  const handleCancel = () => {
    router.push(MealPlansLink.href);
    dispatch(addMealPlan(undefined));
  };

  const handleSave = () => {
    // TODO: Handle Save
    alert('WIP: SAVE!');
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
      <Button 
        variant='contained' 
        startIcon={<Check />}
        onClick={handleSave}
        disabled={!mealPlan}
        >
          Save meal plan
      </Button>
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
        <NewMealPlan />
      </PageContent>
    </main>
  )
}

export default MealPlanCreatePage
