import Flickity from 'react-flickity-component'

const options = {
    initialIndexl: 0,
    cellSelector: '.carousel-cell',
    wrapAround: true,
    autoPlay: true,
}

const SectionCarousel = ({ children }) => {
    return (
        <div className='outer-wrapper-carousel'>
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={options}
            >
                {/* <UiCards data={HotelLodges} /> */}
                {children}
            </Flickity>
        </div>
    );
}

export default SectionCarousel;