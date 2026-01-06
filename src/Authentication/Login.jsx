import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleGoogleSignIn = () => {
    signInWithGoogle();
    toast('login successful');
    navigate(location.state || '/');
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setError('');
    
    signInUser(email, password)
      .then((result) => {
        toast('Sign In Successfully');
        navigate(location?.pathname || '/');
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 via-base-200 to-base-100 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary to-red-600 px-8 py-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-red-100">Sign in to continue your journey</p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <div className="space-y-5">
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:input-primary transition-all duration-300 bg-base-200"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    ref={passwordRef}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pr-12 focus:input-primary transition-all duration-300 bg-base-200"
                    required
                  />
                  <button
                    onClick={handleShowPassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-primary transition-colors"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  to="/auth/forget-password"
                  className="text-sm text-primary hover:text-red-700 font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Error Message */}
              {error && (
                <div className="alert alert-error shadow-lg animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Something went wrong!</span>
                </div>
              )}

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="btn btn-primary w-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                Login
              </button>
            </div>

            {/* Divider */}
            <div className="divider my-6 text-base-content/60">OR</div>

            {/* Demo & Google Login */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  signInUser('demo@account.com', '123zxcZXC123!@#').then(() => {
                    toast('Logged in as Demo User');
                  });
                }}
                className="btn btn-outline w-full hover:bg-base-200 hover:scale-105 transition-all duration-300 gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Try Demo Account
              </button>

              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full hover:bg-base-200 hover:scale-105 transition-all duration-300 gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Login with Google
              </button>
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-base-200 px-8 py-5 text-center border-t border-base-300">
            <p className="text-base-content/70">
              New Here?{' '}
              <Link
                to="/register"
                className="text-primary font-bold hover:text-red-700 transition-colors hover:underline"
              >
                Register Now!
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center mt-6 text-sm text-base-content/60">
          Protected by reCAPTCHA and subject to Privacy Policy
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;