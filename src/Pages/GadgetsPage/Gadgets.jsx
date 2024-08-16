import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";
import { IoIosSearch } from "react-icons/io";
import Categorization from "./Categorization";
import BrandCategorization from "./BrandCategorization";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState()
    const serverUrl = import.meta.env.VITE_serverLink

    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedBrand, setSelectedBrand] = useState('All')
    console.log(search, selectedCategory, selectedBrand);
    console.log('selectedBrand is ', selectedBrand);

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
        if (word !== null) {
            setSearch(word)
        }
    }


    // categorization function
    let categorizedGadgets = gadgets
    if (selectedCategory === 'All') {
        categorizedGadgets = gadgets
    } else {
        categorizedGadgets = gadgets?.filter(gadget => gadget.category.includes(selectedCategory))
    }

    console.log(categorizedGadgets);


    // categorization with brand name
    let brandedGadgets = []
    if (selectedBrand === 'All') {
        brandedGadgets = categorizedGadgets
    } else {
        brandedGadgets = categorizedGadgets?.filter(gadget => gadget.brand.includes(selectedBrand))
    }

    // making an array of the brand name of the categorized gadgets
    let categorizedGadgetsBrands = []
    categorizedGadgets?.map(gadgets => categorizedGadgetsBrands.push(gadgets.brand))
    // console.log(categorizedGadgetsBrands);


    return (
        <div className="px-1 md:px-2 min-h-screen lg:pt-6 pt-4">
            <h1 className="heading">Gadgets</h1>


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

            {/* menues */}
            <div className="flex flex-col md:flex-row  items-center">
                <Categorization
                    setSelectedCategory={setSelectedCategory}
                    setSelectedBrand={setSelectedBrand}
                ></Categorization>

                <BrandCategorization
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                    categorizedGadgetsBrands={categorizedGadgetsBrands}
                ></BrandCategorization>


            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    brandedGadgets?.filter(gadget => {
                        return (
                            search.toLowerCase() === '' ? gadget : gadget.name.toLowerCase().includes(search.toLocaleLowerCase())
                        )
                    })
                        ?.map(item => (
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