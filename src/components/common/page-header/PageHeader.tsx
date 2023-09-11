import { Box, Typography } from '@mui/material'
import React from 'react'

export interface PageHeaderProps {
  title: string;
  subTitle?: string;
  actions?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ actions, title, subTitle }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
      <Box>
        <Typography variant='h4' color='primary' fontWeight='bold'>
          {title}
        </Typography> 
        {subTitle && (
          <Typography variant='h6' fontWeight='light'>
            {subTitle}
          </Typography>
        )}
      </Box>
      {actions && (
        <Box>
          {actions}
        </Box>
      )}
    </Box>
  )
}

export default PageHeader
