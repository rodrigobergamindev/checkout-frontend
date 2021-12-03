import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import axios from 'axios'



export default function Home() {



  async function handleSubmit(event) {
    event.preventDefault()

    const response = await axios.post('http://localhost:3333/create_preference', {
      data: {
        title: 'Pulseira banhada',
        unit_price: 89,
        quantity: 2
      }
    })
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className={styles.main}> 
        <div className={styles.checkoutBox} id="checkoutBox">
          <button type="button" onClick={handleSubmit}>Pagar</button>
        </div>
     </main>
    </div>
  )
}


