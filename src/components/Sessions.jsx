import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Sessions(){
    const [sessions, setSessions] = useState([])

    const {idFilme} = useParams()
    
    useEffect(()=>{

        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then(answer => setSessions(answer.data.days))
        .catch(error => console.log(error.response.data))

    },[] )




    return(
        <Display>
            <Title>
                Selecione o horário
            </Title>
        {sessions.map( session => 
            <Session key={session.id}>
                <Date>{session.weekday}, {session.date}</Date>
                    <Division></Division>
                <Timetable>
                    {session.showtimes.map(showtime => <Time key={showtime.id} to={`/assentos/${showtime.id}`}>{showtime.name}</Time>)}
                </Timetable> 
            </Session>)}
           
        </Display>
    )
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
    overflow-y:scroll;
    &::-webkit-scrollbar{
        display:none;
    }
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
const Session = styled.div`
    width:90%;
    min-height:22%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-content:center;
    background-color:#2B2D36;
    border-radius:8px;
    margin-bottom:20px;
    
`

const Date = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#FFFFFF;
    font-weight:400;
    font-family:"Sarala";
    font-size:20px;
    margin:10px;
    
`
const Division = styled.div`
    width:90%;
    height:1px;
    display:flex;
    align-self:center;
    margin:10px;
    background-color:#4E5A65;
    
`
const Timetable = styled.div`
    width:100%;
    min-height:45%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
const Time = styled(Link)`
    width:84px;
    height:41px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border:2px solid #EE897F;
    border-radius:4px;
    margin:10px;
    color: #EE897F;
    font-family:"Sarala";
    font-weight:400;
    font-size:16px;
    text-decoration:none;
`
    