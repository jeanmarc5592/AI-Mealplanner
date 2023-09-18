import { MealPlansLink } from "@/lib/constants";
import { MealPlan } from "@/store/slices/mealPlanSlice";
import { Typography, Grid, Box, Button } from "@mui/material";
import ContentCard from "../common/content-card/ContentCard";

export interface MealPlanOverviewProps {
  mealPlans?: MealPlan[];
}

const MealPlanOverview: React.FC<MealPlanOverviewProps> = ({ mealPlans }) => {
  return (
    <>
     {mealPlans && mealPlans.length === 0 && (
          <>
            <Typography
              variant="h6"
              color="primary"
            >
              You have no meal plans yet. Click &apos;New Meal Plan&apos; to add a new meal plan.
            </Typography>
          </>
        )}

        <Grid container spacing={10}>
          {mealPlans && mealPlans.length > 0 && (
            mealPlans.map((plan: MealPlan) => {
              const createdAt = new Date(parseFloat(plan._creationTime!)).toLocaleDateString("en-US");

              return (
                <Grid item xs={3} key={plan._id}>
                  <ContentCard>
                    <Box sx={{ marginBottom: "1.5rem" }}>
                      <Typography 
                        color="primary" 
                        variant="h6"
                        sx={{ marginBottom: "0.5rem", fontWeight: 500 }}
                      >
                        {plan.name}
                      </Typography>

                      <Typography
                        color="primary" 
                        variant="body2"
                        sx={{ opacity: 0.6, fontStyle: "italic" }}
                      >
                        created at {createdAt}
                      </Typography>
                    </Box>

                    <Box sx={{ marginBottom: "1.5rem" }}>
                      <Typography color="primary" fontWeight={500}>Calories: {plan.maxCalories}kcal</Typography>
                      <Typography color="primary" fontWeight={500}>Carbs: {plan.maxCarbs}g</Typography>
                      <Typography color="primary" fontWeight={500}>Proteins: {plan.maxProteins}g</Typography>
                      <Typography color="primary" fontWeight={500}>Fats: {plan.maxFats}g</Typography>
                    </Box>

                    <Button
                      variant="contained"
                      color="success"
                      href={`${MealPlansLink.href}/${plan._id}`}
                      sx={{ color: "white" }}
                    >
                      View meal plan
                    </Button>
                  </ContentCard>
                </Grid>
              )
            })
          )}
        </Grid> 
    </>
  )
}

export default MealPlanOverview
