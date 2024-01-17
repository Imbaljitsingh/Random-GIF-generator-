import Random from "./components/Random"
import Tags from "./components/Tags"





export default function App() {
  return (

      <div className="w-full h-screen flex flex-col background  items-center">
        <h1 className=" bg-white w-full text-center rounded-md mt-[40px] px-10 py-5 text-3xl font-bold">Random GIFS Generator</h1>
        <div className="flex flex-col w-full justify-center items-center gap-y-10 mt-[30px]">
          <Random></Random>
          <Tags></Tags> 
        </div>
      </div>





  )
}
