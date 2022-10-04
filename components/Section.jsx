import Link from "next/link";

export const Section = (props) => {
  return (
    <Link href={props.link}>
      <div
        className="h-[200px] w-[250px] bg-gradient-to-b from-gray-glass to-blue-button rounded-lg p-4 inline-block mr-4
    hover:outline hover:outline-white"
      >
        <h1 className="font-semibold">{props.title}</h1>
      </div>
    </Link>
  );
};
