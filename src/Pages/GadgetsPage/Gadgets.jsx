import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";
import Categorization from "./Categorization";
import BrandCategorization from "./BrandCategorization";
import PriceCategorization from "./PriceCategorization";
import SearchGadget from "./SearchGadget";
import Pagination from "./Pagination";
import Sorting from "./Sorting";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState()
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedBrand, setSelectedBrand] = useState('All')
    const [priceRange, setPriceRange] = useState([0, Infinity])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)
    const [totalItems, setTotalItems] = useState(9)
    const [priceOrder, setPriceOrder] = useState('asc')
    const [dateOrder, setDateOrder] = useState('new')
    const lowerPriceRange = priceRange[0]
    const upperPriceRange = priceRange[1]

    console.log(search, selectedCategory, selectedBrand);
    console.log(setPostsPerPage);
    // console.log('selectedBrand is ', selectedBrand);
    // console.log('price range is ', priceRange);

    const serverUrl = import.meta.env.VITE_serverLink
    // const localServer = import.meta.env.VITE_LocalServerLink
    const url = `${serverUrl}/things?page=${currentPage}`
    // console.log(url, serverUrl);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                // console.log(response)
                setGadgets(response?.data.pagedItems)
                setTotalItems(response?.data.noOfItems)
                console.log('items length: ', response?.data.noOfItems);
            })
            .catch(error => {
                console.error(error.message)
            })
    }, [url])

    // console.log(gadgets);




    // categorization function
    let categorizedGadgets = gadgets
    if (selectedCategory === 'All') {
        categorizedGadgets = gadgets
    } else {
        categorizedGadgets = gadgets?.filter(gadget => gadget.category.includes(selectedCategory))
    }

    // console.log(categorizedGadgets);



    // categorization with brand name

    let brandedCategorizedGadgets = categorizedGadgets
    if (selectedBrand === 'All') {
        brandedCategorizedGadgets = categorizedGadgets
    } else {
        brandedCategorizedGadgets = categorizedGadgets?.filter(gadget => gadget.brand.includes(selectedBrand))
    }



    // making an array of the brand name of the categorized gadgets so that we can use these names to filter with brand name
    let categorizedGadgetsBrands = []
    categorizedGadgets?.map(gadgets => categorizedGadgetsBrands.push(gadgets.brand))
    // console.log(categorizedGadgetsBrands);



    // categorizing with price
    const priceAndBrandedCategorizedGadgets = brandedCategorizedGadgets?.filter(items => {
        return items.price >= lowerPriceRange && items.price <= upperPriceRange

    })
    // console.log(priceAndBrandedCategorizedGadgets);




    // pagination logics
    const noOfPages = Math.ceil(totalItems / postsPerPage)


    // price sorting logics
    let priceSortedData = priceAndBrandedCategorizedGadgets
    if (priceOrder === 'asc') {
         priceSortedData = priceAndBrandedCategorizedGadgets?.sort((a, b) => a.price - b.price)
    } else if (priceOrder === 'dsc') {
         priceSortedData = priceAndBrandedCategorizedGadgets?.sort((a, b) => b.price - a.price)
    }



    // date sorting logics
    let dateSortedData = priceSortedData
    if (dateOrder === 'new') {
         dateSortedData = priceSortedData?.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
    } else if (dateOrder === 'old') {
         dateSortedData = priceSortedData?.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    }


    // console.log('Price Order:', priceOrder, '   date Order: ', dateOrder);

    return (
        <div className="container mx-auto px-1 md:px-2 min-h-screen pt-20">
            <h1 className="heading">Gadgets</h1>


            <SearchGadget
                setSearch={setSearch}
            ></SearchGadget>


            {/* menues */}
            <div className="mt-6 flex flex-col md:flex-row  items-center justify-center gap-4">
                <Categorization
                    gadgets={gadgets}
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


            {/* sorting */}
            <div>
                <Sorting
                    setPriceOrder={setPriceOrder}
                    setDateOrder={setDateOrder}
                ></Sorting>
            </div>

            <div className="mx-auto px-1 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
                {
                    dateSortedData?.filter(gadget => {
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
                pages={noOfPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            ></Pagination>
        </div>
    );
};

export default Gadgets;