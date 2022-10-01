import { DashboardHeader } from "../../components/DashboardHeader";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import UserContext from "../../utils/context/userContext";

export default function moneyConfig() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [money, setMoney] = useState(0);
  const [spentMoney, setSpentMoney] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setMoney(JSON.parse(localStorage.getItem("user")).money);
      setSpentMoney(JSON.parse(localStorage.getItem("user")).spentMoney);
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

        <h1 className="text-xl mb-5">Configure Money</h1>
        <form className="flex flex-col w-full items-center">
          <label className="text-lg">Money Available</label>
          <div className="w-full flex gap-3 items-center py-1 px-[10%]">
            <span>Rp</span>
            <input
              className="bg-blue-main w-full border border-white rounded-md p-[10px] outline-none"
              type="number"
              placeholder="Enter Amount"
              value={money}
              onChange={(e) => {
                setMoney(e.target.value);
              }}
            />
          </div>
          <label className="text-lg mt-2">Money Spent</label>
          <div className="w-full flex gap-3 items-center py-1 px-[10%]">
            <span>Rp</span>
            <input
              className="bg-blue-main w-full border border-white rounded-md p-[10px] outline-none"
              type="number"
              placeholder="Enter Amount"
              value={spentMoney}
              onChange={(e) => {
                setMoney(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="bg-blue-button rounded-md p-[10px] mt-5 w-[30%]">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
