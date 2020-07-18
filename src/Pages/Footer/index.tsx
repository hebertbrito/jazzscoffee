import React from 'react';
import './styles.css'

import { SocialIcon } from '../../Components/socialicon'
import { Form } from '../../Components/form'

class Footer extends React.Component {
    render() {

        const lstTerms = [
            `© 2020 Jazz's CoffeeShop, Inc. All Rights Reserved.`,
            `Terms of Service`,
            `Privacy Policy`,
        ]

        return (
            <>
                <div className="container_footer">
                    <div className="div_footer">
                        <div className="sub1">
                            <div className="dev_by">
                                <p>Development by <a href="https://www.linkedin.com/in/hebert-oliveira-01/" className="hebert">Heber Felipe</a></p>
                            </div>
                            <div className="terms">
                                {lstTerms.length > 0 && (
                                    lstTerms.map(x => {
                                        return (
                                            <p className="item_term">{x}</p>
                                        )
                                    })
                                )}
                            </div>
                        </div>
                        <div className="sub2">
                            <SocialIcon />
                            <Form buttonName="send" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;