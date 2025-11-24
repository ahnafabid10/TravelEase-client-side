import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const {createUser, signInWithGoogle, setUser, updateUser,} = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const handleShowPassword = (e)=>{
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    // const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault();
        const name= e.target.name.value
        const photo= e.target.photo.value
        const email= e.target.email.value
        const password= e.target.password.value
        console.log(name,photo,email,password)

        const length6Pattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/

        if(!length6Pattern.test(password)){
            setError('Password must be 6 character or long')
            return;
        }

        else if(!casePattern.test(password)){
            setError('Password must have at least one uppercase and one lower case character')
            return;
        }

        setError('')
        setSuccess(false)

        createUser( email, password)
        .then((result) => {
        setSuccess(true)
        const user = result.user
        e.target.reset()
        updateUser({...user, displayName : name, photoURL: photo })
        .then(()=>{
            setUser({...user,displayName : name, photoURL: photo })
        })
        .catch(error=>{
            console.log(error)
        })
        navigate('/')

        })
        .catch((error) => {
            console.log(error)
        const errorMessage = error.message;
        setError(errorMessage)
        });
    }

    const handleSignInWithGoogle =()=>{
        signInWithGoogle()
        setSuccess(true)
        navigate('/')
        .then(result=>{
            setSuccess(true)
            console.log(result.user)
        })
        .catch(error=>{
            const errorMessage = error.message;
            alert(errorMessage)
        })
    }

    return (
        <div>
            <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center px-5 pt-5 lg:text-left font-bold">Register Now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
          {/* photo URL */}
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <div className='flex items-center'>
            <input type={showPassword ? "text" : "password"} name='password' className="input" placeholder="Password" />
          <div onClick={handleShowPassword} className="btn btn-xs absolute  right-9 ">{showPassword ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</div>
          </div>
          
          <button className="btn btn-neutral mt-4">Register</button>
          
          
        </fieldset>
        {
            success && <p className='text-green-600 text-center'>Registration completed successfully.</p>
        }
        {
            error && <p className='text-red-600 text-center'>{error}</p>
        }
        </form>
        <p className='text-center text-lg font-medium'>or</p>
          {/* Google */}
<button onClick={handleSignInWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        <p className='text-center'>All ready have an account? <Link to="/login" className='text-blue-400 hover:text-blue-800'>Login </Link> Now!</p>
      </div>
    </div>
  </div>
</div>
        </div>
        
        </div>
        
    );
};

export default Register;