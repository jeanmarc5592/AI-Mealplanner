"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"
import { MealPlan, addMealPlan, onMealPlanLoading } from "@/store/slices/mealPlanSlice"
import { useEffect } from "react"
import { useAppDispatch } from "@/hooks/store"
import PageHeader from "@/components/common/page-header/PageHeader"
import PageContent from "@/components/common/page-content/PageContent"
import MealPlanDetail from "@/components/meal-plans/MealPlanDetail"
import { Box, Button, Grid } from "@mui/material"
import { useRouter } from "next/navigation"
import { MealPlansLink } from "@/lib/constants"
import { setErrorNotification } from "@/store/slices/notificationSlice"

export interface MealPlanDetailPageActionsProps {
  id: Id<"mealPlans">;
}

const Actions: React.FC<MealPlanDetailPageActionsProps> = ({ id }) => {
  const router = useRouter();
  const deleteMealPlan = useMutation(api.mealPlans.deleteMealPlan);
  const dispatch = useAppDispatch();

  const handleBack = () => {
    router.push(MealPlansLink.href);
  };

  const handleDelete = async () => {
    try {
      await deleteMealPlan({ id });
      router.replace(MealPlansLink.href);
    } catch (error) {
      dispatch(setErrorNotification("Something went wrong deleting your meal plan. Please try again"));
      console.error(error);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button
        variant='outlined' 
        sx={{ marginRight: '1rem' }}
        onClick={handleBack}
      >
        Back
      </Button>
      <Button
        variant='outlined' 
        color="error"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Box>
  )
}

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
        actions={<Actions id={params.id} />}
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
