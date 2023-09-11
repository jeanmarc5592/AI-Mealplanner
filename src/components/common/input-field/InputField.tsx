import { TextField, TextFieldProps } from '@mui/material'

const InputField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField 
      size="small" 
      margin="dense"
      sx={{
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "primary.light",
          }
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "primary.light",
            color: 'green',
          }
        }
      }} 
      {...props}
    />
  )
}

export default InputField
