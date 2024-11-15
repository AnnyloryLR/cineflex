import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Seats(){
    return(
        <Display>
            <Title>
                Selecione o(s) assento(s)
            </Title>
            <Chairs>
                <Seat>1</Seat>
                <Seat>2</Seat>
                <Seat>3</Seat>
                <Seat>4</Seat>
                <Seat>5</Seat>
                <Seat>6</Seat>
                <Seat>7</Seat>
                <Seat>8</Seat>
                <Seat>9</Seat>
                <Seat>10</Seat>
                <Seat>11</Seat>
                <Seat>12</Seat>
                <Seat>13</Seat>
                <Seat>14</Seat>
                <Seat>15</Seat>
                <Seat>16</Seat>
                <Seat>17</Seat>
                <Seat>18</Seat>
                <Seat>19</Seat>
                <Seat>20</Seat>
                <Seat>21</Seat>
                <Seat>22</Seat>
                <Seat>23</Seat>
                <Seat>24</Seat>
                <Seat>25</Seat>
                <Seat>26</Seat>
                <Seat>27</Seat>
                <Seat>28</Seat>
                <Seat>29</Seat>
                <Seat>30</Seat>
                <Seat>31</Seat>
                <Seat>32</Seat>
                <Seat>33</Seat>
                <Seat>34</Seat>
                <Seat>35</Seat>
                <Seat>36</Seat>
                <Seat>37</Seat>
                <Seat>38</Seat>
                <Seat>39</Seat>
                <Seat>40</Seat>
                <Seat>41</Seat>
                <Seat>42</Seat>
                <Seat>43</Seat>
                <Seat>44</Seat>
                <Seat>45</Seat>
                <Seat>46</Seat>
                <Seat>47</Seat>
                <Seat>48</Seat>
                <Seat>49</Seat>
                <Seat>50</Seat>
        
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
    background-color:#9DB899; //#FADBC5;//#2B2D36;
    border:1px solid #808F9D;//2px solid #EE897F;//1px solid #2B2D36;
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