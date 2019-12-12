import React from "react";
import styled from 'styled-components';

const IntroComponents = (props) => {
    return (
        <div>
            <div className = 'title'>{props.title}</div>
            <div className = 'date'>{props.date}</div>
            <div className = 'explanation'>{props.explanation}</div>
        </div>
    );
}

export default IntroComponents;