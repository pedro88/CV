import React from 'react'
import WindowContent from './WindowContent'

const windowName = "yololo"

const Window = ({type}) => {


  return (
    <>
    <div className='display'>


    <div className='window'>
        <div className='window-name'>
            <h2 className='name'>{type}</h2>
            <div className='btn-container'>
                <div className='icon'>
                    <div className='reduce'></div>
                </div>
                <div className='icon'>
                    <div className='close'></div>
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