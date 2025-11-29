import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const {signInUser, signInWithGoogle,} = use(AuthContext)
    const [error, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation();
    const navigate = useNavigate()
    const emailRef = useRef()

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        toast('login successful')

        navigate(location.state || '/')
    }

    const handleShowPassword = (e) =>{
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    // const handleResetPassword =()=>{
    //     // e.preventDefault()
    //     const email = emailRef.current.value
    //     if(!email){
    //         toast('Please enter your email first');
    //     return;
    //     }
    //     resetPassword(email)
    //     .then(()=>{
    //         toast('Password reset Successfully')

    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // }
  //   const handleResetPassword = () =>{
  //     const email = emailRef.current.value
  //     forgetPassword(email)
  //     .then(() => {
  //       toast(" Password reset email sent!")
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  //   toast(errorCode, errorMessage)
  // });
  //   }

    const handleLogin =(e)=>{
        e.preventDefault()
        const email =  e.target.email.value
        const password = e.target.password.value

        //reset error
        setError('')

        signInUser(email, password)
        .then(result=>{
            toast('Sign In Successfully')
            navigate(location?.pathname || '/')
            console.log(result.user)
        })
        .catch(error=>{
            const errorMessage = error.message;
            setError(errorMessage)
        })

    }

    // const handle

    return (
        <div>
            <div className="hero  bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 p-5 shadow-2xl">
        <h1 className="text-5xl text-center p-3 font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <fieldset className="fieldset">
           {/* email */}
          <label className="label">Email</label>
          <input ref={emailRef} type="email" name='email' className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <div className='flex items-center'>
        <input type={showPassword ? "text":"password"} name='password' className="input" placeholder="Password" />
        <div onClick={handleShowPassword} className="btn btn-xs absolute  right-12 ">{showPassword ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</div>
          </div>
          {/* <a onClick={handleResetPassword} className="link space-y-2 hover:text-blue-700 link-hover">Forgot password?</a>
          <button className="btn btn-neutral mt-4">Login</button> */}
          <a className="link space-y-2 hover:text-blue-700 link-hover">Forgot password?</a>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        
        {
            error && <p className='text-red-500'>{error}</p>
        }
             
        </form>
        <p className='text-center text-lg font-medium'>or</p>
          {/* Google */}
<button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        <p className='text-center'>New Here? <Link to='/register' className='text-blue-400 hover:text-blue-800'>Register </Link>Now!</p>
        
      </div>
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;