import React from 'react';
import '../App.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

var style = {
    backgroundColor: "#f0e5f6",
    textAlign: "left",
    padding: "20px",
    position: "flex",
    left: "0",
    bottom: "0",
    height: "150px",
    width: "100%",
    border:'2px solid black'
    // display: "flex"

}

function Footer() {
    return (
        <div>
            <div style={style}>
                <h5>TaytaHotels.com is an online agency for lodging reservations </h5>
                <div style={{display:'flex'}}>
               <PhoneIcon fontSize="large" color="secondary"/>
                <h5>(+216) 22 09 22 32 </h5>
                </div>
                <div style={{display:'flex'}}>
                    <EmailIcon fontSize="large" color="secondary" />
                    <h5>ahmedtritar21@gmail.com </h5>
                </div>
            </div>
        </div>
    )
}

export default Footer