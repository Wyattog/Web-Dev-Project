import React from 'react';

function ApplianceDisplay (props) {
    if (props.appliance.complete) {
       return null;
    }

    const {name, desc, price} = props.appliance;

    return (
        <div className="applianceDisplay">
<span className="has-text-light"> {name} </span> <br/>
<span className="has-text-light"> {desc} </span> <br/>
<span className="has-text-light"> {price} </span> <br/>
        </div>
    )
}

export default ApplianceDisplay;