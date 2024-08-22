import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { loginUser, loginWithGoogle } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const location = useLocation()

    const [firebaseErr, setFirebaseErr] = useState(null)



    const handleLogin = (data) => {

        setFirebaseErr(null)
        const email = data.email
        const password = data.pass

        loginUser(email, password)
            .then(res => {
                if (res?.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "You have logged in!",
                        icon: "success"
                    });
                    if (location?.state) {
                        navigate(location.state)
                    } else {
                        navigate('/')
                    }
                }
            }).catch(err => {
                console.error(err.message)
                setFirebaseErr(err.message)
            })
    }


    // google login
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                if (result?.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "You have logged in!",
                        icon: "success"
                    });
                    if (location?.state) {
                        navigate(location.state)
                    } else {
                        navigate('/')
                    }
                }
            }).catch(error => {
                console.error(error?.message)
                setFirebaseErr(error?.message)
            })
    }
    return (
        <div className="container mx-auto min-h-screen flex flex-col items-center justify-center pt-20 lg:pt-20">
            <h1 className="heading">Login</h1>

            {
                firebaseErr && <p className="mt-10 text-red-500 text-center font-medium">{firebaseErr}</p>
            }

            <form onSubmit={handleSubmit(handleLogin)} className="mt-10 flex flex-col items-center justify-center gap-6">

                <div className="form-control space-y-2">
                    <label htmlFor="email">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.email && <p className="text-red-400">email is required.</p>}
                </div>

                <div className="form-control space-y-2">
                    <label htmlFor="pass">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        {...register('pass', { required: true })}
                        type="text"
                        placeholder="Type password here..."
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.pass && <p className="text-red-400">Password is required.</p>}
                </div>

                <button type="submit" className="btn btn-outline w-[220px]">Login</button>
            </form>
            <div className="mt-6  flex flex-col items-center justify-center gap-4">
                <h1 className="text-center">Login with</h1>
                <FcGoogle
                    onClick={handleGoogleLogin}
                    className="cursor-pointer"
                    size={30}
                />
                <div className="flex items-center gap-4">
                    <h5>New to Gadgetry!</h5>
                    <Link to='/register' className="text-rose-500">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;