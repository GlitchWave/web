require('./CommonForm.scss');
import React from 'react';

const CommonForm = (props) => {
    return (
        <div className="CommonForm" >
            <h3>Send us a Message</h3>
            <div className="CommonFormInputs" >
                <div className="CommonFormInputsItem">
                    <input type="text" placeholder="Name" />
                    <input type="tel" placeholder="Phone" />
                </div>
                <div className="CommonFormInputsItem">
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                </div>
            </div>
            <textarea cols="30" rows="10" placeholder="Message" className="CommonFormTextArea" ></textarea>
            <div className="CommonFormFooter" >
                <div className="CommonFormFooterFirst" >
                    <img src="https://image.ibb.co/dqhdN8/1_asset_1.png"/>
                    <span>Attach file</span>
                </div>
                <div className="CommonFormFooterButton" >
                    Send
                </div>
            </div>
        </div>
    )
}

export default CommonForm;