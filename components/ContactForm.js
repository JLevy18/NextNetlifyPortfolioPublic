import HCaptcha from "@hcaptcha/react-hcaptcha";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

    const form = useRef();
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);
    const [formResponseState, setResponseState] = useState('default');
    const [formResponseSuccess, setResponseSuccess] = useState(false);
    const [formResponseWarning, setResponseWarning] = useState(false);
    const [formResponseError, setResponseError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!token) {
            setResponseState('warning');
            setResponseWarning(true);
            return;
        }

        emailjs.sendForm('*****','*****',form.current,'*****')
        .then((result) => {
            console.log(result.text);
            setResponseState('success');
            setResponseSuccess(true);

            captchaRef.current.resetCaptcha();
            form.current.reset();
            setToken(null);

        }, (error) => {
            console.log(error.text);
            setResponseState('error');
            setResponseError(true);

            captchaRef.current.resetCaptcha();
            form.current.reset();
            setToken(null);
            
        });
        
    };

    useEffect(() => {

        if (formResponseState == 'success') {

            setTimeout(() => {
                setResponseSuccess(false);
                setResponseState('default');
            }, 4000)

        }else if (formResponseState == 'warning') {
            setTimeout(() => {
                setResponseWarning(false);
                setResponseState('default');
            }, 4000)
        }else if (formResponseState == 'error') {
            setTimeout(() => {
                setResponseError(false);
                setResponseState('default');
            }, 4000)
        }

    }, [formResponseState] );

    return (
        <>

            <div id="response" className={formResponseState}>
                <div className={formResponseSuccess ? 'success active' : 'success'}>
                    <p>Your message was sent successfully, we will be in touch soon!</p>
                </div>
                <div className={formResponseWarning ? 'warning active' : 'warning'}>
                    <p><b>Warning: </b> Human verification is required to send a message!</p>
                </div>
                <div className={formResponseError ? 'error active' : 'error'}>
                    <p><b>Error: </b> Something went wrong and your message wasn't sent. Please try again in a few minutes.</p>
                </div>
            </div>


            <form
                ref={form}
                id="messageForm"
                onSubmit={handleSubmit}
            >

                <h1 className="py-8 text-center text-3xl text-zinc-100 underline underline-offset-8 font-mono drop-shadow-[0px_0px_2px_rgba(255,255,255,0.6)]">Send A Message</h1>

                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="user_name"
                        className="px-3 py-3 placeholder-gray-200 text-zinc-200 relative bg-zinc-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:none w-full"
                        required
                    />
                </div>

                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        className="px-3 py-3 placeholder-gray-200 text-zinc-200 relative bg-zinc-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:none w-full"
                        required
                    />
                </div>

                <div className="mb-2 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-200 text-zinc-200 relative bg-zinc-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:none w-full h-52 resize-none"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <HCaptcha
                        sitekey="2f652643-7cbf-4034-af7e-baab6eb083b3"
                        onVerify={setToken}
                        ref={captchaRef}
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                        className="bg-blue-500 text-zinc-100 active:bg-[#1e79e1] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </>
    );
};

export default ContactForm;
