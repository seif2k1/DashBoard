import {React,useState} from 'react'
import "./cards.css"
import {AnimateSharedLayout, motion} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts'

const Cards = (props) => {
  const [expanded,setExpanded] = useState(false);
  
  return (
    <AnimateSharedLayout>
      {
        expanded ? <Expanded param={props} setExpanded={()=>setExpanded(!expanded)} /> :
        <CompactCard param={props} setExpanded={()=>setExpanded(!expanded)} />
      }
    </AnimateSharedLayout>
  )
}
function CompactCard({param,setExpanded}){
  const Png = param.png;
  return(
    <motion.div
    className="CompactCard"
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
    }}
    layoutId='expandableCard'
    onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue} %`}
        />
        <span>{param.title} </span>
      </div>
      <div className="detail">
        <img src={Png} alt="" />
        <span>{param.value}$</span>
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  )
}
function Expanded({param,setExpanded}){
  const data={
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
        opacity:0.35,
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
        colors:["white"],
      },
      tooltip:{
        x:{
          format:"dd/MM/yy HH:mm"
        },
      },
      grid:{
        show:true,
      },
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
  return(
    <motion.div className="ExpandedCard"
    layoutId='expandableCard'
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
    }}
    >
      <div className="exit-logo" onClick={setExpanded} style={{alignSelf:"flex-end",color:"white",cursor:"pointer"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
      <span> {param.title} </span>
      <div className="chartContainer">
        <Chart series={param.series} type='area' options={data.options} />
      </div>
        <span>Last 24 Hours</span>
    </motion.div>
  )
}

export default Cards