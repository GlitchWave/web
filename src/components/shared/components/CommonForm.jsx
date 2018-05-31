import React from 'react';
import ReactPhoneInput from 'react-phone-input';

const CommonForm = (props) => {
    let sourceOfStyles = {
        mainClassname: props.mainClassname || 'CommonForm',
        firstBlockClassname: props.firstBlockClassname || 'CommonFormFirstBlock',
        secondBlockClassname: props.secondBlockClassname || props.firstBlockClassname || 'CommonFormFirstBlock',
        textAreaClassname: props.textAreaClassname || 'CommonFormTextArea',
        buttonClassname: props.buttonClassname || 'CommonFormSendButton'
    },
        sourceOfText = {
            title: props.title || 'Contact Us',
            textAreaPlaceholder: props.textAreaText || 'Tell us about your project',
            buttonText: props.buttonText || 'Send!'
        };
    return (
        <div className={sourceOfStyles.mainClassname} >
            <h1>{sourceOfText.title}</h1>
            <div className={sourceOfStyles.firstBlockClassname} >
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
            </div>
            <div className={sourceOfStyles.secondBlockClassname} >
                <ReactPhoneInput defaultCountry={props.phoneDefaultCountry || 'ua'} />
                <input type="text" placeholder="Subject" />
            </div>
            <textarea cols="30"
                  rows="10"
                  className={sourceOfStyles.textAreaClassname}
                  placeholder={sourceOfText.textAreaPlaceholder}
                  ></textarea>
            <div className={sourceOfStyles.buttonClassname} >{sourceOfText.buttonText}</div>
        </div>
    )
}

export default CommonForm;