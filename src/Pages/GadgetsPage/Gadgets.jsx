import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";
import Categorization from "./Categorization";
import BrandCategorization from "./BrandCategorization";
import PriceCategorization from "./PriceCategorization";
import SearchGadget from "./SearchGadget";
import Pagination from "./Pagination";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState()
    const serverUrl = import.meta.env.VITE_serverLink

    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedBrand, setSelectedBrand] = useState('All')
    const [priceRange, setPriceRange] = useState([0, Infinity])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)
    const lowerPriceRange = priceRange[0]
    const upperPriceRange = priceRange[1]

    console.log(search, selectedCategory, selectedBrand);
    console.log(setPostsPerPage);
    // console.log('selectedBrand is ', selectedBrand);
    // console.log('price range is ', priceRange);

    useEffect(() => {
        axios.get(`${serverUrl}/gadgets`)
            .then(response => {
                // console.log(response)
                setGadgets(response?.data)
            })
            .catch(error => {
                console.error(error.message)
            })
    }, [serverUrl])

    // console.log(gadgets);




    // categorization function
    let categorizedGadgets = gadgets
    if (selectedCategory === 'All') {
        categorizedGadgets = gadgets
    } else {
        categorizedGadgets = gadgets?.filter(gadget => gadget.category.includes(selectedCategory))
    }

    console.log(categorizedGadgets);



    // categorization with brand name

    let brandedCategorizedGadgets = []
    if (selectedBrand === 'All') {
        brandedCategorizedGadgets = categorizedGadgets
    } else {
        brandedCategorizedGadgets = categorizedGadgets?.filter(gadget => gadget.brand.includes(selectedBrand))
    }



    // making an array of the brand name of the categorized gadgets so that we can use these names to filter with brand name
    let categorizedGadgetsBrands = []
    categorizedGadgets?.map(gadgets => categorizedGadgetsBrands.push(gadgets.brand))
    // console.log(categorizedGadgetsBrands);



    // categorizing with price range
    const priceAndBrandedCategorizedGadgets = brandedCategorizedGadgets?.filter(items => {
        return items.price >= lowerPriceRange && items.price <= upperPriceRange

    })
    console.log(priceAndBrandedCategorizedGadgets);




    // pagination logics
    const totalItems = priceAndBrandedCategorizedGadgets?.length
    const pageNo = Math.ceil(totalItems / postsPerPage)
    const lastPostIndex = postsPerPage * currentPage - 1
    const firstPostIndex = lastPostIndex - postsPerPage + 1
    // console.log('first idx:', firstPostIndex, 'last idx:', lastPostIndex);
    const displayableGadgets = priceAndBrandedCategorizedGadgets?.slice(firstPostIndex, lastPostIndex + 1)
    // console.log('length', pageNo);


    return (
        <div className="container mx-auto px-1 md:px-2 min-h-screen pt-20">
            <h1 className="heading">Gadgets</h1>


            <SearchGadget
                setSearch={setSearch}
            ></SearchGadget>


            {/* menues */}
            <div className="mt-6 flex flex-col md:flex-row  items-center justify-center gap-4">
                <Categorization
                    setSelectedCategory={setSelectedCategory}
                    setSelectedBrand={setSelectedBrand}
                ></Categorization>

                <BrandCategorization
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                    categorizedGadgetsBrands={categorizedGadgetsBrands}
                ></BrandCategorization>

                <PriceCategorization
                    setPriceRange={setPriceRange}
                ></PriceCategorization>

            </div>

            <div className="mx-auto px-1 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
                {
                    displayableGadgets?.filter(gadget => {
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

            <Pagination
                pages={pageNo}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            ></Pagination>
        </div>
    );
};

export default Gadgets;