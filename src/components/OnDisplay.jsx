import styled from "styled-components"
import barbie from "../images/barbie.jpeg"
import oppenheimer from "../images/oppenheimer.png"
import spider from "../images/spyder-man.png"
import everything from "../images/everything.png"
import wonka from "../images/wonka.jpeg"
import mermaid from "../images/little_mermaid.jpeg"
import { Link } from "react-router-dom"


export default function OnDisplay(){
    return(
        <div>
            <Display>
                <Title>
                    Em cartaz
                </Title>
                <Images>
                    <Image to="/sessoes/:idFilme">
                        <img src={barbie} />
                    </Image>
                        
                    <Image to="/sessoes/:idFilme">
                        <img src={oppenheimer} />
                    </Image>

                    <Image to="/sessoes/:idFilme">
                        <img src={spider} />
                    </Image>

                    <Image to="/sessoes/:idFilme">
                        <img src={everything} />
                    </Image>

                    <Image to="/sessoes/:idFilme">
                        <img src={wonka} />
                    </Image>

                    <Image to="/sessoes/:idFilme">
                        <img src={mermaid} />
                    </Image>                                   
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
    position:fixed;
    left:0;
    bottom:0;
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
    
`
const Image = styled(Link)`
     img{
        width:145px;
        height:210px;
        border-radius:8px;
        margin:7px;
    }
`