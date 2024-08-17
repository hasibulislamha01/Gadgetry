import bannerImg from '../../assets/bannerImg.png'

const Banner = () => {
    return (
        <div className='banner min-h-screen'>
            <div className='h-screen container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between'>
                <div className='themeHeadingFont flex flex-col items-center lg:items-end md:text-[42px] gap-5'>
                    <h1 className=' text-[#D3D3D3]'>Buy Your Tech from</h1>
                    <h1 className='text-[#FFD700]'>Gadgetry</h1>
                </div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;