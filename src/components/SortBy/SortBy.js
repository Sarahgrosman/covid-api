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
        <div>
        <div>
        <h3>Most Deaths - All Time</h3>
        <ul>
            { sortDeaths.map((el)=>
    <Sort
      el={el}
      parameter={el.deaths}
     />
) }
        </ul>
        </div>
        
        
        <div>
        <h3>Most confirmed - All Time</h3>
        <ul>
            { sortConfirmed.map((el)=>
    <Sort
      el={el}
      parameter = {el.confirmed}
     />
) }
        </ul>
        </div>
        </div>

        <div>
        <div>
        <h3>Most Deaths -Today</h3>
        <ul>
            { sortTDeaths.map((el)=>
    <Sort
      el={el}
      parameter={el.todayDeaths}
     />
) }
        </ul>
        </div>
        
        
        <div>
        <h3>Most confirmed - Today</h3>
        <ul>
            { sortTConfirmed.map((el)=>
    <Sort
      el={el}
      parameter = {el.todayConfirmed}
     />
) }
        </ul>
        </div>
        </div>
    </div>
   
  )
}

export default SortBy