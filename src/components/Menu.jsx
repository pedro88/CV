import React, { useState } from 'react'

const Menu = ({ handleDisplayExperience, handleDisplayFormation, handleDisplayFunction, handleDisplayPDF, handleDisplayPrinter, handleDisplayProfile, handleDisplaySkill, handleDisplayWrite}) => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu((prev) => !prev)
    }
  return (
    <>
    <div className='absolute h-10 ml-10'>
        <div onClick={handleMenu} className="hover:scale-102 duration-100 ease-out">

        <img className=' h-10' src="./menu-half-border.png" alt=""/>
        <img className={` h-10 mt-0.5 ${menu ? "hidden" : "block"}`} src="./menu-half-border.png" alt=""/>

        </div>
    <div className={`flex flex-col items-center ${menu ? "block" : "hidden"}`}>
        <img onClick={handleDisplayFunction} className='menu-logo ' src="./function.png" alt="" />
        <img onClick={handleDisplayProfile} className='menu-logo ' src="./profile.png" alt="" />
        <img onClick={handleDisplayExperience} className='menu-logo ' src="./experiences.png" alt="" />
        <img onClick={handleDisplayFormation} className='menu-logo ' src="./formation.png" alt="" />
        <img onClick={handleDisplaySkill} className='menu-logo ' src="./skill.png" alt="" />
        <img onClick={handleDisplayPDF} className='menu-logo ' src="./pdf.png" alt="" />
        <img onClick={handleDisplayPrinter} className='menu-logo ' src="./printer.png" alt="" />
        <img onClick={handleDisplayWrite} className='menu-logo ' src="./write.png" alt="" />
        <img className=' h-10 mt-3' src="./menu-half-border.png" alt=""/>

    </div>
    </div>
    </>
  )
}

export default Menu