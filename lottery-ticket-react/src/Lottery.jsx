import { useState } from "react"    
import './Lottery.css'
import { genTicket,sum } from "./helper";
import Button from "./Button";  
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n)); //state
    let isWinning = winCondition(ticket)

    let buyTicket = () =>{
        setTicket(genTicket(n))
    }
    return(
        <div>
            <h1 className="title">Lottery Games!</h1>
            <h3 className="win">{isWinning && "Congratuations,you won!"} </h3>
            <br />
           <Ticket ticket={ticket} />
           <br />
            <Button action = {buyTicket}/>
            <br />
            
        </div>
    )
}