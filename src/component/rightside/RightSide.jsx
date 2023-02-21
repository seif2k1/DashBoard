import React from 'react'
import "./rightside.css"
import RightSideInfo from './RightSideInfo'
import Chart from 'react-apexcharts'

const RightSide = () => {
  
          const info ={
            
    options:{
      chart:{
        type: "area",
        height:"auto",
      },
      dropoShadow:{
        enabled:false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color:"#000",
        opacity:0.8,
      },
      fill:{
        color:["#fff"],
        type:"gradient",
      },
      dataLabels:{
        enabled:false,
      },
      stroke:{
        curve:"smooth",
        colors:["cyan"],
      },
      tooltip:{
        x:{
          format:"dd/MM/yy HH:mm"
        },
      },
      grid:{
        show:false,
      },
      yaxis:{show:false,},
      toolbar:{show:false},
      xaxis:{
        type:"datetime",
        categories:[
          "2023-01-05T00:00:00.000Z",
          "2023-02-05T01:30:00.000Z",
          "2023-03-05T02:30:00.000Z",
          "2023-04-05T03:30:00.000Z",
          "2023-05-05T04:30:00.000Z",
          "2023-06-05T05:30:00.000Z",
          "2023-07-05T06:30:00.000Z",
        ],
      },
    }
          }
          const Series= {
          series:[
              {
                name:"Seif",
                data:[31,40,28,51,42,109,100],
              }
          ]}
  return (
    <div className="right-side">
      {
        RightSideInfo.map((info,index)=>{
          return(
            <div className="updates">
              <div className="update-profile">
                <img src={info.img} alt="" />
              </div>
              <div className="update-info">
                <span> {info.name}    </span>
                <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas harum.</span>
                <span>{info.time} </span>
              </div>
            </div>
          )
        })
      }
      <h4>Customer View</h4>
        <div className="table-dash">
          <Chart series={Series.series} type='area' options={info.options} />
        </div>
    </div>
  )
}

export default RightSide