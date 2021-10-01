import React, { useState, useEffect } from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import mailAnim from '../../assets/lottie/mail.json';

import { useForm, ValidationError } from '@formspree/react';

export default function Contact(): JSX.Element {
  const [message, setMessage] = useState('');

  const animOptions: LottieOptions = {
    animationData: mailAnim,
  };

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);
  return (
    <Styles>
      <h1>Contact</h1>
      <p>{message}</p>

      <Lottie options={animOptions} width={400} height={400} />

      <p>Send me a message</p>

      <ContactForm />
    </Styles>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm('mjvjzwov');

  return (
    <div>
      <h2>Send me a message 🤙🏽</h2>
      <form
        onSubmit={handleSubmit}
        // method="POST"
        // action="https://formspree.io/f/mbjqjgkw"
      >
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="⊚ your.email@here.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="⊚ your message here" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>

        {state.succeeded && (
          <div>
            <p>Thanks for writing</p>
            <p>We have received your message and will get back to you soon</p>
          </div>
        )}
      </form>
    </div>
  );
}
