import Head from 'next/head'
import styles from '../styles/home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51JfA7GHvPtWhJQ2zkDI5cQoMdf1fc3BSkScga962lhQweGAgywYehCEsbGj9glrfIxRC3Edp58YInXDFVW6Tzj7W00vtPCzY48");



export default function Home() {



  async function handleSubmit(event) {
    event.preventDefault()

    const response = await axios.post('http://localhost:3333/create_payment', {
        title: 'Pulseira banhada',
        unit_price: 89,
        quantity: 2
    })
    
    console.log(response)
  }

  return (
    <div className={styles.container}>
     
     <Head>
        <title>Checkout</title>
      </Head>
     <main className={styles.main}> 
        <div className={styles.checkoutBox} id="checkoutBox">
          <button type="button" onClick={handleSubmit}>Pagar</button>
        </div>
     </main>
    </div>
  )
}


