import { Autocomplete, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { resetData, setData } from "../features/weather/WeatherSlice";

export default function SearchBar() {
   const [cities,setCities]=useState([]);
   const [unity,setUnity]=useState('metric');
   const dispatch=useDispatch()
    const API_KEY_GEO='5fa3b69d2d6541fe9c1c90af2a0f9d72';
    const API_KEY_WEATHER='cbb7da2463b169417c4bd6896d2373d9';
 
   const inputRef=useRef(null);
   const handleChange=(e)=>{
    const value = e.currentTarget.value;
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${API_KEY_GEO}`)
    .then(response => response.json())
    .then(json=>setCities(json.results.map(data=>{
        const {lat,lon,country,city,formatted}=data;
        return {lat,lon,city,country,formatted};
    })));
   
   }
   const handleAutocompleteSelect=(e,value)=> {
    if(value)
    {
        const {lon,lat}=value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${unity}&lon=${lon}&appid=${API_KEY_WEATHER}`)
        .then(response => response.json())
        .then(json=>{
            const {clouds,main,name,weather,wind,sys}=json
            dispatch(setData({clouds,main,name,weather,wind,sys}))
        }
    
        );
       }else{
        dispatch(resetData())
       }
    }
 

   
  return (
    <form className="w-3/4 border mx-auto px-4 py-2 mt-5 flex justify-between gap-3 rounded-md ">
    
      <Autocomplete
        clearOnBlur={false}
        onChange={handleAutocompleteSelect}
        getOptionLabel={(option)=>option.formatted}
        className="rounded-md  w-full px-2 text-gray-600 "
        ref={inputRef}
        renderInput={(params) => (
          <TextField onChange={handleChange} {...params} label="Enter your city" />
        )}
        options={cities}
      />
      <button className="px-4 py-2 text-white bg-blue-500 rounded-md font-bold hover:bg-blue-300">
        search
      </button>
    </form>
  );
}
