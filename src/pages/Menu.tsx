import React, { useState } from 'react';
import heroMenu from '../images/heroMenu.jpg';

// Define a type for the category keys
type Category = 'Appetizers' | 'Mains' | 'Desserts';

// Ensure the dishes object keys match the Category type
const dishes: Record<Category, { name: string; description: string; price: string }[]> = {
  Appetizers: [
    { name: 'Kimchi Jeon', description: 'Savory pancake with kimchi.', price: '5.99' },
    { name: 'Mandu', description: 'Korean dumplings filled with meat and vegetables.', price: '6.99' }
  ],
  Mains: [
    { name: 'Bibimbap', description: 'Rice with mixed vegetables, meat, egg, and gochujang.', price: '12.99' },
    { name: 'Bulgogi', description: 'Marinated beef cooked with a mixture of soy sauce, sugar, and pear juice.', price: '15.99' }
  ],
  Desserts: [
    { name: 'Bingsu', description: 'Shaved ice with sweet toppings.', price: '9.99' }
  ]
};

// Ensure the translations object keys match the Category type
const translations: Record<Category, string> = {
  Appetizers: '애피타이저',
  Mains: '메인 요리',
  Desserts: '디저트'
};

const Menu: React.FC = () => {
  const [hoverAppetizers, setHoverAppetizers] = useState(false);
  const [hoverMains, setHoverMains] = useState(false);
  const [hoverDesserts, setHoverDesserts] = useState(false);

  const getHoverState = (category: Category) => {
    if (category === 'Appetizers') return hoverAppetizers;
    if (category === 'Mains') return hoverMains;
    if (category === 'Desserts') return hoverDesserts;
  };

  const setHoverState = (category: Category, state: boolean) => {
    if (category === 'Appetizers') setHoverAppetizers(state);
    if (category === 'Mains') setHoverMains(state);
    if (category === 'Desserts') setHoverDesserts(state);
  };

  return (
    <div className="select-none pt-24 w-full min-h-screen flex items-center justify-center bg-cover bg-left" style={{ backgroundImage: `url(${heroMenu})`, filter: 'brightness(75%)' }}>
      <div className="text-left w-1/3 p-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="text-7xl font-bold text-gray-700 mb-6 hover:text-amber-600 hover:scale-105 transition-transform duration-300 ease-in-out">
          Menu
        </h1>
        {Object.entries(dishes).map(([category, items]) => (
          <div key={category} className="mb-5">
            <h2 className="text-3xl font-semibold py-2 bg-gray-600 bg-opacity-70 rounded-lg shadow-md text-center"
                style={{
                  textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
                  border: getHoverState(category as Category) ? '4px solid #F59E0B' : 'none'
                }}
                onMouseEnter={() => setHoverState(category as Category, true)}
                onMouseLeave={() => setHoverState(category as Category, false)}
            >
              <span style={{ color: getHoverState(category as Category) ? '#F59E0B' : 'inherit' }}>
                {getHoverState(category as Category) ? translations[category as Category] : category}
              </span>
            </h2>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((dish, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-200 backdrop-blur-lg bg-opacity-50 text-black">
                  <h3 className="text-2xl shadow">{dish.name}</h3>
                  <p className="mb-1">{dish.description}</p>
                  <span className="font-bold">{dish.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
