import {React, useState} from 'react'
import navbar from './Navbarlist'
import {motion} from 'framer-motion'
import "./navbar.css"
const Header = () => {
  const[isActive,setIsActive] = useState(0);
  const[toggle,setToggle] = useState(true);
  const option= {
    true:{
      left:'0'
    },
    false:{
      left:'-60%'
    }
  }
  return (
    <>

    <div onClick={() => setToggle(!toggle) }  className="bars" style={toggle? {left:"58%"}:{left:"5%"}}>
      <h1>x</h1>
    </div>
    <motion.div 
    variants={option}
    animate={window.innerWidth<= 768? `${toggle}`:""}
    className="navbarMenu">
      <div className="navbarMenu-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-shop-window" viewBox="0 0 16 16">
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        <span>Sh<span className="text-danger">o</span>ps</span>
      </div>
      <div className="navbarMenu-content ">
          {
            navbar.map(
              (navabrs,index)=> 
            {
              return(
                <div className={isActive === index ? "menu-content active":"menu-content"} 
                key={index}
                onClick={()=>setIsActive(index)}
                >
                  <img src={navabrs.img} alt={navabrs.name}/>
                  <h3>{navabrs.name}</h3>
                </div>
              )
            }
            )
          }
      </div>
    </motion.div>
    </>
  )
}

export default Header