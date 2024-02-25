import React, { useState } from "react";
import { Link } from "react-router-dom"


export default function SignUp (){
    const [isChecked, setIsChecked] = useState(false);
    const [passwordError, setPasswordError]=useState('');
    const [showAlert, setShowAlert] = useState(false);

    // const handleinputChange =(e)=>{
    //     const {name,value}=e.target;
    //     setData({
    //         ...data,[name]:value
    //     });
    // };
    const handleSubmit =(e)=>{
        e.preventDefault();
        // alert('ale')
        if(e.target['password'].value !== e.target['confirmPassword'].value){
            setPasswordError('Password do not match');
        }else{
            localStorage.setItem('username', e.target['username'].value);
            localStorage.setItem('email', e.target['email'].value);
            localStorage.setItem('password', e.target['password'].value);
        }
        setShowAlert(true);
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
      const heandleRegister=()=>{
        alert("your register")
      }

    return (
        <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="username"/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" name="email" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name="password"  required />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="passzzword" id="form3Example4cd" name="confirmPassword" className="form-control" required/>
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                      {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" id="form2Example3c" checked={isChecked} onChange={handleCheckboxChange}/>
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!" title="Please Register now">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-center">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={!isChecked}>Register</button>
                  </div>
                  <div className="text-center">
                            <p>Already a member? <Link to="/">Login</Link></p>
                        </div>
                </form>
                {showAlert && (
        <div className="alert">
          Registration successful! {/* You can customize this message */}
        </div>
      )}

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div >
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}