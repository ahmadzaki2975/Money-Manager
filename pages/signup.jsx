import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { checkEmail } from "../firebase/firebase";
import { useRouter } from "next/router";
import { registerUser, login } from "../firebase/firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  return (
    <div className="min-h-screen bg-blue-main text-white px-10 pb-10">
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
          <label htmlFor="displayName" className="text-white">
            Display Name
          </label>
          <input
            type="text"
            name="displayName"
            className="border rounded px-1"
            placeholder="Choose a display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
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
        <div className="flex flex-col">
          <label htmlFor="password-confirm" className="text-white">
            Password Confirmation
          </label>
          <input
            type="password"
            name="password-confirm"
            className="border rounded px-1"
            placeholder="Type your password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          {password !== confirmPassword &&
          password.length > 0 &&
          confirmPassword.length > 0 ? (
            <p className="text-red-500">Passwords do not match</p>
          ) : (
            ""
          )}
        </div>
      </form>

      <div className="btn-cont mt-8 text-center flex flex-col gap-5">
        <div
          className="w-100 bg-blue-button rounded py-1 shadow-button font-semibold"
          onClick={() => {
            if (email.length < 1) {
              alert("Please enter an email");
            } else if (displayName.length < 1) {
              alert("Please enter a display name");
            } else if (password.length < 1) {
              alert("Please enter a password");
            } else if (password !== confirmPassword) {
              alert("Your passwords don't match!");
            } else {
              checkEmail(email).then((res) => {
                if (res) {
                  alert("This email is already in use!");
                } else {
                  registerUser(email, password, displayName)
                    .then((response) => {
                      alert("Account created successfully!");
                      login(email, password)
                      .then(response => {
                        router.replace("/dashboard");
                      })
                    })
                    .catch((error) => {
                      alert(error.message);
                    });
                }
              });
            }
          }}
        >
          Sign Up
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
          Sign Up with Google
        </div>
        <Link href="/login">
          <div className="w-100 border-blue-button border-2 rounded py-1 shadow-button cursor-pointer">
            Already have an account? Log in!
          </div>
        </Link>
      </div>
    </div>
  );
}
