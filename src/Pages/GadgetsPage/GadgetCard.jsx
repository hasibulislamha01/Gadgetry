import PropTypes from 'prop-types'


const GadgetCard = ({ gadget }) => {

    // console.log(gadget?.dateAdded)

    // const dateOfAddition = useDate(gadget && gadget?.dateAdded || new Date())
    // console.log(dateOfAddition);

    return (
        <div className='flex flex-col w-[300px]  rounded-lg py-6 bg-slate-100'>
            <div>
                <img className=' h-[200px] w-[200px] mx-auto object-contain rounded-lg' src={gadget?.image} alt="" />
            </div>
            <div className='mx-auto'>
                <h1 className='text-lg font-medium text-center'>{gadget?.name}</h1>
                <h1 className='font-medium text-center'>{gadget?.price} $</h1>
                <h3>{gadget?.dateAdded}</h3>
            </div>
        </div>
    );
};

GadgetCard.propTypes = {
    gadget: PropTypes.object
}

export default GadgetCard;