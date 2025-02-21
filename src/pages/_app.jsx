'use client'

import '@/styles/tailwind.css'
import 'focus-visible'
import axios from 'axios'

export default function App({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
  return <Component {...pageProps} />
}
