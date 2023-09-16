import { Box } from "@mui/material"
import Notification from "../notification/Notification";

export interface PageContentProps {
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Box sx={{ marginTop: '4rem' }}>
      <Notification />
      {children}
    </Box>
  )
}

export default PageContent
