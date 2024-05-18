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
  const [hoverState, setHoverState] = useState<Record<Category, boolean>>({ Appetizers: false, Mains: false, Desserts: false });

  return (
    <div className="select-none w-full h-screen flex items-center pt-10 justify-center bg-cover bg-left min-w-max"
         style={{ backgroundImage: `url(${heroMenu})`, backgroundBlendMode: 'darken' }}>
      <div className="p-5 text-white">
        <h1 className="text-4xl font-bold text-center mb-10 shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>Menu</h1>
        {Object.entries(dishes).map(([category, items], index) => (
          <div key={index} className="mb-5">
            <h2 className="text-3xl font-semibold py-2 bg-gray-600 bg-opacity-70 rounded-lg shadow-md text-center"
                style={{
                  textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
                  border: hoverState[category] ? '4px solid #F59E0B' : 'none'
                }}
                onMouseEnter={() => setHoverState({ ...hoverState, [category]: true })}
                onMouseLeave={() => setHoverState({ ...hoverState, [category]: false })}
            >
              <span style={{ color: hoverState[category] ? '#F59E0B' : 'inherit' }}>
                {hoverState[category] ? translations[category] : category}
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
