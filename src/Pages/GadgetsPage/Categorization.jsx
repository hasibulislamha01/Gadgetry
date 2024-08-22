import Select from 'react-select'
import PropTypes from 'prop-types'

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

const Categorization = ({gadgets=[], setSelectedCategory, setSelectedBrand}) => {


    const categoriesOptionsArr = gadgets?.map(gadget => (
        {
            value: gadget?.category, 
            label: gadget?.category
        }
    ))

    const options = [
        { value: 'All', label: 'All Gadgets' },
        ...categoriesOptionsArr
    ]

    // console.log(options);

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
            styles={customStyles}
        ></Select>
    );
};


Categorization.propTypes = {
    gadgets: PropTypes.array,
    setSelectedCategory: PropTypes.func.isRequired,
    setSelectedBrand: PropTypes.func.isRequired
}
export default Categorization;