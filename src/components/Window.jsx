import React from 'react'
import WindowContent from './WindowContent'
import data from "../data/data.js";

const Window = ({type}) => {


  return (
    <>
   
    {/* <div className='display'> */}

    <div className={`border-solid border-3 shadow-[10px_8px_0px_#13505B] m-5 ${type === "experiences" || type==="formations" || type==="competences" ?"w-[39vw]" : "w-[80vw] grid grid-rows-[auto auto] grid-cols-3"} ` }>
      {/* <div className='window'>  */}
        <div className='border-solid border-b-3 bg-[#119DA4] flex flex-row justify-between items-center col-start-1 col-end-4'>
       {/* <div className='window-name'> */}
      

        {type === "function" ? (
          <h1 className='ml-5 text-xl pt-5 pb-5 font-bold'>{data.function}</h1>
        ) : (
            <h2 className='ml-5 pt-5 pb-5 text-xl font-bold'>{type}</h2>
        )}
            <div className='flex flex-row mr-5'>
                <div className='w-[20px] h-[20px] border-solid border-2 m-1 rounded-md flex flex-row justify-center item-center hover:animate-bounce'>
                    <div className='w-[15px] h-[15px] bg-contain '></div>
                </div>
                <div className='w-[20px] h-[20px] border-solid border-2 m-1 rounded-md flex flex-row justify-center item-center hover:animate-bounce'>
                    <div className='w-[15px] h-[15px] bg-contain bg-[url(../public/ressources/icons/g1.png)] '></div>
                </div>
            </div>
        </div>

        <WindowContent type={type}/>
    
    </div>

    </>
  )
}

export default Window