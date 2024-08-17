import PropTypes from 'prop-types'


const btnStyles = 'px-4 py-1 cursor-pointer rounded-lg font-semibold border  transition-all duration-500'
// const disabledStyle = 'px-4 py-1  cursor-default btn btn-disabled'

const Pagination = ({ pages, setCurrentPage, currentPage }) => {

    // const [disabledBtn, setDisabledBtn] = useState(false)
    let pagesArr = [1, 2, 3, 4, 5]
    if (pages) {
        pagesArr = new Array(pages)?.fill()?.map((_, index) => index + 1)
    }

    console.log(pagesArr);

    // const changePageByArrow = (inc) => {
    //     setCurrentPage(currentPage + inc)
    //     if(currentPage === 1){
    //         setDisabledBtn(true)
    //     } else if( currentPage === pages){
    //         setDisabledBtn(true)
    //     }
    // }

    return (
        <div className='my-12  bg-slate-200 rounded-full flex items-center justify-center gap-6'>

            {/* <button
                disabled={disabledBtn}
                onClick={() => changePageByArrow(-1)}
                className={ disabledBtn ? disabledStyle : `flex items-center justify-center text-slate-800 bg-slate-100 border-slate-800 hover:text-rose-500 hover:bg-rose-50  hover:border-rose-500 ${btnStyles}`}>
                <GoArrowLeft />
            </button> */}

            <div className="flex items-center justify-center gap-6 py-3">
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
            {/* <button
                // disabled={currentPage === pages ? true : false}
                // onClick={() => setCurrentPage(currentPage + 1)}
                className={`flex items-center justify-center text-slate-800 bg-slate-100 border-slate-800 hover:text-rose-500 hover:bg-rose-50  hover:border-rose-500 ${btnStyles}`}>
                <GoArrowRight />
            </button> */}
        </div>
    );
};

Pagination.propTypes = {
    pages: PropTypes.number,
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number
}

export default Pagination;