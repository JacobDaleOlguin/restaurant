import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Ambience from '../images/Ambience.jpg';
import Food from '../images/Food.jpg';
import Drinks from '../images/Drinks.jpg';
import Bar from '../images/Bar.jpg';
import Entrance from '../images/Entrance.jpg';
import Seating from '../images/Seating.jpg';
import Kitchen from '../images/Kitchen.jpg';
import Chefs from '../images/Chefs.jpg';
import Guests from '../images/Guests.jpg';
import Outdoor from '../images/Outdoor.jpg';
import Events from '../images/Events.jpg';
import PrivateDining from '../images/PrivateDining.jpg';
import Desserts from '../images/Desserts.jpg';
import Specials from '../images/Specials.jpg';
import Staff from '../images/Staff.jpg';
import TableSetting from '../images/TableSetting.jpg';
import Decoration from '../images/Decoration.jpg';
import View from '../images/View.jpg';
import Lobby from '../images/Lobby.jpg';
import Artwork from '../images/Artwork.jpg';

const Gallery: React.FC = () => {
  const galleryCategories = [
    { title: 'Ambience', imgSrc: Ambience },
    { title: 'Food', imgSrc: Food },
    { title: 'Drinks', imgSrc: Drinks },
    { title: 'Bar', imgSrc: Bar },
    { title: 'Entrance', imgSrc: Entrance },
    { title: 'Seating', imgSrc: Seating },
    { title: 'Kitchen', imgSrc: Kitchen },
    { title: 'Chefs', imgSrc: Chefs },
    { title: 'Guests', imgSrc: Guests },
    { title: 'Outdoor', imgSrc: Outdoor },
    { title: 'Events', imgSrc: Events },
    { title: 'Private Dining', imgSrc: PrivateDining },
    { title: 'Desserts', imgSrc: Desserts },
    { title: 'Specials', imgSrc: Specials },
    { title: 'Staff', imgSrc: Staff },
    { title: 'Table Setting', imgSrc: TableSetting },
    { title: 'Decoration', imgSrc: Decoration },
    { title: 'View', imgSrc: View },
    { title: 'Lobby', imgSrc: Lobby },
    { title: 'Artwork', imgSrc: Artwork }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 via-white to-gray-300 p-8">
      <div className="container mx-auto pt-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
        <style>
  {`
    .slick-prev, .slick-next {
      width: 50px; 
      height: 50px; 
      z-index: 3;
    }
    .slick-prev:before, .slick-next:before {
      font-size: 50px; 
      color: darkgray; 
      opacity: 1; 
    }
    .slick-prev {
      left: 10px; 
    }
    .slick-next {
      right: 10px; 
    }
  `}
</style>
        <Slider {...settings}>
          {galleryCategories.map((category) => (
            <div key={category.title}>
              <img
                src={category.imgSrc}
                alt={category.title}
                className="w-full object-cover mx-auto"
                style={{ height: '75vh' }} // Adjust height as necessary
              />
              <h3 className="mt-2 text-center text-lg font-medium text-gray-900">{category.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
