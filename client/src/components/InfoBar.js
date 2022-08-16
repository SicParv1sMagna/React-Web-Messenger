import React from 'react';

import '../Style.css';

const InfoBar = ({ room }) => {
    return(
        <div className = "infoBar">
            <div className = "leftInnerContainer">
                <h3>{ room }</h3>
            </div>
            <div className = "rightInnerContainer">
                <a href = "/"><img src = "../closeIcon.png" alt = "closeIcon" className = "closeIcon"/></a>
            </div>
        </div>
    )
}

export default InfoBar;