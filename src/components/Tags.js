import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";
import { useGif } from "../hooks/useGif";

function Tags(){

//useState to store GIFs and tag value
const [tag, setTag] = useState('');

//calling my custom hook
const {gif, loading, fetchData} = useGif(tag);



//click handler function 

function clickHandler(){

    fetchData();

}
return (

    <div>

        <div className="w-[750px] p-7 bg-blue-500 rounded-md flex items-center flex-col justify-center gap-y-10">
            <h1 className="font-bold text-3xl text-white">Random {tag} GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif}/>)
            }

            <input
            type="text"
            value={tag}
            className="w-1/2 rounded-md px-3 py-2 font-semibold mt-4 text-center"
            onChange={(event) => {setTag(event.target.value)}}
            />

            <button onClick={clickHandler} className="bg-green-100 w-1/2 rounded-md px-3 py-2 font-semibold mt-4">Generate GIF</button>
        </div>




    </div>



)

}

export default Tags;