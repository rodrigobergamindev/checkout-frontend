import Head from 'next/head'
import styles from '../styles/home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'






export default function Home() {

  const [initPoint, setInitPoint] = useState('')


  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await axios.post('http://localhost:3333/payment_mercadopago', {
        title: 'Pulseira banhada',
        unit_price: 89,
        quantity: 2
    },
    {
      headers: { "Content-Type": "application/json" },
    })
    
    setInitPoint(response.data)
    
  }


  return (
    <div className={styles.container}>
     
     <Head>
        <title>Checkout</title>
      </Head>
     <main className={styles.main}> 
        <div className={styles.checkoutBox} id="checkoutBox">
        
          <button type="button" onClick={handleSubmit}>Pagar</button>
          {!!initPoint && <a href={initPoint} target="_blank">Pagar com MercadoPago</a>}
        </div>
     </main>
    </div>
  )
}


