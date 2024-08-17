import PropTypes from 'prop-types'
import Select from 'react-select'

const rose = '#fda4af'
const slate = '#1e293b'
const liteSlate = '#e2e8f0'
const gray = '#334155'

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: slate,
        border: '1px solid black',
        boxShadow: '0 2px 4px rgba(0,0,0,.2)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: rose, 
        fontWeight: '600'
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? rose : gray,
        backgroundColor: state.isSelected
            ? slate
            : state.isFocused
                ? liteSlate
                : 'white',       
        fontWeight: state.isSelected ? '500' : '400'
    }),
};

const BrandCategorization = ({ selectedBrand, setSelectedBrand, categorizedGadgetsBrands }) => {

    console.log(selectedBrand);

    // brandsArr is a array with unique elements. in case of duplicate elements it creates an array with elements that will not appear twice.
    const brandsArr = [...new Set(categorizedGadgetsBrands)]

    const selectedOptions = brandsArr?.map(brand => {
        return { value: brand, label: brand }
    })
    const defaultOption = { value: 'All', label: "All Brands" }
    const options = [defaultOption , ...selectedOptions ]
    console.log(options);

    const handleChange = (brand) => {
        const selectedBrand = brand.value
        // console.log('you have selected the brand', selectedBrand)
        setSelectedBrand(selectedBrand)
    }

    return (
        options &&
        <Select
            options={options}
            className='w-[150px]'
            defaultValue={defaultOption}
            onChange={handleChange}
            styles={customStyles}
        ></Select>
    );
};


BrandCategorization.propTypes = {
    setSelectedBrand: PropTypes.func,
    categorizedGadgetsBrands: PropTypes.array,
    selectedBrand: PropTypes.string
}

export default BrandCategorization;