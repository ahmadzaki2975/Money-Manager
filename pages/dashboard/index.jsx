import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from "../../firebase/firebase";
import { useEffect, useState } from "react";

export default function Dashboard() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({})
  const router = useRouter();

  return (
    <div className="flex flex-col">
      Dashboard Page
      {/* <Link href="/">Home</Link> */}
      <div
        className="p-3 bg-red-400 w-min"
        onClick={() => {
          logout();
          router.push("/");
        }}
      >
        Logout
      </div>
      <div className="mt-20">
        {user?
          <p>Hello, {user.displayName}!</p>
        : ""}
      </div>
    </div>
  );
}
