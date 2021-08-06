// import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
