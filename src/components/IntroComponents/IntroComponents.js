import React from "react";

const IntroComponents = (props) => {
    return (
        <IntroSection>
            <div className = 'imgTitle'>{props.title}</div>
            <div className = 'imgDate'>{props.date}</div>
            <div className = 'imgExplanation'>{props.explanation}</div>
        </IntroSection>
    );
}

export default IntroComponents;