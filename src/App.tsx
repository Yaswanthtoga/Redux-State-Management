import React, { useState } from "react";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { reservationAdd } from "./features/reservationSlice";

function App() {
  const [reservationName,setReservationName] = useState<string>("");
  const reservations = useSelector((state:RootState)=>state.reservations.value);

  const dispatch = useDispatch();

  const handleClick = ()=>{
    if(reservationName.length===0)return;
    dispatch((reservationAdd(reservationName)));
    setReservationName("");
  }

  
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              { reservations.map((name,index)=><ReservationCard index={index} name={name}/>) }
            </div>
          </div>
          <div className="reservation-input-container">
            <input onChange={(e)=>setReservationName(e.target.value)} />
            <button onClick={handleClick}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input/>
                <button >Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;