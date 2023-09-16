import { useAppSelector } from '@/hooks/store'
import ContentCard from '../common/content-card/ContentCard'
import { Box, CircularProgress, Typography } from '@mui/material';

const MealPlanDetail = () => {
  const { mealPlan, isLoading } = useAppSelector((state) => state.mealPlans);

  return (
    <ContentCard>
      {isLoading || !mealPlan && (
        <Box sx={{ padding: "1rem" }}>
          <CircularProgress />
        </Box>
      )} 

      {mealPlan && !isLoading && (
        <Box>
          <Typography 
            color="primary" 
            variant="h5" 
            sx={{ fontWeight: 500, marginBottom: "2rem" }}
          >
            {mealPlan.name}
          </Typography>

          {mealPlan && !isLoading && (
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
        </Box>
      )}
    </ContentCard>
  )
}

export default MealPlanDetail
