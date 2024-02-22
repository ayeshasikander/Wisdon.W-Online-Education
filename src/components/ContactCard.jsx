import React from "react";
import styled from "styled-components";
const ContactCard = () => {
  return (
    <Conatainer>
      <form className="form">
        <div className="descr">Get in Touch</div>
        <div className="input">
          <input required="" autoComplete="off" type="text" />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input">
          <input required="" autoComplete="off" name="email" type="text" />
          <label htmlFor="email">E-mail</label>
        </div>

        <div className="input">
          <textarea required="" cols="30" rows="1" id="message"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button>Send message →</button>
      </form>
    </Conatainer>
  );
};
const Conatainer = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 3px;
  border: 1px solid #396afc;
  background: linear-gradient(to right, #005c97, #363795);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  form{
    .descr {
    font-size: 20px;
    font-weight: 500;
    color: #e8e8e8;
    margin-bottom: 2rem;
    margin-top: 2rem;
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .input,
  textarea {
    margin: 1em 0 1em 0;
    width: 300px;
    position: relative;
  }

  .input input,
  textarea {
    font-size: 100%;
    padding: 0.7em;
    outline: none;
    color: #e8e8e8;
    border: none;
    border-bottom: 2px solid #e8e8e8;
    background: transparent;
    border-radius: none;
    width: 100%;
    resize: none;
  }

  .input label {
    font-size: 100%;
    position: absolute;
    left: 0;
    color: #e8e8e8;
    padding: 0.7em;
    margin-left: 0.1em;
    pointer-events: none;
    transition: all 0.5s ease;
    text-transform: uppercase;
  }

  .input :is(input:focus, input:valid) ~ label {
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    padding: 0.4em;
    background: transparent;
  }

  .input textarea:focus ~ label,
  .input textarea:valid ~ label {
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    padding: 0.4em;
    background: transparent;
  }

  .inputGroup :is(input:focus, input:valid) {
    border-color: rgb(37, 37, 211);
  }

  button {
    color: #e8e8e8;
    font-size: 15px;
    align-self: flex-start;
    padding: 0.6em;
    border: none;
    cursor: pointer;
    margin-bottom: 50px;
    background: transparent;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
  }

  button:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  button:hover:before {
    opacity: 0.2;
  }

  button:hover {
    transform: translateY(-3px);
    background-color: #fec513;
    color: blue;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
}
`;

export default ContactCard;
