import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {

    const {loginUser} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

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
                    navigate('/')
                }
            }).catch(err => {
                console.error(err.message)
                setFirebaseErr(err.message)
            })
    }
    return (
        <div className="pt-2 lg:pt-12">
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
        </div>
    );
};

export default Login;