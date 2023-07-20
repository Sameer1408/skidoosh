import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import {
    useHistory
  } from "react-router-dom";

function ContactForm() {

    const form = useRef();
    const history = useHistory();

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const sendEmail = (e) => {
        // setThanks(true);
        e.preventDefault();
        console.log(form.current,'curr');
       emailjs.sendForm('service_mlx541x', 'template_8vtqrnf', form.current, 'o24Fc3Wsy3dQZti08')
        .then((result) => {
                history.push('/thanks')
             }, (error) => {
                 alert("please try again some error occurred");
           });
    };

    return (
        <div>
            <section>
                <div class="formDiv container" >
                    <h1 class="formHeading" style={{ marginBottom: "20px", }}>Contact us</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label for="fname">Your Name</label>
                        <input class="inp form-control" type="text" name="name" value={name} placeholder="Enter Your Name" onChange={(e) => { setName(e.target.value) }} />
                        <label for="fname">Contact Number</label>
                        <input class="inp form-control" type="number" name="number" placeholder="Enter Your Mobile Number" style={{marginBottom:"20px"}} value={number} onChange={(e) => { setNumber(e.target.value) }} />               
                        <input class="inp" name="date" type="date"></input>
                        <input className="trendBtn" type="submit" value="Book Your Free Consultation today" />
                    </form>

                </div>
            </section>
        </div>
    )
}

export default ContactForm