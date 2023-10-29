import './App.css';
import { useState } from 'react';
function Sauare({value}){
  return(
    <>
     <button className='square'>{value}</button>
   </>
  );
  
}
export default function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
return (
<>
  <div className="board-row">
    <Sauare value={squares[0]}/>
    <Sauare value={squares[1]}/>
    <Sauare value={squares[2]}/>
  </div>
  <div className="board-row">
    <Sauare value={squares[3]}/>
    <Sauare value={squares[4]}/>
    <Sauare value={squares[5]}/>
  </div>
  <div className="board-row">
    <Sauare value={squares[6]}/>
    <Sauare value={squares[7]}/>
    <Sauare value={squares[8]}/>
  </div>
</>
);
}