import React, { useState } from 'react'

const Menu = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu((prev) => !prev)

    }


  return (
    <>
    <div className='absolute h-20 ml-10 mt-5'>
        <div onClick={handleMenu} className="hover:scale-102 duration-100 ease-out">

        <img className=' h-10' src="./public/ressources/menu/menu-half-border.png" alt=""/>
        <img className={` h-10 mt-0.5 ${menu ? "hidden" : "block"}`} src="./public/ressources/menu/menu-half-border.png" alt=""/>

        </div>
    <div className={`flex flex-col items-center ${menu ? "block" : "hidden"}`}>
        <img className=' h-15 w-15 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/function.png" alt="" />
        <img className=' h-13 w-15 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/profile.png" alt="" />
        <img className=' h-15 w-15 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/experiences.png" alt="" />
        <img className=' h-15 w-15 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/formation.png" alt="" />
        <img className=' h-15 w-14 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/skill.png" alt="" />
        <img className=' h-15 w-15 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/pdf.png" alt="" />
        <img className=' h-15 w-15 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/printer.png" alt="" />
        <img className=' h-15 w-15 mt-3 hover:scale-105 duration-100 ease-out' src="./ressources/write.png" alt="" />
        <img className=' h-10 mt-3' src="./public/ressources/menu/menu-half-border.png" alt=""/>

    </div>
    </div>
    </>
  )
}

export default Menu