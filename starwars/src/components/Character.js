// Write your Character component here
import React, {useState, useEffect, Component} from "react";
import styled from "styled-components";

const StyledImage = styled.img`
border-radius:50%;
border:#db1515 2px solid;
`;

const StyledDiv = styled.div`
border:#db1515 2px dotted;
border-radius:80%;
width:30%;
height:20%;
background-color:#7fffd4;
padding:2%;
margin:3%;
color:#db371a;
font-style:italic;
text-shadow: 1px 1px 5px #ff3300;
font-family: Comic Sans MS;
font-size:20px;
`;

const StyledCard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const Character = (props)=>{
    let {data}=props;
    return(
        <StyledCard>
            {data.map(character=>{
                return(
                <StyledDiv>
                    <h3>Name:{character.name}</h3>
                    <h3>Status:{character.status}</h3>
                    <h3>Species:{character.species}</h3>
                    <h3>Gender:{character.gender}</h3>
                    <StyledImage src={character.image}/>
                    </StyledDiv>
                )
            })}
                
            
        </StyledCard>
    );

}

export default Character;