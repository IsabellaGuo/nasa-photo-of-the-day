import React from "react";
import styled from 'styled-components';

const H1 = styled.h1`
font-size: 1.5rem;
text-align: center;
margin: 2rem;
color: #191970;
background-color: #6495ED;
height: 5rem;
;
`;

const HeaderComponents = () => {
    return (
        <header>
             <div className = 'heading'>
                 <H1>NASA Photo Of The Day</H1>
             </div>
        </header>
    );
}

export default HeaderComponents;