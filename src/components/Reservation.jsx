import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Reservation({reservation}){

    return(
        <Display>
            <Title>
                Pedido finalizado!
            </Title>
            <Order>
                <h1>Filme e Sessão</h1>
                <Division></Division>
                <p>{reservation.title}</p>
                <p>{reservation.date} às {reservation.time}</p>
                <h1>Ingressos</h1>
                <Division></Division>
                {reservation.seats.map(s =><p key={s}>Assento {s}</p>)}
                <h1>Comprador(a)</h1>
                <Division></Division>
                <p>{reservation.name}</p>
                <p>CPF:{reservation.cpf}</p>
            </Order>
            <LinkStyle to="/">
                <Restart>Voltar para a tela inicial</Restart>
            </LinkStyle>
        </Display>
    )
}




const Display = styled.div`
    width:100vw;
    height:89%;    
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    flex-direction:column;
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
    color:#9DB899;
    font-weight:400;
    font-family:"Sarala";
    font-size:24px; 
`

const Order = styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    background-color:#2B2D36;
    border-radius:8px;
    h1{
        font-family:"Sarala";
        font-weight:700;
        font-size:22px;
        color:#EE897F;
        margin-top:2%;
        margin-bottom:2%;
        margin-left:3%;
    }

    p{
        font-family:"Sarala";
        font-weight:400;
        font-size:20px;
        color:#FFFFFF;
        margin:0;
        margin-left:3%;
        margin-bottom:3%;
    }
`
const Division = styled.div`
    width:302px;
    height:1px;
    background-color:#4E5A65;
    margin-left:10px;  
`
const LinkStyle = styled(Link)`
    width:95%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
`
const Restart = styled.button`
    width:365px;
    height:42px;
    background-color:#EE897F;
    border:none;
    border-radius:8px;
    font-family:"Sarala";
    font-weight:700;
    font-size:18px;
    color:#2B2D36; 
    margin-top:20px;  
    
`