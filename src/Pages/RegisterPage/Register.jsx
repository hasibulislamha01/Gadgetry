import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = () => {
        console.log('register in');
    }

    return (
        <div className="pt-2 lg:pt-12">
            <h1 className="heading">Register</h1>

            <form onSubmit={handleSubmit(handleRegister)} className="mt-10 flex flex-col items-center justify-center gap-6">

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