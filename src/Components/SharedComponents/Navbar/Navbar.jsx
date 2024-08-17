import { NavLink } from "react-router-dom";
import hamburger from '/hamburger.svg'

const Navbar = () => {

    const openSideNav = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('hidden')
        sideNav.classList.add('flex')
    }

    const hideSideBar = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('flex')
        sideNav.classList.add('hidden')
    }


    const navigationMenues = [
       
        {
            title: 'Home',
            link: '/',
            activeClass: 'text-rose-300',
            inactiveClass: ' text-gray-400'
        },
        {
            title: 'Gadgets',
            link: '/gadgets',
            activeClass: 'text-rose-300',
            inactiveClass: 'text-gray-400'
        },
        {
            title: 'Login',
            link: '/login',
            activeClass: 'text-rose-300',
            inactiveClass: 'text-gray-400'
        },
        {
            title: 'Register',
            link: '/register',
            activeClass: 'text-rose-300',
            inactiveClass: 'text-gray-400'
        },
    ]


    return (
        <div className="themeHeadingFont fixed w-full z-50">

            {/* horizontal navbar */}
            <div className="bg-slate-800 px-6 sticky">
                <div className="container mx-auto flex items-center justify-end space-x-6 h-[60px]">
                    <NavLink to='/' className='text-xl text-rose-300 mr-auto'>Gadgetry</NavLink>
                    {
                        navigationMenues?.map(item =>
                            <NavLink
                                key={item?.link}
                                to={item.link}
                                className={({ isActive }) => isActive ? `${item.activeClass} md:text-lg hidden md:inline-flex` : `${item.inactiveClass} md:text-lg hidden md:inline-flex`}
                            >{item.title}</NavLink>
                        )
                    }
                    <img className="md:hidden" onClick={openSideNav} src={hamburger} alt="" />

                </div>
            </div>


            {/* vertical navbar */}
            <div className="sideNav hidden shadow-lg shadow-gray-400 w-[250px] h-screen fixed top-0 right-0  bg-slate-900 bg-opacity-85 backdrop-blur-lg  flex-col">

                {/* close icon */}
                <svg onClick={hideSideBar} className="m-2 p-2 cursor-pointer rounded-full hover:bg-slate-800" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                <div className="w-full pt-4 flex flex-col justify-start items-start">
                    {
                        navigationMenues?.map(item =>
                            <NavLink
                                key={item.link}
                                to={item.link}
                                className={({ isActive }) => isActive ? `${item.activeClass}  w-full  px-8 py-3 hover:bg-slate-800` : `${item.inactiveClass} w-full py-3 px-8 hover:bg-slate-800`}
                            >{item.title}</NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;