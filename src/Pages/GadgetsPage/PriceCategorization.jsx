import Select from 'react-select'
import PropTypes from 'prop-types'


const PriceCategorization = ({setPriceRange}) => {

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
        if(selectedRange === 'All'){
            setPriceRange([0, Infinity])
        } else if(selectedRange === '1000+'){
            setPriceRange([1000.1, Infinity])
        } else{
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
        ></Select>
    );
};

PriceCategorization.propTypes = {
    setPriceRange: PropTypes.func
}
export default PriceCategorization;