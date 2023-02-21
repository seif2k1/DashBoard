import React from 'react'
import "./card.css"
import Cards from './card/Cards'
import Cardsitem from './Cardsitem'
const Card = () => {
  return (
    <div className="Card">
        {
            Cardsitem.map((card,index)=>{
                return (
                  <div className="parentContainer">
                  <Cards
                  title={card.title}
                  color={card.color}
                  barValue={card.barValue}
                  value={card.value}
                  png={card.png}
                  series={card.series}
                  />
                  </div>
                )
            })
        }
    </div>
  )
}

export default Card