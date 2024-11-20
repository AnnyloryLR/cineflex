import styled from "styled-components"
import { Link} from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"




export default function OnDisplay(){
    const [items, setItems] = useState(null)

    useEffect(()=>{
        const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        request.then((answer)=> setItems(answer.data))

        request.catch((error) => console.log(error.response.data))

    },[])

    if(items === null){
        return(
            <div>Carregando...</div>
        )
    }

   


    return(
        <div>
            <Display>
                <Title>
                    Em cartaz
                </Title>
                <Images>
                    {items.map(item => 
                    <Image to={`/sessoes/${item.id}`} key={item.id}>
                        <img src={item.posterURL} />
                    </Image>)}
        
                </Images>
            </Display>
       </div>)
}



const Display = styled.div`
    width:100vw;
    height:89%;    
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