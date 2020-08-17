import React from 'react';
import '../App.css';
import Header from './header';
import Footer from './footer';
import Hotelinfo from './hotelinfo'





const Hotels = () => {
    return(
        <div className="backgroundb">
         <div>
             <Header/>
         </div>
         <div style={{ width: '99vw', display: 'grid', backgroundColor: '#f0e5f6' }}>
             {/* hotelsplaceholder */}
             <Hotelinfo/>
         </div>
         <div>
             <Footer/>
         </div>
        </div>
    );
}
export default Hotels;