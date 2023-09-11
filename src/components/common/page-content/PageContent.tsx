import { Box } from "@mui/material"

export interface PageContentProps {
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Box sx={{ marginTop: '4rem' }}>
      {children}
    </Box>
  )
}

export default PageContent
