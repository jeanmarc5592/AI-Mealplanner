import { Grid } from "@mui/material"
import NewMealPlanForm from "./NewMealPlanForm"
import NewMealPlanResult from "./NewMealPlanResult"

const NewMealPlan = () => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={6}>
        <NewMealPlanForm />
      </Grid>
      <Grid item xs={6} sx={{ marginTop: "4rem" }}>
        <NewMealPlanResult />
      </Grid>
    </Grid>
  )
}

export default NewMealPlan
