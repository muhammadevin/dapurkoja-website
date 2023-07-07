import './globals.css'

import localFont from 'next/font/local'
const escrituralhebrew = localFont({
  src:[
    {
      path: '../public/EscrituraHebrew-Medium.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/EscrituraHebrew.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/EscrituraHebrew-DemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/EscrituraHebrew-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/EscrituraHebrew-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-esch',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
      <body className={`${escrituralhebrew.variable} font-sans`}>{children}</body>
    </html>
  )
}
