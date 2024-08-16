import PropTypes from 'prop-types'
import { HiShoppingCart } from "react-icons/hi";


const GadgetCard = ({ gadget }) => {

    console.log(gadget)

    return (
        <div className='flex flex-col w-[300px]  rounded-lg py-6 bg-slate-100'>
            <div>
                <img className=' h-[200px] w-[200px] mx-auto object-contain rounded-lg' src={gadget?.image} alt="" />
            </div>
            <div className='mx-auto'>
                <h1 className='text-lg font-medium text-center'>{gadget?.name}</h1>
                <h1 className='font-medium text-center'>{gadget?.price} $</h1>
                <div className='mt-2 flex items-center justify-center gap-6'>
                    <button className='btn btn-sm w-[70px] bg-green-800 border-2 hover:border-green-800 text-white hover:text-green-800 hover:bg-white'>Buy</button>
                    <HiShoppingCart className='text-green-700 hover:text text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

GadgetCard.propTypes = {
    gadget: PropTypes.object
}

export default GadgetCard;