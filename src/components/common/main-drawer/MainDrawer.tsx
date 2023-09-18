'use client'

import { Box, Drawer, Typography, alpha } from "@mui/material"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/constants";

export interface MainDrawerProps {
  width: string;
}

const MainDrawer: React.FC<MainDrawerProps> = ({ width }) => {
  const pathName = usePathname();

  return (
    <Drawer 
      variant="permanent" 
      sx={{ [`& .MuiDrawer-paper`]: { width, boxSizing: 'border-box', backgroundColor: 'primary.main' }}}
    >
      <Typography variant="h4" textAlign="center" color="white" marginTop="4rem">
        MEAL AI
      </Typography>
      <Box sx={{ marginTop: '5rem' }}>
        {LINKS.map((link) => {
          return (
            <Link href={link.href} key={link.title} style={{ textDecoration: 'none' }}>
              <Typography 
               sx={{ 
                color: link.isActive(pathName) ? '#fff' : alpha('#fff', 0.5), 
                backgroundColor: link.isActive(pathName) ? 'primary.light' : 'transparent', 
                padding: '0.75rem 1rem', 
                marginBottom: '1rem', 
                textAlign: 'center',
                ['&:hover']: { 
                  backgroundColor: 'primary.light', 
                  transition: 'all 0.3s' 
                } 
              }}
              >
                {link.title}
              </Typography>
            </Link>
          )
        })}
      </Box>
    </Drawer>
  )
}

export default MainDrawer
