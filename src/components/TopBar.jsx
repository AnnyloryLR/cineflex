import styled from "styled-components"
import logo from "../images/clapperboard.png"

export default function TopBar(){
    return(  
        <Bar><img src={logo}></img> Cineflex</Bar>
    )
}



const Bar = styled.div`
    width:100%;
    height:11%;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color:#EE897F;
    color:#FADBC5;
    font-size:34px;
    font-weight:600;
    font-family:"Raleway";

    img{
        width:40px;
        height:40px;
        margin-right:8px;

    }

`