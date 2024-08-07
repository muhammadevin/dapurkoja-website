import './globals.css'
import Head from './head.jsx'

import localFont from 'next/font/local'
const gaegu = localFont({
  src:[
    {
      path: '../public/gaegu/Gaegu-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/gaegu/Gaegu-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/gaegu/Gaegu-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-esch',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={`${gaegu.variable} font-sans`}>{children}</body>
    </html>
  )
}
