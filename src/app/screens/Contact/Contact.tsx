import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import mailAnim from '../../assets/lottie/mail.json';

import { useForm, ValidationError } from '@formspree/react';

export default function Contact(): JSX.Element {
  const [serverMessage, setServerMessage] = useState('');

  const animOptions: LottieOptions = {
    animationData: mailAnim,
  };

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setServerMessage(data.message));
  }, []);
  return (
    <Styles>
      <h1>Contact</h1>
      <p>{serverMessage}</p>

      <Lottie options={animOptions} width={400} height={400} />

      <p>Send me a message</p>

      <ContactForm />
    </Styles>
  );
}

function ContactForm() {
  const [formState, handleSubmit] = useForm('mjvjzwov');

  function handleFormSubmit(e: SyntheticEvent) {
    const emailEl = document.getElementById('email') as HTMLInputElement;
    const textAreaEl = document.getElementById('message') as HTMLInputElement;

    handleSubmit(e).then(() => {
      emailEl.value = '';
      textAreaEl.value = '';
    });
  }

  return (
    <div>
      <h2>Send me a message</h2>
      <form
        onSubmit={handleFormSubmit}
        // method="POST"
        // action="https://formspree.io/f/mbjqjgkw"
      >
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoCorrect="undefined"
          />
          <ValidationError prefix="Email" field="email" errors={formState.errors} />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="your message" />
          <ValidationError prefix="Message" field="message" errors={formState.errors} />
        </div>

        <button type="submit" disabled={formState.submitting}>
          Submit
        </button>

        {formState.succeeded && (
          <div>
            <p>Thanks for writing us!</p>
            <p>We have received your message and will get back to you soon</p>
          </div>
        )}
      </form>
    </div>
  );
}
