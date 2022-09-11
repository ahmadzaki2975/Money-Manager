import { Section } from "./Section"

export const Sections = () => {
  return(
    <div className="w-full mt-16">
      <h1 className="ml-[5%]">Sections</h1>
      <div className="sections overflow-x-scroll gap-52 whitespace-nowrap p-1 ml-[5%]">
        <Section />
        <Section />
      </div>
    </div>
  )
}