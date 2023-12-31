import { Button, FormGroup, FormLabel, InputAdornment, Typography } from "@mui/material"
import ContentCard from "../common/content-card/ContentCard"
import InputField from "../common/input-field/InputField"
import Row from "../common/row/Row"
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AutoAwesome } from "@mui/icons-material";
import { useAppDispatch } from "@/hooks/store";
import { MealPlan, MealPlanDay, addMealPlan, onMealPlanLoading } from "@/store/slices/mealPlanSlice";
import { useState } from "react";
import { setErrorNotification, setSuccessNotification } from "@/store/slices/notificationSlice";

export const newMealPlanFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  calories: z.string().min(1, "Calories are required"),
  carbs: z.string().min(1, "Carbs are required"),
  proteins: z.string().min(1, "Proteins are required"),
  fats: z.string().min(1, "Fats are required"),
  meals: z.string().min(1, "Meals are required").max(5, "Maximum 5 meals are allowed"),
  totalDays: z.string().min(1, "Total days are required").max(5, "Maximum 5 days are allowed"),
  dietaryPreferences: z.string().optional(),
  allergies: z.string().optional(),
  foodLikes: z.string().optional(),
  foodDislikes: z.string().optional(),
});

export type NewMealPlanFormSchemaType = z.infer<typeof newMealPlanFormSchema>;

const MealPlanForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<NewMealPlanFormSchemaType>({
    resolver: zodResolver(newMealPlanFormSchema),
  });
  const dispatch = useAppDispatch();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const onSubmit: SubmitHandler<NewMealPlanFormSchemaType> = async (data) => {
    const serializedData = JSON.stringify(data);

    dispatch(onMealPlanLoading(true));
    setIsSubmitDisabled(true);

    try {
      const response = await fetch('http://localhost:3000/api/meal-plans/create', { method: 'POST', body: serializedData });

      if (response.status === 200) {
        const responseData: { mealPlan: MealPlanDay[] } = await response.json();
        
        const newMealPlan: MealPlan = {
          name: data.name,
          maxCalories: data.calories,
          maxCarbs: data.carbs,
          maxProteins: data.proteins,
          maxFats: data.fats,
          content: responseData.mealPlan,
        }

        dispatch(setSuccessNotification("Your meal plan was generated successfully!"));
        dispatch(addMealPlan(newMealPlan));
      } 

      if (response.status > 200) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      dispatch(setErrorNotification("Something went wrong with generating your meal plan. Please try again."))
    } finally {
      dispatch(onMealPlanLoading(false));
      setIsSubmitDisabled(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{
          '&.MuiButtonBase-root': {
            color: 'white',
            marginBottom: '2rem'
          }
        }}
        startIcon={<AutoAwesome />}
        disabled={isSubmitDisabled}
      >
        Generate
      </Button>
      
      <ContentCard title="General">
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Name
            </FormLabel>
            <InputField 
              placeholder="Name" 
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register("name")}
            />
          </FormGroup>
        </Row>
      </ContentCard>

      <ContentCard 
        title="Macronutrients" 
        subTitle={
          <Typography 
            variant="caption" 
            sx={{ fontWeight: "light" }}
            color="primary"  
          >
            If you are not sure about your needs,
            <Typography 
              color="primary"
              sx={{ textDecoration: "none", color: "primary.main", fontWeight: "bold" }}
              variant="caption"
              component="a"
              href="https://healthyeater.com/flexible-dieting-calculator"
              target="_blank"
            >
              &nbsp;click here&nbsp;
            </Typography> 
            to calculate them
          </Typography>
        }
      >
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Calories per day
            </FormLabel>
            <InputField 
              type="number"
              placeholder='e.g. "2345"' 
              InputProps={{
                endAdornment: <InputAdornment position="end">kcal</InputAdornment>,
                inputProps: { min: 1 }
              }}
              error={!!errors.calories}
              helperText={errors.calories?.message}
              {...register("calories")}
            />
          </FormGroup>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Carbs per day
            </FormLabel>
            <InputField 
              type="number"
              placeholder='e.g. "180"' 
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
                inputProps: { min: 1 }
              }}
              error={!!errors.carbs}
              helperText={errors.carbs?.message}
              {...register("carbs")}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Proteins per day
            </FormLabel>
            <InputField 
              type="number"
              placeholder='e.g. "81"' 
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
                inputProps: { min: 1 }
              }}
              error={!!errors.proteins}
              helperText={errors.proteins?.message}
              {...register("proteins")}
            />
          </FormGroup>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Fats per day
            </FormLabel>
            <InputField 
              type="number"
              placeholder='e.g. "65"' 
              InputProps={{
                endAdornment: <InputAdornment position="end">kcal</InputAdornment>,
                inputProps: { min: 1 }
              }}
              error={!!errors.fats}
              helperText={errors.fats?.message}
              {...register("fats")}
            />
          </FormGroup>
        </Row>
      </ContentCard>

      <ContentCard title="Details">
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Meals per day
            </FormLabel>
            <InputField 
              type="number"
              placeholder='e.g. "3"' 
              InputProps={{
                inputProps: { min: 1, max: 5 }
              }}
              error={!!errors.meals}
              helperText={errors.meals?.message}
              {...register("meals")}
            />
          </FormGroup>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Total days
            </FormLabel>
            <InputField 
              type="number"
              placeholder='e.g. "5"' 
              InputProps={{
                inputProps: { min: 1, max: 5 }
              }}
              error={!!errors.totalDays}
              helperText={errors.totalDays?.message}
              {...register("totalDays")}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }}>
              Dietary preferences (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "vegan"'
              multiline
              minRows={3}
              error={!!errors.dietaryPreferences}
              helperText={errors.dietaryPreferences?.message}
              {...register("dietaryPreferences")}
            />
          </FormGroup>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }}>
              Allergies (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "nuts"'
              multiline
              minRows={3}
              error={!!errors.allergies}
              helperText={errors.allergies?.message}
              {...register("allergies")}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }}>
              Food likes (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "avocado"'
              multiline
              minRows={3}
              error={!!errors.foodLikes}
              helperText={errors.foodLikes?.message}
              {...register("foodLikes")}
            />
          </FormGroup>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }}>
              Food dislikes (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "strawberry"'
              multiline
              minRows={3}
              error={!!errors.foodDislikes}
              helperText={errors.foodDislikes?.message}
              {...register("foodDislikes")}
            />
          </FormGroup>
        </Row>
      </ContentCard>
    </form>
  )
}

export default MealPlanForm