import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";
import { IoIosSearch } from "react-icons/io";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState()
    const serverUrl = import.meta.env.VITE_serverLink

    const [search, setSearch] = useState('')
    console.log(search);

    useEffect(() => {
        axios.get(`${serverUrl}/gadgets`)
            .then(response => {
                // console.log(response)
                setGadgets(response.data)
            })
            .catch(error => {
                console.error(error.message)
            })
    }, [serverUrl])

    // console.log(gadgets);

    const handleSearch = (e) => {
        e.preventDefault()
        const word = e.target.keyword.value
        // console.log(word, word !== null);
        if(word !== null){
            setSearch(word)
        }
    }
   

    return (
        <div className="min-h-screen lg:pt-6 pt-4">
            <h1 className="heading">Gadgets</h1>

            {/* search */}
            <form onSubmit={handleSearch} className="relative w-[300px]">
                <input
                    // {...register('search')}
                    onChange={(e)=> setSearch(e.target.value)}
                    type="text"
                    name="keyword"
                    className="py-2 px-4 bg-slate-100 rounded-full w-full outline-none"
                    placeholder="Search By Product Name..."
                />
                <button type="submit" className="absolute top-[0%] right-0 rounded-r-full hover:rounded-full px-2 h-full w-[40px] cursor-pointer bg-slate-300 hover:text-red-600 hover:bg-slate-900 hover:transition-all hover:duration-1000 flex items-center justify-center">
                    <IoIosSearch className=" font-bold text-lg" />
                </button>
            </form>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    gadgets?.filter(gadget => {
                        return (
                            search.toLowerCase() === '' ? gadget : gadget.name.toLowerCase().includes(search.toLocaleLowerCase())
                        )
                    }).map(item => (
                        <GadgetCard
                            key={item._id}
                            gadget={item}
                        ></GadgetCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Gadgets;