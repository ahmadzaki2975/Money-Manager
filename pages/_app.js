import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import UserContext from "../utils/context/userContext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ email: null });
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
      duration: 400,
    });
  }),[];

  return (
    <>
      <Head>
        <title>Money Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserContext.Provider value={{ user, setUser }}>
        <main className="overflow-x-hidden">
          <Component {...pageProps} />
        </main>
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
