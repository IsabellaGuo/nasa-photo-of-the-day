
import React from 'react';
import styled from 'styled-components';

const ImgDiv = styled.div`
background-color: black;
border: 1px solid blue;
display: flex;
justify-content: center;
padding: 2rem;
margin: 2rem;

`

const ImgComponents = (props) => {
    return(
        <ImgDiv>
            <img src = {props.url} alt = 'NASA daily photo' />
        </ImgDiv>
    );
}

export default ImgComponents;