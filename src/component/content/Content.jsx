import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from "../hero/Hero"
import RightSide from "../rightside/RightSide"
import "./content.css"

const Content = () => {
  return (
    <div className="content">
        <section className="section-content">
        <div className="row" >
            <div className="col-lg-2 col-md-1" style={{padding:"0px"}}><Navbar /></div>
            <div className="col-lg-7 col-md-7" ><Hero /></div>
            <div className="col-lg-3 col-md-4" style={{padding:"0px"}}><RightSide /></div>
        </div>
        </section>
    </div>
  )
}

export default Content