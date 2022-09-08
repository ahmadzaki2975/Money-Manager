import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const opening = document.getElementById("opening");
      opening.classList.add("hidden");
    }, 3000)
  }, []);

  return (
    <div className="w-full">
      <Head>
        <title>Money Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="opening" className="bg-blue-main w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center z-10">
        <div className="logo w-[150px] aspect-square bg-white rounded-full"></div>
        <h1 className="text-2xl text-white mt-[20px]">Money Manager</h1>
      </div>
      <main className="bg-blue-main flex flex-col justify-center items-center h-screen px-10 text-white text-center">
        <h1 className="text-2xl " data-aos="fade-left" data-aos-duration="700" data-aos-delay="3000">
          Money Manager
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full flex flex-col gap-3 mt-10"
          data-aos-delay="3000"
        >
          <Link href="/signup">
            <div className="w-full bg-blue-button rounded py-1 shadow-button cursor-pointer">
              Sign Up
            </div>
          </Link>
          <Link href="/login">
            <div className="w-full bg-blue-button rounded py-1 shadow-button cursor-pointer">
              Login
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
