import ContentCard from "../common/content-card/ContentCard"
import InputField from "../common/input-field/InputField"

const NewMealPlanForm = () => {
  return (
    <form>
      <ContentCard title="General">
        <InputField 
          label="Name" 
          required
          sx={{ width: '50%'}}
        />
      </ContentCard>
    </form>
  )
}

export default NewMealPlanForm