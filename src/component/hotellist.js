import React, { useState } from 'react';
import HotelCard from './hotelcard'

const HotelList = (props) => {
    return (
        <div  className="listhotels">
            {props.hotels.map(el => <HotelCard hotel={el} />)}
        </div>
    );
};

export default HotelList;