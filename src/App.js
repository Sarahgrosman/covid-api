import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect,useState } from 'react';
import PageHome from "./pages/pageHome/PageHome";
import About from "./pages/About/About";
import CountriesPage from "./pages/CountriesPage/CountriesPage";

function App() {
 
 
 const [countryValue,setCountryValue] = useState('')
    console.log(countryValue);
const [param,setParam]=useState([])
    console.log("param: ",param);
  
 
  
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar  selectCountries={param.map((el)=> <option value={el.code}> {el.name} </option>)}
                setParam = {setParam}
                countryCode={(e)=>{
                  setCountryValue(e.target.value)
                }}
                 /> 
       <Routes>
           <Route path ="/" element={<PageHome setParam={setParam} param={param}/>}  />                                    
                                                      
          <Route path="/About" element={<About />} />
          <Route path="/CountriesPage" element={<CountriesPage countryValue={countryValue}/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
