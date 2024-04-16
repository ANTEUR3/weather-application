import Sun from '../icons/Sun.jsx';
import Rain from '../icons/Rain.jsx';
import Location from '../icons/location.jsx';
import Clouds from '../icons/Clouds.jsx';

import '../index.css'
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
export default function WeatherResult()
{
  const weatherIcon = () => {
    switch (WeatherResult.weather.main) {
      case "Rain":
        return <Rain />;
  break;
      case "Clear":
        return <Sun />;
        break;
      case "clouds":
        return <Clouds />;
        break;
      default:
        return <Clouds />;    }
  };
  const WeatherResult=useSelector(({weather})=>weather)
  // <h4  className='time font-bold text-blue-600'>12 H 34 MIN</h4>
    return(
      <>
    
       {WeatherResult.isLoaded?<div class=" flex flex-col justify-between items-center gap-6 mx-auto w-3/4 mt-5 px-6 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center gap-3  items-center w-1/2 ">
       
      <h1  className="font-bold townName ">{WeatherResult.name}  {WeatherResult.sys.country}</h1>
      <Location/>
        </div>
        <div className="flex flex-col justify-between items-center px-2 py-1">
          <h1 className='tempirature font-bold text-red-700'>{WeatherResult.main.feels_like} °C</h1>
         
        </div>
         <div className="w-1/3 flex justify-center  items-center  font-bold  ">
           {weatherIcon()}
      
         </div>
      
         <div className="flex justify-around rounded-lg bg-gray-200 w-full lg:w-1/3 py-2">
          <div className="sunrise flex flex-col items-center gap-2 border-r   " >
            <p>SUNRISE</p>
            <p><Moment unix={true} format='hh:mm'>
                {WeatherResult.sys.sunrise} 
              </Moment> AM</p>
          </div>
          <div className="sunrise flex flex-col justify-center items-center gap-2 border-l border-r  ">
            <p>WIND</p>
            <p>{WeatherResult.wind.speed}</p>
          </div>
          <div className="sunrise flex flex-col items-center gap-2 border-b  ">
            <p>TEMPURATURE</p>
            <p>{WeatherResult.main.feels_like} °C</p>
          </div>
         </div>
         
      </div>: <div className="flex flex-col justify-between items-center gap-6 mx-auto w-3/4 mt-5 px-6 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center gap-3  items-center w-1/2 ">
       
       <h1  className="font-bold townName ">select town</h1>
       <Location/>
         </div>
         <div className="w-1/3 flex justify-center  items-center  font-bold  ">
           <Sun/>
      
         </div>
      </div> }

      </>
       

    )
}