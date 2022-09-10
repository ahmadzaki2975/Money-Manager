import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBell, FaSignOutAlt } from "react-icons/fa";
import { MoneyDisplay } from "../../components/MoneyDisplay";
import { Sections } from "../../components/Sections";

export default function Dashboard() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      alert("You need to be logged in to view this page");
      router.replace("/login");
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");
    router.replace("/");
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-blue-main items-center text-white font-Montserrat pb-10">
      <div className="flex items-center justify-between w-full px-[5%] mt-10">
        <div className="flex flex-row items-center gap-4">
          <div className="w-[80px] aspect-square rounded-full bg-white"></div>
          <div>
            <p>Hi there,</p>
            {user ? (
              <p className="text-2xl font-semibold">{user.displayName}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="">
          <FaBell className="text-3xl cursor-pointer mb-1" title="Notifications"/>
          <FaSignOutAlt className="text-3xl cursor-pointer" onClick={() => {
            logout();
          }} title="Logout"/>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white mt-[35px] mb-[40px]">
      </div>

      <MoneyDisplay/>
      <Sections />
    </div>
  );
}
