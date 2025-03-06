import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchData,setSearchData]=useState("");

  const Api = "https://pokeapi.co/api/v2/pokemon?limit=128&offset=0";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(Api);
      const data = await res.json();

      const detailData= data.results.map( async(curPokemon) => {
        const res=await fetch(curPokemon.url);
        const data=await res.json();
        return data;
      } )

      const detailResponse =await Promise.all(detailData);
      setPokemon(detailResponse);
      console.log(detailResponse);

    } catch (error) {
      console.log(error.message);
    }
  };



  useEffect(() => {
    fetchPokemon();
  }, []);


  const search=pokemon.filter((curPokemon) => 
    curPokemon.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <>
      <div className="w-full">
        <div>
          <input type="text"
        placeholder="Search Pokemon" 
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        className="bg-white p-3 w-96 m-8"
        />
        </div>

        <ul className="flex flex-wrap">
          {search.map((curElem,idx)=>(
            <li key={idx} className="bg-white w-60 h-72 m-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-semibold">{curElem.name.toUpperCase()}</h1>
              <img className="bg-black/80 rounded-full m-2 p-2 hover:scale-110 transition-all" src={curElem.sprites.front_default} width="150" alt="Pokeimage" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pokemon;
