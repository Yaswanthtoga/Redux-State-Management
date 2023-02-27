import React from 'react'
import "../App.css";
import { useDispatch } from 'react-redux';
import { reservationRemove } from '../features/reservationSlice';

interface Props{
    name:string,
    index:number
}

const ReservationCard = (props:Props) => {
  
  const dispatch = useDispatch();  

  const handleClick = ()=>{
    dispatch(reservationRemove(props.index));
  }  
    
  return (
    <div onClick={handleClick} className="reservation-card-container">{props.name}</div>
  )
}

export default ReservationCard