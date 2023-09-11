import { Box, Typography } from '@mui/material'
import React from 'react'

export interface PageHeaderProps {
  actions?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ actions }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
      <Box>
        <Typography variant='h4' color='primary' fontWeight='bold'>
          Meal Plans
        </Typography> 
        <Typography variant='h6' fontWeight='light'>
          A quick overview of your saved meal plans.
        </Typography>
      </Box>
      <Box>
        {actions}
      </Box>
    </Box>
  )
}

export default PageHeader
