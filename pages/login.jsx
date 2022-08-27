export default function Login() {
  return (
    <div className="h-screen bg-blue-main text-white px-10">
      <div className="h-[300px]"></div>
      <form className="flex flex-col  text-black gap-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input type="email" name="email" className="border rounded" />
        </div>
        {/* <label htmlFor="phone-number" className="text-white">Phone Number</label>
        <input type="number" name="phone-number" className="border rounded"/> */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input type="password" name="password" className="border rounded" />
        </div>
      </form>

      <div className="btn-cont mt-12 text-center flex flex-col gap-5">
        <div className="w-100 bg-blue-button rounded py-1 shadow-button">Login</div>
        <div className="w-100 bg-blue-button rounded py-1 shadow-button">Login with Google</div>

      </div>
    </div>
  );
}
