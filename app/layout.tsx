import type { Metadata } from 'next'
import { ShareButton } from '@/components/share-button'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: '清朗学风，学润德馨',
  description: '积极响应国家对于教育创新、人才培养以及文化建设的号召',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <ShareButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
