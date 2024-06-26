import React from 'react';
import heroHome from '../images/heroHome.jpg';

const Home: React.FC = () => {
    return(
        <div className="select-none w-full h-screen flex items-center pt-10 justify-center bg-cover bg-left" style={{ backgroundImage: `url(${heroHome})` }}>
            <div className="text-left italic min-w-min p-4 absolute top-28 left-5">
                <h1 className="text-7xl w-1/6 font-bold text-gray-600 transition-transform duration-400 ease-in-out hover:text-amber-600 hover:scale-105 hover:-skew-x-6">
                서명에 오신 것을 환영합니다
                </h1>
            </div>
        </div>
    );
};

export default Home
