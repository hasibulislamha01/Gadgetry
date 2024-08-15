import { NavLink } from "react-router-dom";



const Navbar = () => {


    const navItems =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? 'mr-auto  text-white text-2xl' : 'mr-auto text-2xl'}>Name</NavLink>

            <NavLink to='/' className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400 '}>Home</NavLink>
            <NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}>Blogs</NavLink>


        </>
    return (
        <div className="">

            {/* horizontal navbar */}
            <div className="bg-slate-800">
                <div className="container mx-auto flex items-center justify-end space-x-6 h-[60px]">
                    {navItems}
                </div>
            </div>
        </div>
    );
};

export default Navbar;