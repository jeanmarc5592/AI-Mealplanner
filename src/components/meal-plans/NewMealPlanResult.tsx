import { Typography } from '@mui/material'
import ContentCard from '../common/content-card/ContentCard'

const NewMealPlanResult = () => {
  return (
    <ContentCard title="Result">
      <Typography color="primary">
        Your meal plan is waiting to be generated...
      </Typography>
    </ContentCard>
  )
}

export default NewMealPlanResult
