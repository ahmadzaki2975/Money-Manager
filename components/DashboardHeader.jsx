import { FaBell, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import UserContext from "../utils/context/userContext";
import { useContext } from "react";

export const DashboardHeader = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  function logout() {
    localStorage.removeItem("user");
    setUser({email: null});
    router.replace("/");
  }

  return (
    <div className="flex items-center justify-between w-full px-[5%] mt-10 flex-col xs:flex-row">
      <div className="flex flex-row items-center gap-4">
        <Link href="/dashboard">
          <div className="w-[80px] aspect-square rounded-full bg-white"></div>
        </Link>
        <div>
          <p>Hi there,</p>
          {user.email !== null ? (
            <p className="text-2xl font-semibold">{user.displayName}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex gap-2 xs:flex-col w-full xs:w-min justify-end">
        <FaBell
          className="text-3xl cursor-pointer mb-1"
          title="Notifications"
        />
        <FaSignOutAlt
          className="text-3xl cursor-pointer"
          onClick={() => {
            logout();
          }}
          title="Logout"
        />
      </div>
    </div>
  );
};
