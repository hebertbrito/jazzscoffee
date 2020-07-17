import React from 'react';
import './styles.css'

import { SocialIcon } from '../../Components/socialicon'
import { Form } from '../../Components/form'

class Footer extends React.Component {
    render() {

        return (
            <>
                <div className="container_footer">
                    <div className="sub1">
                        
                    </div>
                    <div className="sub2">
                        <SocialIcon />
                        <Form buttonName="send"/>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;