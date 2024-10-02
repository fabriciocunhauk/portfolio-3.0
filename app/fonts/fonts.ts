import { Inter, Roboto, Josefin_Sans } from 'next/font/google'
 
export const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const robotoMono = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});