import { createSlice } from "@reduxjs/toolkit"

const initialState={
    clouds:'undifined',
    main:{
        feels_like:undefined
    },
    name:'undifined',
    weather:{
        main:undefined
    },
    wind:'undifined',
    sys:'undifined',
    isLoaded:false
}

export const WeatherSlice=createSlice({
name : 'weather',
initialState,
reducers:
{
    setData:(state,action)=>{

        const {clouds,main,name,weather,wind,sys}=action.payload
        state.clouds=clouds
        state.main=main
        state.name=name
        state.sys=sys
        state.weather=weather[0]
        state.wind=wind
        state.isLoaded=true

    },
    resetData:(state,action)=>{

        state.isLoaded=false

    }
}
})

export const {setData,resetData}=WeatherSlice.actions

export default WeatherSlice.reducer