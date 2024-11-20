import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { Seat } from "./Seat";

export default function Seats(){

    const [seats, setSeats] = useState([]);
    
    const {idSessao} = useParams();

    const [name, setName] = useState("");

    const [cpf, setCpf] = useState("")

    const [chosen, setChosen] = useState([]) 

    const navigate = useNavigate()

    useEffect(() => {axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
                    .then((answer)=> setSeats(answer.data.seats))
                    .catch((error)=> console.log(error.response.data))
    }, [])


    function submitForm(event){
        event.preventDefault()
        const information = {name,cpf, ids:chosen}

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", information)
        .then(res => navigate("/sucesso"))
        .catch(err => console.log(err))
    }

   
    return(
        <Display>
            <Title>
                Selecione o(s) assento(s)
            </Title>
            <Chairs>
               {seats.map(seat => <Seat 
                    key={seat.id}
                    id={seat.id}  
                    available={seat.isAvailable} 
                    chosen={chosen}
                    setChosen={setChosen}
                     name={seat.name}></Seat>)}
            </Chairs>
            <Division></Division>
            <Wrapper>
                <form onSubmit={submitForm}>
                    <Form>
                        <label htmlFor="name">Nome do comprador(a)</label>
                        <Information
                        id ="name"
                        required
                        type="text"
                        placeholder="Digite seu nome..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />

                        <label htmlFor="cpf">CPF do comprador(a)</label>
                        <Information
                        id ="cpf"
                        required
                        type="text"
                        placeholder="Digite seu Cpf..."
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        />
                        <Submition type="submit" value="Reservar assento(s)" />

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
    width:90%;
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