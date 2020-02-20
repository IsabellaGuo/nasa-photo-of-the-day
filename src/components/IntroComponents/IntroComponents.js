import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div`
color: dodgerblue;
background: black;
text-align: center;
margin: 2rem;
padding: 1.5rem;
line-height: 20px;
`
const IntroComponents = (props) => {
    return (
        <WrapperDiv>
            <div className = 'title'>{props.title}</div>
            <div className = 'date'>{props.date}</div>
            <div className = 'explanation'>{props.explanation}</div>
        </WrapperDiv>
    );
}

export default IntroComponents;