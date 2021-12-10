import '../styles/globals.css'




function MyApp({ Component, pageProps }) {

  console.log('testando')

  return (
    <>
      <Component  {...pageProps} />
    </>
  )
}

export default MyApp
