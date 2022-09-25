import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
      duration: 400
    });
  });
  return (
    <>
      <Head>
        <title>Money Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overflow-x-hidden'>
      <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
