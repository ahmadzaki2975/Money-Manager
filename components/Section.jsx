export const Section = (props) => {
  return (
    <a className="h-[200px] w-[250px] bg-gradient-to-b from-gray-glass to-blue-button rounded-lg p-4 inline-block mr-4
    hover:outline hover:outline-white">
      <h1 className="font-semibold">{props.title}</h1>
    </a>
  );
};
