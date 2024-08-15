import { useForm } from "react-hook-form";
import useAuth from "../../CustomHooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [firebaseErr, setFirebaseErr] = useState(null)

    const handleRegister = (data) => {

        setFirebaseErr(null)
        console.log(data)
        const email = data.email
        const password = data.pass

        createUser(email, password)
            .then(res => {
                if (res?.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "You have Registered!",
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
            <h1 className="heading">Register</h1>

            {
                firebaseErr && <p className="mt-10 text-red-500 text-center font-medium">{firebaseErr}</p>
            }

            <form onSubmit={handleSubmit(handleRegister)} className="mt-5 flex flex-col items-center justify-center gap-6">

                <div className="form-control space-y-3">
                    <label htmlFor="">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder="Type your email here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.email && <p className="text-red-400">email is required.</p>}
                </div>

                <div className="form-control space-y-3">
                    <label htmlFor="">
                        <span className="label-text">Provide a strong password</span>
                    </label>
                    <input
                        {...register('pass', { required: true })}
                        type="text"
                        placeholder="Type password here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.pass && <p className="text-red-400">Password is required.</p>}
                </div>

                <button type="submit" className="btn w-[220px] btn-outline">Register</button>
            </form>
        </div>
    );
};

export default Register;