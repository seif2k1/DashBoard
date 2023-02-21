import card1 from "./currency-dollar.svg"
import card2 from "./coin.svg"
import card3 from "./clipboard.svg"

 const Cardsitem = [
    {
        title:"Sales",
        color:{
            backGround:"linear-gradient(180deg, yellow 0%, pink 100%)",
            boxShadow:"0 10p 20px 0 #e0c6f5"
        },
        barValue:70,
        value:"25.970",
        
        png:card1,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            }
        ]
    },
    {
        title:"Revenue",
        color:{
            backGround:"linear-gradient(180deg, cyan 0%, lime 100%)",
            boxShadow:"0 10p 20px 0 #fdc0c7"
        },
        barValue:80,
        value:"14.270",
        png:card2,
        series:[
            {
                name:"Sales",
                data:[10,100,50,70,80,30,1040],
            }
        ]
    },
    {
        title:"Expenses",
        color:{
            backGround:"linear-gradient(180deg, chocolate 0%, gray 100%)",
            boxShadow:"0 10p 20px 0 #fdc0c7"
        },
        barValue:60,
        value:"4.270",
        png:card3,
        series:[
            {
                name:"Sales",
                data:[10,25,15,30,12,15,20],
            }
        ]
    },
]
export default Cardsitem