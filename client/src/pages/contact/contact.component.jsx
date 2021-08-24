import React from 'react';
// import { useSelector } from 'react-redux';
import ContentBox from '../../components/contentBox/contentBox.component';
import ContactForm from '../../components/contactForm/contactForm.component';

import './contact.styles.scss';
import Picture from '../../assets/Contact.jpg';

const Contact = ({displayName, email}) => {
    const userName = displayName;
    const userEmail = email;
    const title = "Contact Us";

    const props = {
        title: title,
        description: ContactForm({userName, userEmail}),
        image: Picture
    }

    return (
        <div className="contact-container">
            <ContentBox {...props} />
        </div>
    );
};

export default Contact;