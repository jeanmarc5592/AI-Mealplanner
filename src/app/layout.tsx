import MainDrawer from '@/components/common/main-drawer/MainDrawer'
import ThemeRegistry from '@/components/theme/ThemeRegistry'
import { Box } from '@mui/material'
import { DRAWER_WIDTH_DESKTOP } from '@/lib/constants'
import type { Metadata } from 'next'
import StoreProvider from '@/components/store/StoreProvider'

export const metadata: Metadata = {
  title: 'Meal AI',
  description: 'Generate your meal plans with ease by using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeRegistry>
            <MainDrawer width={DRAWER_WIDTH_DESKTOP} />
            <Box sx={{ marginLeft: DRAWER_WIDTH_DESKTOP, height: '100vh', padding: '4rem 2rem' }}>
              {children}
            </Box>
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}
