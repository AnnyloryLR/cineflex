
import styled from "styled-components";
import { useState } from "react";

export function Seat({name, id, available, chosen, setChosen}){

    const [StyleSeat, setStyle] = useState(SeatStyle);

   

    function select(){
        if(StyleSeat === SeatStyle && available === true){
            let chosenSeat = id;
            const newSeats = [...chosen, chosenSeat]
            setChosen(newSeats)
            setStyle(SelectedSeat)

           
        }else if(StyleSeat === SelectedSeat){
            setStyle(SeatStyle)
            
        }else{
            setStyle(SeatStyle)
            alert("Este assento não está disponível")
        }  
    }




    return(
        <>
            <StyleSeat  
                 available={available} 
                 id={id}
                 onClick={select}
                 >{name}
            </StyleSeat> 
        </>
    )






}

const SeatStyle = styled.div`
    width:26px;
    height:26px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    border-radius:50%;
    box-sizing:border-box;
    background-color:${props => props.available ? "#9DB899":"#2B2D36"};
    border:${props => props.available ? "1px solid #808F9D":" 1px solid #2B2D36"};
    font-family:"Roboto";
    color:#2B2D36;  
    
`

const SelectedSeat = styled.div`
    width:26px;
    height:26px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    border-radius:50%;
    box-sizing:border-box;
    background-color:#FADBC5;
    border:2px solid #EE897F;
    font-family:"Roboto";
    color:#2B2D36;

`