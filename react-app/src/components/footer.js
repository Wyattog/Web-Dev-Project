import React from 'react';

import Moment from 'react-moment';

class Footer extends React.Component {
render() {
    return(
    <footer className='footer'>(C) Hive Construction inc.
        <Moment format="YYYY">2020</Moment>
    </footer>	
    )
}
}
export default Footer;