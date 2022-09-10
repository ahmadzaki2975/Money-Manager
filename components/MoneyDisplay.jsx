import { FaSlidersH } from "react-icons/fa";

export const MoneyDisplay = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-2 px-[5%]">
        <p className="text-left w-full">Money Available</p>
        <div className="w-full flex gap-2 justify-center">
        <div className="bg-gray-glass text-white px-3 py-2 w-full rounded flex items-center">
          {!props.money ? <p>Rp. XXX.XXX</p> : <p>Rp. {props.money}</p>}
        </div>
        <div className="aspect-square w-[40px] bg-slate-100 rounded flex items-center justify-center cursor-pointer">
          <FaSlidersH className="text-slate-600 text-2xl"/>
        </div>
        </div>
      </div>

      <br />

      <div className="flex flex-col items-center gap-2 px-[5%]">
        <p className="text-left w-full">Money Spent</p>
        <div className="w-full flex gap-2 justify-center">
        <div className="bg-gray-glass text-white px-3 py-2 w-full rounded flex items-center">
          {!props.money ? <p>Rp. XXX.XXX</p> : <p>Rp. {props.money}</p>}
        </div>
        <div className="aspect-square w-[40px] bg-slate-100 rounded flex items-center justify-center cursor-pointer">
          <FaSlidersH className="text-slate-600 text-2xl"/>
        </div>
        </div>
      </div>
      
    </div>
  );
};
