export default function NavBar()
{
    return(
        <div className="w-full grid grid-cols-7 px-5 bg-blue-500 shadow-lg py-2    ">
           <h2 className="col-span-6  md:col-span-2 text-white font-bold ">weather-YA</h2>
           <ul className=" sm:col-span-4 hidden  col-span-3 text-white font-bold md:flex justify-between">
            <li className="hover:text-black cursor-pointer">service</li>
            <li className="hover:text-black cursor-pointer">continent</li>
            <li className="hover:text-black cursor-pointer">weather</li>
           </ul>
           <div className="md:hidden col-span-1 text-white font-bold flex justify-center items-center">
            more
           </div>
        </div>
    )
}