import React,{useEffect,useState} from 'react'
import Sort from '../Sort/Sort'

const SortBy = ({setParam,param}) => {
 const [sortDeaths,setSortDeaths] = useState([])
 const [sortConfirmed,setSortConfirmed] = useState([])
 const [sortTDeaths,setSortTDeaths] = useState([])
 const [sortTConfirmed,setSortTConfirmed] = useState([])

        useEffect(()=>{
        
                function set() {
   
                   setParam(param.sort((a,b)=>b.deaths-a.deaths))
                   setSortDeaths([...param].splice(0,5))
                   
                   setParam(param.sort((a,b)=>b.confirmed-a.confirmed))
                   setSortConfirmed([...param].splice(0,5))
   
                   setParam(param.sort((a,b)=>b.todayDeaths-a.todayDeaths))
                   setSortTDeaths([...param].splice(0,5))
   
                   setParam(param.sort((a,b)=>b.todayConfirmed-a.todayConfirmed))
                   setSortTConfirmed([...param].splice(0,5))
   
                   
               }
               set();
           },[param])
  
 return (
    <div>
       <Sort text={"Most Deaths - All Time"} dataDisplay={sortDeaths.map((el)=> <p>{el.name}:{el.deaths}</p>)}/>
       <Sort text={"Most Confirmed - All Time"} dataDisplay={sortConfirmed.map((el)=><p>{el.name}:{el.confirmed}</p>)}/>
       <Sort text={"Most Deaths -Today"} dataDisplay={sortTDeaths.map((el)=><p>{el.name}:{el.deaths}</p>)}/>
       <Sort text={"Most confirmed - Today"} dataDisplay={sortTConfirmed.map((el)=><p>{el.name}:{el.todayDeaths}</p>)} />
        
   </div>
   
  )
}

export default SortBy