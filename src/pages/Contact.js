import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import App from '../App'
import index from '../index.css'
import mail from '../assets/images/social/mail.png'
import phone from '../assets/images/social/phone.png'
import location from '../assets/images/social/location.png'

const Contact = () => {
    const form = useRef();

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [popupType, setPopupType] = useState("success");

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
        ).then(
            () => {
                setPopupType("success");
                setPopupMessage("✅ Message sent successfully!");
                setShowPopup(true);

                form.current.reset();
            },
            (error) => {
                console.log(error);
                setPopupType("error");
                setPopupMessage("❌ Failed to send message!");
                setShowPopup(true);

            }
        );
    };

  return (
    <div>
        <div className='contact min-h-screen bg-gray-700 py-10 justify-items-center' id='contact'>
            <h2 className='gradient-text text-center py-10'>Get In Touch</h2>
            <div className='contact-info bg-gray-800 flex flex-col p-6 mx-24 md:mx-8 md:flex-row gap-12 items-center justify-evenly lg:p-16'>
                <div className='contact-details '>
                    <p className='text-white text-base lg:text-xl font-bold pb-7'>I'm always open to new opportunities and meaningful conversations. <br/>Let's connect!</p>
                    <div className='contact-card text-gray-300 flex py-3 gap-3 place-items-center'>
                        <img src={mail} alt="email icon" className='h-8'/>                       
                        <a href="mailto:manjotkaur311205@gmail.com" className='text-sm'>manjotkaur311205@gmail.com</a>
                    </div>
                    <div className='contact-card text-gray-300 flex py-3 gap-3 place-items-center'>
                        <img src={phone} alt="phone icon" className='h-8'/>                        
                        <a href="tel:+91 9782100977" className='text-sm'>+91 9782100977</a>
                    </div>
                    <div className='contact-card text-gray-300 flex py-3 gap-3 place-items-center'>
                        <img src={location} alt="map icon" className='h-8'/>
                        <a href="https://www.google.com/maps/dir/31.2475648,75.7039104/" className='text-sm'>Lovely Professional University, Punjab</a>
                    </div>
                </div>
                <div className='form'>
                    <form ref={form} onSubmit={sendEmail} className='contact-form border rounded-lg text-center mb-4 p-3 lg:p-8 '>
                        <input type='text' name='name' placeholder='Name' className='block w-[200px] p-2 m-4 sm:w-[150px] md:w-[280px]' required />
                        <input type='email' name='email' placeholder='Email' className='block w-[200px] p-2 m-4 sm:w-[150px] md:w-[280px]' required />
                        <textarea placeholder='Message' name='message' className='block w-[200px] p-2 m-4 sm:w-[150px] md:w-[280px]' required />
                        <button type='submit' className='button'>Send</button>
                    </form>
                </div>
                {showPopup && (
                    <div className="fixed top-5 right-5 z-50">
                    <div
                        className={`px-6 py-4 rounded-xl shadow-2xl text-white ${
                        popupType === "success"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                    >
                        {popupMessage}
                    </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Contact
