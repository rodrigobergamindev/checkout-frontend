import '../styles/globals.css'
import Script from 'next/script'
import { useEffect } from 'react'




function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const {MercadoPago} = window

    console.log(MercadoPago)
  },[])
  
  return (
    <>
  <Script src="https://sdk.mercadopago.com/js/v2"/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
