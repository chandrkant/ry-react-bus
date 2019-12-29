import React, {useState} from 'react';
import ListItem from "./components/list-item";
import './App.css';

function App() {
  const [busItem, setBusItem ] = useState({})
  return (
    <div className="container-fluid">
      <div className="col-lg-3">

      </div>
      <div className="col-lg-9">
        <img src={busItem.bus_header_image} alt=""></img>
        <ListItem setBusItem ={setBusItem}/>
      </div>
    </div>
  );
}

export default App;
