import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { MoneyDisplay } from "../../components/MoneyDisplay";
import { Sections } from "../../components/Sections";
import UserContext from "../../utils/context/userContext";

export default function Dashboard() {
  const {user, setUser} = useContext(UserContext);
  const router = useRouter();

  //? Auth Protection
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      alert("You need to be logged in to view this page");
      router.replace("/login");
    }
  }, []);

  return (
    <main className="bg-blue-main flex items-center justify-center">
      <div className="flex flex-col w-full min-h-screen bg-blue-main items-center text-white font-Montserrat pb-10 sm:w-[500px] outline outline-white">
        <DashboardHeader user={user} />

        <div className="w-full h-[1px] bg-white mt-[35px] mb-[40px]"></div>

        <MoneyDisplay />
        
        <div className="w-full h-min p-0 m-0">
        <Sections />
        </div>
      </div>
    </main>
  );
}
