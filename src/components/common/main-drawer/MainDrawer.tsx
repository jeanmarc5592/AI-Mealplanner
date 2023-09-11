'use client'

import { Box, Drawer, Typography } from "@mui/material"
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MainDrawerProps {
  width: string;
}

const LINKS: { title: string; href: string; }[] = [
  { title: 'Home', href: '/' },
  { title: 'Meal Plans', href: '/meal-plans' },
]

const MainDrawer: React.FC<MainDrawerProps> = ({ width }) => {
  const pathName = usePathname();

  return (
    <Drawer 
      variant="permanent" 
      sx={{ [`& .MuiDrawer-paper`]: { width, boxSizing: 'border-box', backgroundColor: 'primary.main' }}}
    >
      <Typography variant="h4" textAlign="center" color="white" marginTop="2rem">
        MEAL AI
      </Typography>
      <Box sx={{ marginTop: '5rem' }}>
        {LINKS.map((link) => {
          const isActive = pathName === link.href;

          return (
            <Link href={link.href} key={link.title} style={{ textDecoration: 'none' }}>
              <Typography 
               sx={{ color: 'white', backgroundColor: isActive ? 'primary.light' : 'transparent', padding: '0.5rem 1rem', marginBottom: '1rem', ['&:hover']: { backgroundColor: 'primary.light', transition: 'all 0.3s' } }}
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
