require('./ContactForm.scss');
import React from 'react'

class ContactForm extends React.Component  {
    constructor(props) {
        super(props);
        
        this.state = {
            error: {
                name: false,
                subject: false,
                email: false,
                phone: false
            },
            nameValue: '',
            subjectValue: '',
            emailValue: '',
            phoneValue: '',
            textMessageValue: ''
        }

        this.handleInputEvents = this.handleInputEvents.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleInputEvents(type, payload) {
        switch(type) {
            case 'name':
                ((typeof payload === 'string') ?
                  this.setState({nameValue: payload}) :
                  this.setState({error: Object.assign({}, this.state.error, {name: true})}));
                break;
            case 'subject':
                ((typeof payload === 'string') ?
                  this.setState({subjectValue: payload}) :
                  this.setState({error: Object.assign({}, this.state.error, {subjectValue: true})}));
                break;
        }
    }

    sendMessage({ error }) {
        if(!error.phone || !error.subject || !error.email || !error.phone) {
        }
    }

    render() {
        return (
            <div className="ConctactForm" >
                <div className="ContactFormImage" >
                </div>
                <div className="ConctactFormFormInstance" >
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Subject" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone" />
                    <textarea name="" cols="30" rows="10" className="ConctactFormTextArea" ></textarea>
                </div>
                <div className="ContactFormFooter" >
                    <div className="ContactFormFooterAttach" >
                        <img src=""/>
                        <span>Attach files</span>
                    </div>
                    <div className="ContactFormFooterButton" onClick={() => this.sendMessage(this.state)} >SEND</div>
                </div>
            </div>
        )
    }
}

export default ContactForm;