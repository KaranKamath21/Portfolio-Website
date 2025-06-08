import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';

interface ContactProps {
  mode: string;
}

function Contact({ mode }: ContactProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const inputStyle = {
    color: mode === 'dark' ? '#ffffff' : '#000000',
    backgroundColor: mode === 'dark' ? '#0E1117' : '#ffffff',
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
      const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          setSubmitStatus('success');
          setName('');
          setEmail('');
          setMessage('');
          setIsSubmitting(false);
        }, (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
        });
    }
  };

  return (
    <Box id="contact" className={`contact-form ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <h1>Contact Me</h1>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="outlined-required-name"
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? "Please enter your name" : ""}
              InputProps={{ style: inputStyle }}
              InputLabelProps={{ style: { color: mode === 'dark' ? '#ffffff' : '#000000' } }}
              inputProps={{ style: { color: mode === 'dark' ? '#ffffff' : '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="outlined-required-email"
              label="Email / Phone"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Please enter your email or phone number" : ""}
              InputProps={{ style: inputStyle }}
              InputLabelProps={{ style: { color: mode === 'dark' ? '#ffffff' : '#000000' } }}
              inputProps={{ style: { color: mode === 'dark' ? '#ffffff' : '#000000' } }}
            />
          </Grid>
        </Grid>
        <TextField
          required
          id="outlined-multiline-static"
          label="Message"
          placeholder="Send me any inquiries or questions"
          multiline
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={messageError}
          helperText={messageError ? "Please enter the message" : ""}
          InputProps={{ style: inputStyle }}
          InputLabelProps={{ style: { color: mode === 'dark' ? '#ffffff' : '#000000' } }}
          inputProps={{ style: { color: mode === 'dark' ? '#ffffff' : '#000000' } }}
        />
        {submitStatus === 'success' && (
          <Typography color="success.main" sx={{ mt: 1 }}>
            Message sent successfully!
          </Typography>
        )}
        {submitStatus === 'error' && (
          <Typography color="error.main" sx={{ mt: 1 }}>
            Failed to send message. Please try again.
          </Typography>
        )}
        <Button variant="contained" endIcon={<SendIcon />} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
