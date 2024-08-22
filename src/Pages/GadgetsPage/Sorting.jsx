import Select from 'react-select'
import PropTypes from 'prop-types'
import { useState } from 'react'



const rose = '#fda4af'
const slate = '#1e293b'
const liteSlate = '#e2e8f0'
const gray = '#334155'

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: slate,
        //   padding: '5px 10px',
        border: '1px solid black',
        boxShadow: '0 2px 4px rgba(0,0,0,.2)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: rose, // Change text color to red
        fontWeight: '600'
    }),
    option: (provided, state) => ({
        ...provided,
        //   borderBottom: '1px solid #94a3b8',
        color: state.isSelected ? rose : gray,
        backgroundColor: state.isSelected
            ? slate
            : state.isFocused
                ? liteSlate // Light gray on hover when not selected
                : 'white', // Default background color        
        fontWeight: state.isSelected ? '500' : '400'
    }),
};

const Sorting = ({ setPriceOrder, setDateOrder }) => {

    const [sortCategory, setSortCategory] = useState('')

    const priceOptions = [
        { value: 'asc', label: 'Low to high' },
        { value: 'dsc', label: 'High to low' },
    ]

    const dateOptions = [
        { value: 'new', label: 'Newest first' },
        { value: 'old', label: 'Oldest first' },
    ]

    const sortOptions = [
        { value: 'price', label: 'Price' },
        { value: 'date', label: 'Date' },
    ]


    const handleSortToggle = (option) => {
        const selected = option?.value
        setSortCategory(selected)
    }

    const handlePriceSorting = (option) => {
        setDateOrder('')
        const selected = option?.value
        console.log(selected);
        setPriceOrder(selected)
    }

    const handleDateSorting = (option) => {
        setPriceOrder('')
        const selected = option?.value
        console.log(selected);
        setDateOrder(selected)
    }


    return (
        <div className='flex items-center justify-center mt-4 gap-4'>

            <Select
                placeholder='Sort by'
                options={sortOptions}
                styles={customStyles}
                onChange={handleSortToggle}
            ></Select>

            {
                sortCategory === 'price' &&
                <Select
                    options={priceOptions}
                    placeholder='Sort by Price'
                    styles={customStyles}
                    onChange={handlePriceSorting}
                ></Select>
            }

            {
                sortCategory === 'date' &&
                <Select
                    options={dateOptions}
                    placeholder='Sort by date added'
                    styles={customStyles}
                    onChange={handleDateSorting}
                ></Select>
            }
        </div>
    );
};


Sorting.propTypes = {
    setPriceOrder: PropTypes.func,
    setDateOrder: PropTypes.func
}
export default Sorting;