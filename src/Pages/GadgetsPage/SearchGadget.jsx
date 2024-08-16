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
            <form onSubmit={handleSearch} className="relative w-[300px]">
                <input
                    // {...register('search')}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="keyword"
                    className="py-2 px-4 bg-slate-100 rounded-full w-full outline-none"
                    placeholder="Search By Product Name..."
                />
                <button type="submit" className="absolute top-[0%] right-0 rounded-r-full hover:rounded-full px-2 h-full w-[40px] cursor-pointer bg-slate-300 hover:text-red-600 hover:bg-slate-900 transition-all duration-1000 flex items-center justify-center">
                    <IoIosSearch className=" font-bold text-lg" />
                </button>
            </form>
        </>
    );
};

SearchGadget.propTypes = {
    setSearch: PropTypes.func
}
export default SearchGadget;