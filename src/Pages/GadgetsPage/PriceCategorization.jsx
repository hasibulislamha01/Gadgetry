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

const PriceCategorization = ({ setPriceRange }) => {

    const options = [
        { value: 'All', label: 'All Prices' },
        { value: '0-100', label: '0-100 $' },
        { value: '100-300', label: '100-300 $' },
        { value: '300-500', label: '300-500 $' },
        { value: '500-1000', label: '500-1000 $' },
        { value: '1000+', label: '1000+ $' },

    ]
    const defaultOption = { value: 'All', label: 'All Prices' }

    const handleChange = (selected) => {
        const selectedRange = selected.value
        if (selectedRange === 'All') {
            setPriceRange([0, Infinity])
        } else if (selectedRange === '1000+') {
            setPriceRange([1000.1, Infinity])
        } else {
            const [upper, lower] = selectedRange.split('-')
            const upperRange = Number(upper)
            const lowerRange = Number(lower)
            // console.log(upperRange, lowerRange);
            setPriceRange([upperRange, lowerRange])
        }
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

PriceCategorization.propTypes = {
    setPriceRange: PropTypes.func
}
export default PriceCategorization;