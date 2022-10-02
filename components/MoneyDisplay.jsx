import { FaSlidersH } from "react-icons/fa";
import { fetchUserMoney } from "../firebase/firebase";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import UserContext from "../utils/context/userContext";


export const MoneyDisplay = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [money, setMoney] = useState(null);
  const [moneySpent, setMoneySpent] = useState(null);

  useEffect(() => {
    if(user.email != null ) {
      fetchUserMoney(user.email)
      .then(response => {
        setMoney(response.money);
        setMoneySpent(response.spentMoney);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }, [user]);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-2 px-[5%]">
        <p className="text-left w-full">Money Available</p>
        <div className="w-full flex gap-2 justify-center">
          <div className="bg-gray-glass text-white px-3 py-2 w-full rounded flex items-center">
            {money == null ? <p>Loading. . .</p> : <p>Rp. {money}</p>}
          </div>
          <Link href="/dashboard/moneyConfig">
            <div className="aspect-square w-[40px] bg-slate-100 text-2xl text-slate-600 rounded flex items-center justify-center cursor-pointer">
              <FaSlidersH />
            </div>
          </Link>
        </div>
      </div>

      <br />

      <div className="flex flex-col items-center gap-2 px-[5%]">
        <p className="text-left w-full">Money Spent Today</p>
        <div className="w-full flex gap-2 justify-center">
          <div className="bg-gray-glass text-white px-3 py-2 w-full rounded flex items-center">
            {moneySpent == null ? <p>Loading. . .</p> : <p>Rp. {moneySpent}</p>}
          </div>
          <Link href="/dashboard/moneyConfig">
            <div className="aspect-square w-[40px] bg-slate-100 text-2xl text-slate-600 rounded flex items-center justify-center cursor-pointer">
              <FaSlidersH />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
