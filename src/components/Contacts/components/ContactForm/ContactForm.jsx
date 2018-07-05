require('./ContactForm.scss');
import React from 'react'
import validator from 'validator';
import axios from 'axios';

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
            textMessageValue: '',
            nameClass: '',
            subjectClass: '',
            emailClass: '',
            phoneClass: ''
        }

        this.handleInputEvents = this.handleInputEvents.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.checkAllFields = this.checkAllFields.bind(this);
    }

    handleInputEvents(type, payload) {
        switch(type) {
            case 'name':
                ((typeof payload === 'string') ?
                  this.setState({nameValue: payload}, this.checkAllFields) :
                  this.setState({error: Object.assign({}, this.state.error, {name: true})},() => this.checkAllFields()));
                break;
            case 'subject':
                ((typeof payload === 'string') ?
                  this.setState({subjectValue: payload}, this.checkAllFields) :
                  this.setState({error: Object.assign({}, this.state.error, {subjectValue: true})},() => this.checkAllFields()));
                break;
            case 'email':
                ((typeof payload === 'string') ?
                  this.setState({emailValue: payload}, this.checkAllFields) :
                  this.setState({error: Object.assign({}, this.state.error, {emailValue: true})},() => this.checkAllFields()));
                break;
            case 'phone':
                ((typeof payload === 'string') ?
                  this.setState({phoneValue: payload}, this.checkAllFields) :
                  this.setState({error: Object.assign({}, this.state.error, {phoneValue: true})},() => this.checkAllFields()));
                break;
            case 'message':
                this.setState({textMessageValue: payload});
                break;
            default:
                break;
        }
    }


    checkAllFields(send) {
        const { nameValue, subjectValue, emailValue, phoneValue } = this.state,
              { error } = this.state;
        
        ((nameValue.length === 0) ? (error.name = true) : (error.name = false));
        ((subjectValue.length === 0) ? (error.subject = true) : (error.subject = false));
        ((!validator.isEmail(emailValue)) ? (error.email = true) : (error.email = false));
        ((!validator.isMobilePhone(phoneValue, 'any')) ? (error.phone = true) : (error.phone = false));

        this.setState({error: error});
        if(send) return error;
    }

    sendMessage() {
        const { name, phone, email, subject } = this.checkAllFields('send');
        if(!name && !phone && !email && !subject) {
            const state = this.state,
                  bundle = {
                      name: state.nameValue,
                      subject: state.subjectValue,
                      email: state.emailValue,
                      phone: state.phoneValue,
                      textMessage: state.textMessageValue
                  };
            
            axios.post('https://safe-woodland-88615.herokuapp.com/form', JSON.stringify(bundle))
                 .then(e => console.log(e))
                 .catch(err => console.error(err));
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
                           className={((this.state.error.name) ? 'Error' : '')}
                     />
                    <input type="text"
                           placeholder="Subject"
                           onInput={(event) => this.handleInputEvents('subject', event.target.value)}
                           value={this.state.subjectValue}
                           className={((this.state.error.subject) ? 'Error' : '')}
                     />
                    <input type="email"
                           placeholder="Email"
                           onInput={(event) => this.handleInputEvents('email', event.target.value)}
                           value={this.state.emailValue}
                           className={((this.state.error.email) ? 'Error' : '')}
                     />
                    <input type="tel"
                           placeholder="Phone"
                           onInput={(event) => this.handleInputEvents('phone', event.target.value)}
                           value={this.state.phoneValue}
                           className={((this.state.error.phone) ? 'Error' : '')}
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
                    <div className="ContactFormFooterButton"
                         onClick={this.sendMessage} >SEND</div>
                </div>
            </div>
        )
    }
}

export default ContactForm;