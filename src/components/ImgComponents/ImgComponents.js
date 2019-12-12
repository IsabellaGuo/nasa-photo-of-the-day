
import React from 'react';
import styled from 'styled-components';

const ImgComponents = (props) => {
    return(
        <div>
            <img src = {props.url} alt = 'NASA daily photo' />
        </div>
    );
}

export default ImgComponents;