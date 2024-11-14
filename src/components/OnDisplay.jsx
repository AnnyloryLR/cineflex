import styled from "styled-components"
import barbie from "../images/barbie.jpeg"
import oppenheimer from "../images/oppenheimer.png"
import spider from "../images/spyder-man.png"
import everything from "../images/everything.png"
import wonka from "../images/wonka.jpeg"
import mermaid from "../images/little_mermaid.jpeg"


export default function OnDisplay(){
    return(
        <div>
            <Display>
                <Title>
                    Em cartaz
                </Title>
                <Images>
                    <img src={barbie} />
                    <img src={oppenheimer} />
                    <img src={spider} />
                    <img src={everything} />
                    <img src={wonka} />
                    <img src={mermaid} />
                </Images>
            </Display>
       </div>)
}



const Display = styled.div`
    width:100vw;
    height:89vh;    
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    background-color:#212226; 
    margin-top:11vh;
`
const Title = styled.div`
    width:100%;
    height:11%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#FFFFFF;
    font-weight:400;
    font-family:"Sarala";
    font-size:24px; 
   
`
const Images = styled.div`
    width:90%;
    height:86%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    overflow-y:scroll;
    &::-webkit-scrollbar{
        display:none;
    }
   
    img{
        width:145px;
        height:210px;
        border-radius:8px;
        margin:7px;
    }
`