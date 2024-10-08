import { IoIosSearch } from "react-icons/io";
import PropTypes from 'prop-types'



const SearchGadget = ({setSearch}) => {

    const handleSearch = (e) => {
        e.preventDefault()
        const word = e.target.keyword.value
        // console.log(word, word !== null);
        if (word !== null) {
            setSearch(word)
        }
    }


    return (
        <>
            {/* search */}
            <form onSubmit={handleSearch} className="mt-6 z-10 relative w-[250px] md:w-[450px] mx-auto">
                <input
                    // {...register('search')}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="keyword"
                    className="py-2 px-4 bg-rose-100 text-slate-800 font-medium rounded-full w-full outline-none "
                    placeholder="Search By Product Name..."
                />
                <button type="submit" className="absolute top-[0%] right-0 rounded-r-full hover:rounded-full px-2 h-full w-[40px] md:w-[50px] cursor-pointer bg-slate-800 text-rose-400 hover:bg-[#1e293b] transition-all duration-1000 flex items-center justify-center">
                <IoIosSearch className=" font-medium text-lg" size={25} />
                </button>
            </form>
        </>
    );
};

SearchGadget.propTypes = {
    setSearch: PropTypes.func
}
export default SearchGadget;