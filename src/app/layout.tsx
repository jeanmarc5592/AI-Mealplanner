import ThemeRegistry from '@/components/Theme/ThemeRegistry'
import type { Metadata } from 'next'

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
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
