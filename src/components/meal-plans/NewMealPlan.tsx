import { Grid } from "@mui/material"
import NewMealPlanForm from "./NewMealPlanForm"

const NewMealPlan = () => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={6}>
        <NewMealPlanForm />
      </Grid>
      <Grid item xs={6}>
        Result
      </Grid>
    </Grid>
  )
}

export default NewMealPlan
