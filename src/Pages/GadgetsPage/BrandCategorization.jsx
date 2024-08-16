import PropTypes from 'prop-types'
import Select from 'react-select'

const BrandCategorization = ({selectedBrand, setSelectedBrand, categorizedGadgetsBrands }) => {

    console.log(selectedBrand);

    // brandsArr is a array with unique elements. in case of duplicate elements it creates an array with elements that will not appear twice.
    const brandsArr = [ ...new Set(categorizedGadgetsBrands)]

    const selectedOptions = brandsArr?.map(brand => {
        return { value: brand, label: brand }
    })
    const defaultOption = { value: 'All', label: "All Brands" }
    const options = [...selectedOptions, defaultOption]
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
        ></Select>
    );
};


BrandCategorization.propTypes = {
    setSelectedBrand: PropTypes.func,
    categorizedGadgetsBrands: PropTypes.array,
    selectedBrand: PropTypes.string
}

export default BrandCategorization;