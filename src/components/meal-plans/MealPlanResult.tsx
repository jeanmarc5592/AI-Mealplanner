import { Box, CircularProgress, Alert, Typography } from '@mui/material'
import ContentCard from '../common/content-card/ContentCard'
import { useAppSelector } from '@/hooks/store'

const MealPlanResult = () => {
  const mealPlan = useAppSelector((state) => state.mealPlans.mealPlan);
  const isMealPlanLoading = useAppSelector((state) => state.mealPlans.isLoading);

  return (
    <ContentCard title="Result">
      {isMealPlanLoading && (
        <Box sx={{ padding: "1rem" }}>
          <CircularProgress />
        </Box>
      )} 

      {!mealPlan && !isMealPlanLoading && (
        <Typography color="primary">
          Hit the &apos;GENERATE&apos; button to receive your new meal plan...
        </Typography>
      )}

      {mealPlan && !isMealPlanLoading && (
        mealPlan.content.map((day, index) => {
          const isLastElement = index === mealPlan.content.length - 1;

          return (
            <Box 
              key={day.day} 
              sx={{ 
                borderBottom: isLastElement ? "1px solid transparent" : "0.5px solid lightgrey",
                marginBottom: "1rem"
              }}
            >
              <Typography color="primary" variant="h6" sx={{ marginBottom: "1rem" }}>{day.day}</Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", marginBottom: "2rem" }}>
                <Typography fontWeight={500} color="primary" sx={{ marginRight: "1rem" }}>Calories: {day.totalCalories}</Typography>
                <Typography fontWeight={500} color="primary" sx={{ marginRight: "1rem" }}>Carbs: {day.totalCarbs}</Typography>
                <Typography fontWeight={500} color="primary" sx={{ marginRight: "1rem" }}>Proteins: {day.totalProteins}</Typography>
                <Typography fontWeight={500} color="primary">Fats: {day.totalFats}</Typography>
              </Box>

              <Box>
                {day.meals.map((meal) => {
                  return (
                    <Box key={meal.name} sx={{ marginBottom: "1rem" }}>
                      <Typography fontWeight={500} color="primary">{meal.name}</Typography>
                      <Typography>{meal.recipe}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )
        })
      )}
    </ContentCard>
  )
}

export default MealPlanResult
