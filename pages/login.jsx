import Link from "next/link";
import { FcGoogle } from "react-icons/fc"

export default function Login() {
  return (
    <div className="h-screen bg-blue-main text-white px-10">
      <div className="h-[250px]"></div>
      <form className="flex flex-col  text-black gap-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input type="email" name="email" className="border rounded px-1" placeholder="email@example.com"/>
        </div>
        {/* <label htmlFor="phone-number" className="text-white">Phone Number</label>
        <input type="number" name="phone-number" className="border rounded"/> */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input type="password" name="password" className="border rounded px-1" placeholder="password" />
        </div>
      </form>

      <div className="btn-cont mt-12 text-center flex flex-col gap-5">
        <div className="w-100 bg-blue-button rounded py-1 shadow-button">Login</div>
        <div className="flex items-center gap-5 filter brightness-125">
          <div className="h-[1px] bg-blue-button w-full"></div>
          <span className="text-blue-button">or</span>
          <div className="h-[1px] bg-blue-button w-full"></div>
        </div>
        <div className="w-100 bg-blue-button rounded py-1 shadow-button flex justify-center items-center gap-2"><FcGoogle/> Login with Google</div>
        <Link href="/">
          <div className="w-100 border-blue-button border-2 rounded py-1 shadow-button cursor-pointer">
            Home
          </div>
        </Link>
      </div>
    </div>
  );
}
