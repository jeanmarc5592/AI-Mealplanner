import { TextField, TextFieldProps } from '@mui/material'
import { forwardRef } from 'react'

const InputField: React.FC<TextFieldProps> = forwardRef((props, ref) => {
  return (
    <TextField 
      ref={ref}
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
      FormHelperTextProps={{
        color: "red",
        sx: {
          '&.MuiFormHelperText-root': {
            marginLeft: 1
          }
        }
      }}
      {...props}
    />
  )
});

InputField.displayName = "InputField";

export default InputField
