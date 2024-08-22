import { Navigate } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import PropTypes from 'prop-types'

const ValidateLogin = ({ children }) => {

    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="mt-12 md:mt-20 flex justify-center items-center">
                <div className="w-40 mx-auto loading loading-spinner text-warning"></div>
            </div>
        )
    } else if (user) {
        return children;
    }

    console.log(user);
    return (
        <Navigate to='/login' state={location.pathname}></Navigate>
    );
};

ValidateLogin.propTypes = {
    children: PropTypes.node
}

export default ValidateLogin;