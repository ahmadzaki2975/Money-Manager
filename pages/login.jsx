import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { googleSignIn } from "../firebase/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { login } from "../firebase/firebase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    window.addEventListener("storage", () => {
      if (localStorage.getItem("user")) {
        setUser((localStorage.getItem("user")));
        router.replace("/dashboard");
      }
      return () => {
        window.removeEventListener('storage', checkUserData)
      }
    });
  },[]);

  return (
    <div className="h-screen bg-blue-main text-white px-10">
      <div className="h-[250px]"></div>
      <form className="flex flex-col  text-black gap-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border rounded px-1"
            placeholder="Email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border rounded px-1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>

      <div className="btn-cont mt-12 text-center flex flex-col gap-5">
        <div
          className="w-100 bg-blue-button rounded py-1 shadow-button cursor-pointer"
          onClick={() => {
            login(email, password)
            .then((response) => {
              alert("Login success");
              router.push("/dashboard");
            })
            .catch((error) => {
              alert(error.message);
            });
          }}
        >
          Login
        </div>
        <div className="flex items-center gap-5 filter brightness-125">
          <div className="h-[1px] bg-blue-button w-full"></div>
          <span className="text-blue-button">or</span>
          <div className="h-[1px] bg-blue-button w-full"></div>
        </div>
        <div
          onClick={() => {
            alert("Google Sign In is not yet implemented");
            // googleSignIn();
          }}
          className="w-100 cursor-pointer bg-blue-button rounded py-1 shadow-button flex justify-center items-center gap-2"
        >
          <div className="aspect-square bg-white rounded-full">
            <FcGoogle />
          </div>
          Login with Google
        </div>
        <Link href="/signup">
          <div className="w-100 border-blue-button border-2 rounded py-1 shadow-button cursor-pointer">
            Don't have an account? Sign up!
          </div>
        </Link>
      </div>
    </div>
  );
}
