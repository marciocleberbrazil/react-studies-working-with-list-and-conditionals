import React from 'react';


const validation = (props) => {
    let displaySizeMessage = null;

    if(props.stringSize === 0){
        displaySizeMessage = null;
    } else if(props.stringSize <= 5) {
        displaySizeMessage = <p>Text too short</p>;
    } else {
        displaySizeMessage = <p>Text long enough</p>;
    }

    return displaySizeMessage;
}

export default validation;