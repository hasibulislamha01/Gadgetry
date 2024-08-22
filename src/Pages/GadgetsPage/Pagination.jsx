import PropTypes from 'prop-types'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';


const btnStyles = 'px-4 py-1 cursor-pointer rounded-lg font-semibold border  transition-all duration-500'
const disabledStyle = ' btn  btn-disabled btn-sm flex items-center justify-center'

const Pagination = ({ pages, setCurrentPage, currentPage }) => {


    console.log('current page is : ', currentPage, 'out of: ', pages);

    let pagesArr = [1, 2, 3, 4, 5]
    if (pages) {
        pagesArr = new Array(pages)?.fill()?.map((_, index) => index + 1)
    }

    console.log(pagesArr);


    return (
        <div className='my-12  bg-slate-200 px-4 md:px-0 rounded-xl md:rounded-full flex items-center flex-wrap  justify-center gap-6'>

            <button
                id='prev-btn'
                onClick={() => setCurrentPage(currentPage - 1)}
                className={currentPage === 1 ? disabledStyle : ` btn btn-sm flex items-center justify-center text-slate-800 bg-slate-100 border-transparent hover:text-rose-400 hover:bg-slate-800 ${btnStyles}`}>
                <GoArrowLeft   size={20} />
            </button>

            <div className="flex items-center justify-center gap-6 py-3 flex-wrap">
                {
                    pagesArr?.map((page, index) => {
                        return (

                            <button
                                onClick={() => setCurrentPage(page)}
                                key={index}
                                className={currentPage === page ? `text-rose-400 bg-slate-800  border-slate-800 hover:text-rose-300 hover:rounded-full ${btnStyles}`
                                    :
                                    `text-slate-800 bg-white hover:text-slate-800 hover:bg-rose-50  hover:border-slate-800 ${btnStyles}`}
                            >
                                {page}
                            </button>


                        )
                    })
                }
            </div>
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className={currentPage === pages ? disabledStyle : `btn btn-sm flex items-center justify-center text-slate-800 bg-slate-100 border-transparent hover:text-rose-400 hover:bg-slate-800 ${btnStyles}`}>
                <GoArrowRight className='font-bold'  size={20}/>
            </button>
        </div>
    );
};

Pagination.propTypes = {
    pages: PropTypes.number,
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number
}

export default Pagination;