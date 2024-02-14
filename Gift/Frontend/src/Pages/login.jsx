import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbars from "../Components/Navbar";
import { signIn, signUp } from "../Services/auth";


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Create a password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }
    if (email && password) {
      const data = {
        email: email,
        password: password
      };
      signIn(data)
        .then((response) => {
          // const role=response;
          // console.log("role is "+ role)
          const token = response.data.token;
          const authToken = token;
          console.log(authToken);
          localStorage.setItem("token",authToken);
        // Navigate to sign-in page
        if(email=="admin123@gmail.com")
        {
          navigate('/admin_pro')
        }
        else
        {

          navigate('/toys');
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error("Sign-up error:", error);
      });
        
      console.log(data)

      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <Navbars />
      <div className="flex items-center justify-center " >
        <div className="flex flex-col justify-center">
          {successMsg ? (
            <div className="w-full">
              <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                {successMsg}
              </p>
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
                tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </div>
          ) : (
            <form className="w-full flex items-center justify-center bg-clr-white" style={{backgroundColor:'white',marginTop:200}}>
              <div className="px-6 py-4 flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                  Create your account
                </h1>
                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      User Email
                    </p>
                    <input
                      onChange={handleEmail}
                      value={email}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="email"
                      placeholder="john@workemail.com"
                    />
                    {errEmail && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errEmail}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Password
                    </p>
                    <input
                      onChange={handlePassword}
                      value={password}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="password"
                      placeholder="Create password"
                    />
                    {errPassword && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errPassword}
                      </p>
                    )}
                  </div>
                  {/* Address */}
                  <button
                    onClick={handleSignUp}
                    className={`w-full bg-primeColor text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300 ${
                      !email || !password ? "bg-gray-500 cursor-not-allowed" : "hover:bg-black"
                    }`}
                    disabled={!email || !password}
                  >
                    Sign In
                  </button>
                  <p className="text-sm text-center font-titleFont font-medium">
                    Don't have an Account?{" "}
                    <Link to="/register">
                      <span className="hover:text-blue-600 duration-300">
                        Sign Up
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
