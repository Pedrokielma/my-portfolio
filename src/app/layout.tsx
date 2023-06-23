import './styles/globals.scss'

export const metadata = {
  title: 'Pedro Kielma Portfolio',
  description: 'created by PedroKielma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
