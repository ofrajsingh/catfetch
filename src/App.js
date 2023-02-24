import './App.css';
import axios from 'axios';
import { useEffect, useState  } from 'react';

function App() {

  const [catFact,setCatFact]= useState("");

  const fetchCatFact=()=>{
  //   fetch("https://catfact.ninja/fact")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setCatFact(data.fact);
  //   });

    axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    })
  }

  useEffect(()=>{
    fetchCatFact();
  },[])

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
