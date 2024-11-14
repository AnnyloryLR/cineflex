import styled from "styled-components"

export default function Sessions(){
    return(
        <Display>
            <Title>
                Selecione o horário
            </Title>
            <Session>
                <Date>Quinta-feira, 21/03/2024</Date>
                <Division></Division>
                <Timetable>
                    <Time>10:00</Time>
                    <Time>15:00</Time>
                    <Time>19:00</Time>
                </Timetable> 

            </Session>
           
            <Session>
                <Date>Sexta-feira, 21/03/2024</Date>
                <Division></Division>
                <Timetable>
                    <Time>10:00</Time>
                    <Time>12:00</Time>
                    <Time>15:00</Time>
                    <Time>18:00</Time>
                    <Time>21:00</Time>
                </Timetable> 

            </Session>
      
            <Session>
                <Date>Sábado, 22/03/2024</Date>
                <Division></Division>
                <Timetable>
                    <Time>10:00</Time>
                    <Time>12:00</Time>
                    <Time>15:00</Time>
                </Timetable> 

            </Session>

            <Session>
                <Date>Domingo, 23/03/2024</Date>
                <Division></Division>
                <Timetable>
                    <Time>10:00</Time>
                    <Time>15:00</Time>
                    <Time>19:00</Time>
                </Timetable> 

            </Session>
           
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
    align-items:center;
    justify-content:space-around;
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
    width:302px;
    height:1px;
    background-color:#4E5A65;
    margin-top:5px;
    margin-bottom:5px;
    
`
const Timetable = styled.div`
    width:100%;
    min-height:45%;
    display:flex;
    flex-wrap:wrap;
`
const Time = styled.div`
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
`
    