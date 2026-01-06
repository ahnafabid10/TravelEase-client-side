import React, { use, useState, useRef } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import useAxios from '../Hooks/useAxios';

const Register = () => {
    const { createUser, signInWithGoogle, setUser, updateUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const axiosInstance = useAxios();
    const navigate = useNavigate();
    
    const nameRef = useRef();
    const photoRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const photo = photoRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, photo, email, password);

        const length6Pattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if (!length6Pattern.test(password)) {
            setError('Password must be 6 character or long');
            return;
        } else if (!casePattern.test(password)) {
            setError('Password must have at least one uppercase and one lower case character');
            return;
        }

        setError('');
        setSuccess(false);

        axiosInstance.post('/user', { name, email, photo }).then((res) => {
            console.log(res.data);
        });

        createUser(email, password)
            .then((result) => {
                toast('Registration completed successfully.');
                setSuccess(true);
                const user = result.user;

                nameRef.current.value = '';
                photoRef.current.value = '';
                emailRef.current.value = '';
                passwordRef.current.value = '';

                updateUser({ ...user, displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                setSuccess(true);
                console.log(result.user);
                navigate('/');
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 via-base-200 to-base-100 px-4 py-12">
            <div className="w-full max-w-md">
                {/* Card Container */}
                <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-primary to-red-600 px-8 py-10 text-center">
                        <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
                        <p className="text-red-100">Join us and start your journey today</p>
                    </div>

                    {/* Form Section */}
                    <div className="px-8 py-8">
                        <div className="space-y-4">
                            {/* Name Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    ref={nameRef}
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full focus:input-primary transition-all duration-300 bg-base-200"
                                    required
                                />
                            </div>

                            {/* Photo URL Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    ref={photoRef}
                                    placeholder="Enter photo URL"
                                    className="input input-bordered w-full focus:input-primary transition-all duration-300 bg-base-200"
                                    required
                                />
                            </div>

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
                                        placeholder="Create a strong password"
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
                                <label className="label">
                                    <span className="label-text-alt text-base-content/60">
                                        Must be 6+ characters with uppercase & lowercase
                                    </span>
                                </label>
                            </div>

                            {/* Success Message */}
                            {success && (
                                <div className="alert alert-success shadow-lg">
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-sm">Registration completed successfully!</span>
                                </div>
                            )}

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
                                    <span className="text-sm">{error}</span>
                                </div>
                            )}

                            {/* Register Button */}
                            <button
                                onClick={handleRegister}
                                className="btn btn-primary w-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300 mt-2"
                            >
                                Register
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="divider my-6 text-base-content/60">OR</div>

                        {/* Google Login */}
                        <div>
                            <button
                                onClick={handleSignInWithGoogle}
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
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="text-primary font-bold hover:text-red-700 transition-colors hover:underline"
                            >
                                Login Now!
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <p className="text-center mt-6 text-sm text-base-content/60">
                    By registering, you agree to our Terms & Privacy Policy
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;