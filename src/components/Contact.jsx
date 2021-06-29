import React from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9hjdaib', 'contact_me_template', e.target, 'user_39phNdKWBfmqk94Xof0vj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
    }


    return (
        <div className="form_container">
            <h1 className="section_header">Contact Me</h1>
            <form className="contact_form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label className="form_label">Name:</label>
                <input className="form_name_email_input" type="text" name="user_name" />
                <label className="form_label">Email:</label>
                <input className="form_name_email_input" type="email" name="user_email" />
                <label className="form_label">Message:</label>
                <textarea className="form_message_input" name="message" />
                <input className="submit_btn" type="submit" value="Send" />
            </form>
            
        </div>
    )
}

export default Contact;
