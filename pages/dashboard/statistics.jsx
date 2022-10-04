import { DashboardHeader } from "../../components/DashboardHeader";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import UserContext from "../../utils/context/userContext";
import { DoughnutChart } from "../../components/DoughnutChart";

export default function Statistics() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [money, setMoney] = useState(0);
  const [moneySpent, setMoneySpent] = useState(0);

  //? Money available vs Money spent
  const [data1, setData1] = useState();

  //? Money gained vs Money spent

  useEffect(() => {
    if (user.email !== null) {
      setMoney(user.money);
      setMoneySpent(user.spentMoney);
      setData1({
        labels: ["Money available", "Money spent"],
        datasets: [
          {
            label: "Money available vs Money spent",
            data: [money, moneySpent],
            backgroundColor: ["#36A2EB", "#FF6384"],
            hoverOffset: 4,
          },
        ]
      });
    } else if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setMoney(JSON.parse(localStorage.getItem("user")).money);
      setMoneySpent(JSON.parse(localStorage.getItem("user")).spentMoney);
      setData1({
        labels: ["Money available", "Money spent"],
        datasets: [
          {
            label: "Money available vs Money spent",
            data: [user.money, user.moneySpent],
            backgroundColor: ["#36A2EB", "#FF6384"],
            hoverOffset: 4,
          },
        ]
      });
    } else {
      alert("You need to be logged in to view this page");
      router.replace("/login");
    }
  }, [money]);

  return (
    <main className="bg-blue-main flex items-center justify-center">
      <div className="flex flex-col w-full min-h-screen bg-blue-main items-center text-white font-Montserrat pb-10 sm:w-[500px] outline outline-white">
        <DashboardHeader user={user} />
        <div className="w-full h-[1px] bg-white mt-[35px] mb-[40px]"></div>
        <h1 className="text-xl">Statistics</h1>
        <p>
          You have <span className="font-bold">Rp {money}</span> in your account
        </p>
        <p>
          You have spent <span className="font-bold">Rp {moneySpent}</span> in
          total
        </p>

        <h1 className="mt-10">Money Available vs Money Spent Today</h1>
        <div className="w-[80%] text-white">
          <DoughnutChart data={data1} />
        </div>

        <h1 className="mt-10">Money Gained vs Money Spent</h1>
        <div className="w-[80%] text-white">
          <DoughnutChart data={data1} />
        </div>
      </div>
    </main>
  );
}
