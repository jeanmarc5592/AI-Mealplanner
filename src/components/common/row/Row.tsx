import { Box, BoxProps } from "@mui/material"

const Row: React.FC<BoxProps> = ({ children, ...restProps}) => {
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1.5rem",
      }}
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default Row
