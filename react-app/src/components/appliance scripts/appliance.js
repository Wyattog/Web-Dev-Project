import React from 'react';
import ApplianceDisplay from './applianceDisplay';

function ApplianceList(props) {
    const applianceComponents = props.appliance.map(appliance => <ApplianceDisplay appliance={appliance} key={appliance.id} />);

    return (
        <div>
            {applianceComponents}
        </div>
    );
}

export default ApplianceList;