import Pokemon from "./Pokemon/Pokemon"

function App() {


  return (
    <>
    <div className="w-full h-auto pt-[12vh] bg-black/80 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-sans font-bold text-white m-8">Pokemon Api And UseEffect</h1>
      <Pokemon/>
    </div>
    </>
  )
}

export default App
