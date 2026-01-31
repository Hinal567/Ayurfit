import './globals.css'

export const metadata = {
  title: 'AyurFit - Ancient Wisdom, Modern Wellness',
  description: 'Personalized Ayurvedic insights powered by centuries of healing wisdom',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
