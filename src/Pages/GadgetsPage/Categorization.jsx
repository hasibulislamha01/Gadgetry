import Select from 'react-select'
import PropTypes from 'prop-types'

const Categorization = ({setSelectedCategory, setSelectedBrand}) => {

    const options = [
        { value: 'All', label: 'All Gadgets' },
        { value: 'Audio', label: 'Audio' },
        { value: 'Home', label: 'Home' },
        { value: 'Accessories', label: 'Accessories' },
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Mobile', label: 'Mobile' },
        { value: 'Cameras', label: 'Cameras' },
        { value: 'Wearables', label: 'Wearables' },
        { value: 'Storage', label: 'Storage' },
        { value: 'Computers', label: 'Computers' },
        { value: 'Transport', label: 'Transport' },
        { value: 'Gaming', label: 'Gaming' },
        { value: 'Health', label: 'Health' },
    ]

    const defaultOption = { value: 'All', label: 'All Gadgets' }

    const handleChange = (option) => {
        const selected = option?.value
        // console.log('changing', option,  setSelectedCategory)
        setSelectedCategory(selected)
        setSelectedBrand('All')
    }

    return (
        <Select
            options={options}
             className='w-[150px]'
            defaultValue={defaultOption}
            onChange={handleChange}
        ></Select>
    );
};


Categorization.propTypes = {
    setSelectedCategory: PropTypes.func,
    setSelectedBrand: PropTypes.func
}
export default Categorization;