import axios from 'axios';
import React from 'react';

const ImgComponents = (props) => {
    return(
        <div>
            <img src = {props.url} alt = 'NASA daily photo' />
        </div>
    )
}

export default ImgComponents;