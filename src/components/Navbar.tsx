import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type HoverStatus = {
  home: boolean;
  menu: boolean;
  reservations: boolean;
  gallery: boolean;
  contact: boolean;
  restaurantName: boolean;
};

const Navbar: React.FC = () => {
  // State to manage hover status for each button and the restaurant name
  const [hoverStatus, setHoverStatus] = useState<HoverStatus>({
    home: false,
    menu: false,
    reservations: false,
    gallery: false,
    contact: false,
    restaurantName: false
  });

  const handleMouseEnter = (item: keyof HoverStatus): void => {
    setHoverStatus(prev => ({ ...prev, [item]: true }));
  };

  const handleMouseLeave = (item: keyof HoverStatus): void => {
    setHoverStatus(prev => ({ ...prev, [item]: false }));
  };


  return (
    <nav className="fixed h-10 top-0 left-0 w-full z-30 bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold" style={{ position: 'relative', width: '200px' }}>
        <Link to="/"
          onMouseEnter={() => handleMouseEnter('restaurantName')}
          onMouseLeave={() => handleMouseLeave('restaurantName')}
          className="relative block w-full">
          <span className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoverStatus.restaurantName ? 'opacity-0' : 'opacity-100'}`}>
            Sigdang
          </span>
          <span className={`absolute inset-0 flex justify-center text-amber-600 items-center transition-opacity duration-300 ${hoverStatus.restaurantName ? 'opacity-100' : 'opacity-0'}`}>
            식당
          </span>
        </Link>
      </div>
      <ul className="flex space-x-4">
        {(['home', 'menu', 'reservations', 'gallery', 'contact'] as const).map((item) => (
          <li key={item} className="relative" style={{ width: '100px' }}>
            <Link to={`/${item === 'home' ? '' : item}`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={() => handleMouseLeave(item)}
                  className="flex justify-center items-center w-full">
              <span className={`absolute text-white inset-0 flex justify-center items-center transition-opacity duration-300 ${hoverStatus[item] ? 'opacity-0' : 'opacity-100'}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <span className={`absolute font-bold text-amber-600 inset-0 flex justify-center items-center transition-opacity duration-300 ${hoverStatus[item] ? 'opacity-100' : 'opacity-0'}`}>
                {item === 'home' ? '홈' : item === 'menu' ? '메뉴' : item === 'reservations' ? '예약' : item === 'gallery' ? '갤러리' : '연락처'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
