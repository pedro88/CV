import React from 'react'
import WindowContent from './WindowContent'

const windowName = "yololo"

const Window = ({type}) => {


  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    {/* <div className='display'> */}

    <div className='grid grid-cols-3 grid-rows-[auto auto] border-solid border-3 w-[80vw] shadow-[10px_8px_0px_#13505B] m-5'>
      {/* <div className='window'>  */}
        <div className='border-solid border-b-3 bg-[#119DA4] flex flex-row justify-between item-center col-start-1 col-end-4'>
       {/* <div className='window-name'> */}
            <h2 className='ml-5'>{type}</h2>
            <div className='flex flex-row mr-5'>
                <div className='w-[20px] h-[20px] border-solid border-2 m-1 rounded-md flex flex-row justify-center item-center'>
                    <div className='w-[15px] h-[15px] bg-contain '></div>
                </div>
                <div className='w-[20px] h-[20px] border-solid border-2 m-1 rounded-md flex flex-row justify-center item-center'>
                    <div className='w-[15px] h-[15px] bg-contain bg-[url(../public/ressources/icons/g1.png)]'></div>
                </div>
            </div>
        </div>

        <WindowContent type={type}/>
    
    </div>

    </div>
    </>
  )
}

export default Window