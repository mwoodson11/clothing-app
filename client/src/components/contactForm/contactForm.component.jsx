import React, { useState } from 'react';

import FormInput from '../../components/formInput/formInput.component';
import CustomButton from '../../components/customButton/customButton.component';
import styled from 'styled-components';
import './contactForm.styles.scss';

const TextArea = styled.textarea`
    background: none;
    background-color: white;
    color: black;
    font-size: 18px;
    padding: 10px 5px 10px 5px;
    display: block;
    width: 100%;
    border-radius: 0;
    border-bottom: 1px solid black;
    margin: 15px 0;
`

const ContactForm = ({userName, userEmail}) => {

    const [user, setUser] = useState({ email: '', name: '', message: ''});
    const [submitMessage, setMessage] = useState('');
    let { email, name, message } = user;
    if (userName && userEmail) {
        name = userName;
        email = userEmail;
    }
    const handleSubmit =  async event => {
        event.preventDefault();
        // const { email, password } = user;
        setMessage('Message Sent!');


        // emailSignInStart(email, password);
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setUser({ ...user, [name]: value});
    };

    return (
        <form onSubmit={handleSubmit} className="form-box" >
            {submitMessage}
            <FormInput 
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                label="Name"
                required
            /> 
            <FormInput 
                name="email" 
                type="email" 
                value={email} 
                onChange={handleChange}
                label="Email"
                required />
            <div className="formInputLabel">Message</div>
            <TextArea 
                name="message" 
                type="text" 
                value={message} 
                onChange={handleChange}
                rows="10"
                required 
            />
            <div className="buttons">
                <CustomButton type="submit"> Send Message </CustomButton>
            </div>
        </form>
    );
};

export default ContactForm;