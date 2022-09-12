import Flickity from 'react-flickity-component'

import { HotelLodges } from '../config/lodgeHotelList';
import UiCards from '../ui/UiCards';

const SectionCarousel = ({ children }) => {
    return (
        <div className='outer-wrapper-carousel'>
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={{initialIndex: 0}}
                autoPlay={1500}
                pauseAutoPlayOnHover="true"
            >
                {/* <UiCards data={HotelLodges} /> */}
                {children}
            </Flickity>
        </div>
    );
}

export default SectionCarousel;