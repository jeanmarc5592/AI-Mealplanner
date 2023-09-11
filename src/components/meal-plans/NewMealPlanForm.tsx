import { Box, Checkbox, Chip, FormControlLabel, FormGroup, FormLabel, InputAdornment, ListItemText, MenuItem, OutlinedInput, Select, Switch, Typography } from "@mui/material"
import ContentCard from "../common/content-card/ContentCard"
import InputField from "../common/input-field/InputField"
import Row from "../common/row/Row"
import theme from "../theme/Theme"

const NewMealPlanForm = () => {
  return (
    <form>
      <ContentCard title="General">
        <Row>
          <FormGroup sx={{ width: '50%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Name
            </FormLabel>
            <InputField 
              label="Name" 
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup sx={{ width: '100%'}}>
            <FormLabel sx={{ color: 'primary.main' }}>
              Description
            </FormLabel>
            <InputField 
              label="Description" 
              multiline
              rows={8}
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
                inputProps: { min: 1 }
              }}
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
                inputProps: { min: 1 }
              }}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }}>
              Snacks per day
            </FormLabel>
            <InputField 
              type="number"
              placeholder='e.g. "1"' 
              InputProps={{
                inputProps: { min: 1 }
              }}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Dietary preferences (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "vegan"'
              multiline
              minRows={3}
            />
          </FormGroup>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Allergies (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "nuts"'
              multiline
              minRows={3}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Food likes (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "avocado"'
              multiline
              minRows={3}
            />
          </FormGroup>
          <FormGroup sx={{ width: '45%'}}>
            <FormLabel sx={{ color: 'primary.main' }} required>
              Food dislikes (one per line)
            </FormLabel>
            <InputField 
              placeholder='e.g. "strawberry"'
              multiline
              minRows={3}
            />
          </FormGroup>
        </Row>
      </ContentCard>
    </form>
  )
}

export default NewMealPlanForm