import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = () => {
        console.log('loggin in');
    }
    return (
        <div className="pt-2 lg:pt-12">
            <h1 className="heading">Login</h1>

            <form onSubmit={handleSubmit(handleLogin)}>

                <div className="form-control">
                    <label htmlFor="">
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

                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;