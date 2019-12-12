import React from "react";

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