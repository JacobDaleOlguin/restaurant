import React from 'react';
import PrivateDining from '../images/PrivateDining.jpg';  // Assuming you have a specific background image for the contact page

const Contact: React.FC = () => {
    return (
        <div className="select-none w-full h-screen flex flex-col items-center justify-center bg-cover bg-left" style={{ backgroundImage: `url(${PrivateDining})`, filter: 'brightness(75%)' }}>
            {/* Remove the semi-transparent overlay for a cleaner look */}
            <div className="text-left w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-10">
                <h1 className="text-7xl font-bold text-gray-700 mb-6 hover:text-amber-600 hover:scale-105 transition-transform duration-300 ease-in-out">
                    Contact Us
                </h1>
                <form className="space-y-6" action="#" method="POST">
                    <input type="text" name="name" className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your Name" />
                    <input type="email" name="email" className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your Email" />
                    <textarea name="message" className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your Message"></textarea>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
