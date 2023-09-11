import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

const InputField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField 
      size="small" 
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
