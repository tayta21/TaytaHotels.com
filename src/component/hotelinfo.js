import React, { useState } from 'react';
import '../App.css';
import Filter from './filter';
import HotelList from './hotellist'
import Rating from './rating';




const Hotelinfo = () => {
    const [hotelsr, setHotelsr] = useState([
        {
            id: 1,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/75881056.webp?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=',
            name: 'La Badira - Adult Only ',
            location: 'hammamet',
            rate: 5,
            description: 'Offering 3 outdoor pools and a private beach access, La Badira - Adult Only is located in Hammamet. Free WiFi access is available.',
        },
        {
            id: 2,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/7279065.jpg?k=c57ca757cac0891f30b7117740da9367cd5e3c6729471acf0932c81c54e7dfe8&o=',
            name: 'Chich Khan Hotel ',
            location: 'hammamet',
            rate: 4,
            description: 'All-inclusive Chich Khan is located near Hammamet, 200 m from a private beach. It offers wellness and beauty treatments, an indoor and outdoor swimming pool and a tennis court.',
        },
        {
            id: 3,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/114157516.jpg?k=7d8b25adfd6fa3158faef3c60c3e3d73d5f3b9cdcaf46daab1c9ed5ea5bf1284&o=',
            name: 'La Playa Hotel Club',
            location: 'hammamet',
            rate: 3,
            description: "Situé à Hammamet, l'établissement La Playa Hotel Club propose une piscine extérieure et une piscine intérieure. Vous profiterez d'une connexion Wi-Fi gratuite dans les parties communes.",
        },

        {
            id: 4,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/120700636.webp?k=880fea7f22d12c1b727829a33bcc58b2e9e1e0a9bd08cb6bb211c8b7d67ab84f&o=',
            name: 'Mövenpick Resort & Marine Spa Sousse',
            location: 'sousse',
            rate: 5,
            description: 'Mövenpick Resort & Marine Spa’s restaurants and snack bars serve international cuisine, such as Mediterranean, Japanese and grills. The several bars and cafes, such as the pool-side bar and Aga Café, serve a range of beverages. A buffet breakfast is served daily. ',
        },
        {
            id: 5,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/181700108.webp?k=23a52229be76a4cd96b32fa699f878132ebffde9fe800403628fcf3918289a96&o=',
            name: 'Marhaba Royal Salem',
            location: 'sousse',
            rate: 4,
            description: ' With its own private beach area and surrounded by 7 hectares of garden and forest, this hotel features 2 pools, a spa and several sports facilities. It offers air-conditioned rooms, Wi-Fi access and a beach-front BBQ',
        },
        {
            id: 6,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/154995371.webp?k=2c2576640d5fa5080645aca108d77a19a879f4ad078a897ffc45e711f492e50d&o=',
            name: 'Hotel Sindbad Sousse',
            location: 'sousse',
            rate: 3,
            description: ' Hotel Sindbad Sousse has a restaurant, seasonal outdoor swimming pool, a bar and shared lounge in Sousse. Featuring a garden, the hotel is close to several noted attractions, around an 8-minute walk from Thalassa Sousse Beach, half a kilometer from Hammam Sousse Beach and an 11-minute walk from Las Vegas Beach. The property has a 24-hour front desk, room service and currency exchange for guests.',
        },
        {
            id: 7,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/73347792.jpg?k=88fcb8dc71350c8bd7be3434398906cb25b0cc77ba8a1ece76c70c41e8b44bc9&o=',
            name: 'Hasdrubal Prestige Djerba',
            location: 'djerba',
            rate: 5,
            description: ' Located on the Sidi Mahrez beach in Djerba, The Hasdrubal Prestige Thalassa & Spa Djerba offers luxurious 5-star accommodations, a spa and free Wi-Fi.',
        },
        {
            id: 8,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/116043715.jpg?k=a4b1a50e0ee7f355636553068e0818d932a24bc277d1fa58d827fea7ed5d353b&o=',
            name: 'Vincci Helios Beach',
            location: 'djerba',
            rate: 4,
            description: 'This all-inclusive Vincci Hotel is on the western cost of Djerba Island, in southern Tunisian. It has a large outdoor swimming pool, a sunbathing terrace and a beach-side bar. ',
        },
        {
            id: 9,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square200/201479374.jpg?k=a7c022a1acefec1bc1f05ecc51688d62798b97e6b7cac0b368c39e61634271e3&o=',
            name: 'Le Petit Palais & Spa',
            location: 'djerba',
            rate: 3,
            description: ' At the hotel, all rooms are equipped with a balcony with a pool view. Le Petit Palais & Spa has some units with garden views, and the rooms include a terrace. All guest rooms feature a closet.',
        },
    ]);
    const [filter, setFilter] = useState("")
    const [rating , setRating] = useState("")

    const getFilter = (filterValue) => {
        setFilter(filterValue)
    }
    const getRating = (filterRating) => {
        setRating(filterRating)
      }

    return (
        <div >
            
            <div>
                <div style={{ display: 'flex' }}>
                <Filter getFilter={(x) => getFilter(x)} />
                <Rating getRating={(x)=>getRating(x)}/>
            </div>
            <div >
                <HotelList hotels={hotelsr.filter(el => el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) && el.rate >= rating ) } />
                </div>

            </div>
            
        </div>
    );
}
export default Hotelinfo;