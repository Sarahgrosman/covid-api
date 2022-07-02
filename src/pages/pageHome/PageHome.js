import React from 'react'
import Home from '../../components/Home/Home'

import SortBy from '../../components/SortBy/SortBy'

const PageHome = ({setParam,param}) => {
   

  
  return (
    <div>
      <Home  />
    <SortBy setParam={setParam} param={param}/>
      </div>
  )
}

export default PageHome





