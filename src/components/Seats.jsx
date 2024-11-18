import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Seats(){
    const [seats, setSeats] = useState([]);

    const [selected,setSelected] = useState("false")

    //const [information, setInformation] = useState([]);
    

    const {idSessao} = useParams();

    useEffect(() => {axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
                    .then((answer)=> {setSeats(answer.data.seats)
                        // console.log(answer.data.name, answer.data.day.weekday, answer.data.day.date, answer.data.movie.title)
                    })
                    .catch((error)=> console.log(error.response.data))
    }, [])


   
    return(
        <Display>
            <Title>
                Selecione o(s) assento(s)
            </Title>
            <Chairs>
               { seats.map(seat => <Seat onClick={setSelected("true")}selected={selected} key={seat.id} available={seat.isAvailable} >{seat.name}</Seat>)}
        
            </Chairs>
            <Division></Division>
            <Wrapper>
                <form>
                    <Form>
                        <label htmlFor="name">Nome do comprador(a)</label>
                        <Information
                        id ="name"
                        required
                        type="text"
                        placeholder="Digite seu nome..."
                        />

                        <label htmlFor="cpf">CPF do comprador(a)</label>
                        <Information
                        id ="cpf"
                        required
                        type="text"
                        placeholder="Digite seu Cpf..."
                        />
                        <Link to="/sucesso">
                            <Submition type="submit" value="Reservar assento(s)" />
                        </Link>
                    </Form>
                </form>
            </Wrapper>
            
        </Display>
    )
}



const Display = styled.div`
    width:100vw;
    height:89vh;    
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
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
const Chairs = styled.div`
    width:95%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
const Seat = styled.div`
    width:26px;
    height:26px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    border-radius:50%;
    background-color:${props => props.available === "true" ? "#9DB899" 
    :props.available === "false" ? "#2B2D36"
    :props.selected === "true" ? "#FADBC5"};
    border:${props => props.available ? "1px solid #808F9D":" 1px solid #2B2D36"};
    font-family:"Roboto";
    color:#2B2D36;

   
    
`
const Division = styled.div`
    width:302px;
    height:1px;
    background-color:#4E5A65;
    margin-top:10px;
    margin-bottom:10px;    
`
const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-wrap:wrap;   
`
const Form = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    label{
        color:#FFFFFF;
        font-family:"Sarala";
        font-size:16px;
        font-weight:400;
    }
`
const Information = styled.input`
    width:90%;
    height:40px;
    background-color:#FFFFFF;
    border:1px solid #D4D4D4;
    border-radius:8px;
    margin-bottom:10px;
    &::placeholder{
        color:#AFAFAF;
        font-family:"Roboto";
        font-size:16px;
        font-weight:400;
        font-style:italic;
    }    
`
const Submition = styled.input`
    width:355px;
    height:42px;
    background-color:#EE897F;
    border:none;
    border-radius:8px;
    margin-top:20px;
    color:#2B2D36;
    font-size:18px;
    font-family:"Sarala";
    font-weight:700;    
`