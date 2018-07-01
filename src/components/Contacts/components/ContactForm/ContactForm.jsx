require('./ContactForm.scss');
import React from 'react'

class ContactForm extends React.PureComponent  {
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
            case 'email':
                ((typeof payload === 'string') ?
                  this.setState({emailValue: payload}) :
                  this.setState({error: Object.assign({}, this.state.error, {emailValue: true})}));
                break;
            case 'phone':
                ((typeof payload === 'string') ?
                  this.setState({phoneValue: payload}) :
                  this.setState({error: Object.assign({}, this.state.error, {phoneValue: true})}));
                break;
            case 'message':
                this.setState({textMessageValue: payload});
                break;
            default:
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
                <div className="ConctactFormWraper" >
                <div className="ContactFormImage"
                     style={{backgroundImage: `url(${'https://image.ibb.co/cCGMKy/invalid_name.png'})`}}
                 >
                </div>
                <div className="ConctactFormFormInstance" >
                    <input type="text"
                           placeholder="Name"
                           onInput={(event) => this.handleInputEvents('name', event.target.value)}
                           value={this.state.nameValue}
                     />
                    <input type="text"
                           placeholder="Subject"
                           onInput={(event) => this.handleInputEvents('subject', event.target.value)}
                           value={this.state.subjectValue}
                     />
                    <input type="email"
                           placeholder="Email"
                           onInput={(event) => this.handleInputEvents('email', event.target.value)}
                           value={this.state.emailValue}
                     />
                    <input type="tel"
                           placeholder="Phone"
                           onInput={(event) => this.handleInputEvents('phone', event.target.value)}
                           value={this.state.phoneValue}
                     />
                    <textarea cols="30"
                              rows="10"
                              className="ConctactFormTextArea"
                              onInput={(event) => this.handleInputEvents('message', event.target.value)}
                              value={this.state.textMessageValue}
                     ></textarea>
                </div>
                </div>
                <div className="ContactFormFooter" >
                    <div className="ContactFormFooterAttach" >
                        <img src={'https://image.ibb.co/dqhdN8/1_asset_1.png'}/>
                        <span>Attach files</span>
                    </div>
                    <div className="ContactFormFooterButton" onClick={() => this.sendMessage(this.state)} >SEND</div>
                </div>
            </div>
        )
    }
}

export default ContactForm;