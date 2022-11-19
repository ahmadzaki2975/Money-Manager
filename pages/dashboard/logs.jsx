import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserContext from "../../utils/context/userContext";
import { DashboardHeader } from "../../components/DashboardHeader";
import Link from "next/link";
import { addLog, getLogs } from "../../firebase/firebase";
import dateConvert from "../../utils/functions/dateConvert";

export default function Logs() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logs, setLogs] = useState(null);
  const [logTitle, setLogTitle] = useState("");
  const [logAmount, setLogAmount] = useState(0);
  const [logAmountPosNeg, setLogAmountPosNeg] = useState(-1);
  const [logType, setLogType] = useState("Food");

  //? Auth Protection
  useEffect(() => {
    if (localStorage.getItem("user")) {
      if (user.email == null) {
        setUser(JSON.parse(localStorage.getItem("user")));
      }
      if (user.email !== null) {
        getLogs(user.email).then((res) => {
          setLogs(res);
        });
      }
    } else {
      alert("You need to be logged in to view this page");
      router.replace("/login");
    }
  }, [user,logs]);

  //? Toggle Modal
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  //? Add Log
  function addLogHandler(e) {
    e.preventDefault();
    if (logTitle.length > 0 && logAmount > 0) {
      let newLog = {
        title: logTitle,
        amount: logAmount * logAmountPosNeg,
        type: logType,
        id: Date.now(),
      };
      console.log(newLog);
      let isSpending;
      if (logAmountPosNeg == -1) {
        isSpending = true;
      } else {
        isSpending = false;
      }
      addLog(user.email, logTitle, newLog.amount, logType, isSpending).then(() => {
        setLogTitle("");
        setLogAmount(0);
        setLogAmountPosNeg(-1);
        setLogType("Food");
        toggleModal();
      });
      setLogs([...logs, newLog]);
    } else {
      alert("Please fill in all the fields");
    }
  }

  return (
    <main className="bg-blue-main flex items-center justify-center">
      <div className="flex flex-col w-full min-h-screen bg-blue-main items-center text-white font-Montserrat pb-10 sm:w-[500px] outline outline-white">
        <DashboardHeader user={user} />

        <div className="w-full h-[1px] bg-white mt-[35px] mb-[40px]"></div>

        <h1 className="text-xl">Logs</h1>

        {/* Modal */}
        {isModalOpen ? (
          <div className="w-full h-screen fixed bg-slate-900 bg-opacity-80 flex justify-center items-center">
            <div className="w-[80%] relative bg-blue-main rounded p-5">
              <div
                className="absolute top-0 right-0 m-3 w-[24px] text-center cursor-pointer"
                onClick={() => toggleModal()}
              >
                X
              </div>
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={(e) => {
                  addLogHandler(e);
                }}
              >
                <h1 className="text-xl">Add a new log</h1>
                <label htmlFor="log-title" className="mt-3">
                  Title
                </label>
                <input
                  type="text"
                  name="log-title"
                  id="log-title"
                  className="w-[80%] rounded outline-none p-[2px] text-slate-900"
                  value={logTitle}
                  onChange={(e) => {
                    setLogTitle(e.target.value);
                  }}
                />

                <label htmlFor="log-amount" className="mt-3">
                  Amount
                </label>
                <div className="w-[80%] flex gap-2">
                  <select
                    className="rounded outline-none p-[4px] text-slate-900"
                    onChange={(e) => {
                      setLogAmountPosNeg(e.target.value);
                    }}
                  >
                    <option value={-1}>-</option>
                    <option value={1}>+</option>
                  </select>
                  <input
                    type="number"
                    name="log-amount"
                    id="log-amount"
                    className="w-full rounded outline-none p-[2px] text-slate-900"
                    value={logAmount}
                    onChange={(e) => {
                      setLogAmount(e.target.value);
                    }}
                  />
                </div>

                <label htmlFor="log-type" className="mt-3">
                  Type
                </label>
                <select
                  name="log-type"
                  id="log-type"
                  className="w-[80%] rounded outline-none p-[2px] text-slate-900"
                  onChange={(e) => {
                    setLogType(e.target.value);
                  }}
                >
                  {logAmountPosNeg == -1 ? (
                    <>
                      <option value="Food">Food</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Transportation">Transportation</option>
                    </>
                  ) : (
                    <>
                      <option value="Salary">Salary</option>
                      <option value="Bonus">Bonus</option>
                      <option value="Investment">Investment</option>
                    </>
                  )}
                </select>
                <button
                  type="submit"
                  className="w-[80%] mt-8 rounded py-1 bg-green-500"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-[80%]">
          {logs != null
            ? logs.map((log) => {
                return (
                  <div
                    className="flex justify-between items-center w-full mt-3 gap-2 py-1 outline bg-gray-glass outline-white rounded"
                    key={log.id}
                  >
                    <div className="flex flex-col justify-center w-[30%] pl-2">
                      <h1 className="text-lg">{log.title}</h1>
                      <h1 className="text-sm">{log.type}</h1>
                    </div>
                    {/* <div className="border border-white">
                      <h1 className="text-sm">{dateConvert(log.date)}</h1>
                    </div> */}
                    <div className="pr-2">
                      <h1 className="text-lg font-semibold">
                        {log.isSpending ? (
                          <span className="text-red-500">-Rp {log.amount}</span>
                        ) : (
                          <span className="text-green-700">
                            +Rp {log.amount}
                          </span>
                        )}
                      </h1>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        {/* New Button */}
        <div
          className="bg-blue-button fixed bottom-0 right-0 w-[60px] rounded-full cursor-pointer aspect-square m-5 flex items-center justify-center text-4xl"
          onClick={() => toggleModal()}
        >
          +
        </div>
      </div>
    </main>
  );
}
