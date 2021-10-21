import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css'

const styles ={
  main:{
      height:650,
      width:"auto",
      background:'DarkSlateBlue'
  }
}

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    
    const { target } = e;
    console.log(e)
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='formContainer' style={styles.main}>
      <form className="form">
        <h3>Contact</h3>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <label htmlFor="message">Message</label>
        <br/>
        <textarea
        id='message'
        name="message"
        cols='40'
        rows='10'>
            
        </textarea>
        <br/>
        
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
