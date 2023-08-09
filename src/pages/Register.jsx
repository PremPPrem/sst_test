import React, { useState } from "react";
import "../styles/Register.scss";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";
import Modal from "../components/Modal";

function Register() {
  const [params] = useSearchParams();
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [ref, setRef] = useState(params.get('ref'));
  const [email, setEmail] = useState(params.get('email'));
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [openModal, setOpenModal] = useState(false);
 

  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validPhone = 
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


  const buttonCheck = (  !email || !firstName || !lastName || !phone) 

    

  const handleSubmit = (e) => {
    e.preventDefault();
    formCheck();
    setTimeout(() => {
      setOpenModal(false);
    }, 1000);
  };

  const formCheck = () => {
    
    if (firstName.length >= 2) {
      setFirstNameError("");
    } else {
      setFirstNameError("Please enter a FirstName of at least 2 characters");
    }

    if (lastName.length >= 2) {
      setLastNameError("");
    } else {
      setLastNameError("Please enter a LastName of at least 2 characters");
    }

    if (email.match(validEmail)) {
      setEmailError("");
      
    } else {
      setEmailError("Email  is invalid");
      
    }

    if (phone.match(validPhone)) {
      setPhoneError("");
    } else {
      setPhoneError("PhoneNumber must be 10 digits");
    }

    if (
      firstName.length >= 1 &&
      lastName.length >= 1 &&
      email.match(validEmail) &&
      phone.match(validPhone)
    ) {

      setFirstName("")
      setLastName("")
      setRef("")
      setPhone("")
      setEmail("")
      setOpenModal(true)
    }
    return <Modal />
  };

  return (
    <div className="register">
      <Header
        name="Register"
        title="Register as a member"
        image="/Header_Register.jpg"
      />
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="register_form">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form_row">
            <div className="col_4">
              <label>
                First Name <span>*</span>
              </label>
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <small>{firstNameError}</small>
            </div>
            <div className="col_4">
              <label>
                Last Name <span>*</span>
              </label>
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <small>{lastNameError}</small>
            </div>

            <div className="col_4">
              <label>
                Reference
              </label>
              <input type="text" placeholder="Reference" value={ref} onChange={(e) => setRef(e.target.value)} />
            </div>
          </div>
          <div className="form_row">
            <div className="col_6">
              <label>
                Phone Number <span>*</span>
              </label>
              <div className="form_input">
                <span>+66</span>
                <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <small>{phoneError}</small>
            </div>
            <div className="col_6">
              <label>
                Email <span>*</span>
              </label>
              <input type="text" placeholder="Email" value={email}   onChange={(e) => setEmail(e.target.value)} />
              <small>{emailError}</small>
            </div>
          </div>
          <div className="form_button">
            <button disabled={buttonCheck} type="submit" className={buttonCheck ? "btn btn_secondary" : "btn btn_success"}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
