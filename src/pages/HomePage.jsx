// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import carImage1 from '../assets/images/car1.jpg';
import carImage2 from '../assets/images/car2.jpg';
import carImage3 from '../assets/images/car3.jpg';
import carImage4 from '../assets/images/car4.jpg';
import carImage5 from '../assets/images/car5.jpg';
import carImage6 from '../assets/images/car6.jpg';

const HomePage = () => {
  const featuredCars = [
    { id: 1, make: 'Toyota', model: 'RAV 4', version: '2.0 D-4D Active', year: 2020, mileage: 45000, price: 25000, image: carImage1 },
    { id: 2, make: 'Audi', model: 'A4', version: '2.0 TDI Sport', year: 2019, mileage: 52000, price: 28500, image: carImage2 },
    { id: 3, make: 'BMW', model: 'X1', version: 'sDrive 16d', year: 2021, mileage: 38000, price: 32000, image: carImage3 },
    { id: 4, make: 'Mercedes-Benz', model: 'CLS', version: '350 CGI', year: 2018, mileage: 60000, price: 45000, image: carImage4 },
    { id: 5, make: 'Renault', model: 'Megane', version: '1.5 dCi Energy Intens', year: 2020, mileage: 35000, price: 18000, image: carImage5 },
    { id: 6, make: 'Peugeot', model: '308', version: '1.6 e-HDi Business-Line', year: 2019, mileage: 48000, price: 16500, image: carImage6 },
  ];

  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-xl shadow-lg overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Europe's Largest Wholesale Platform for Used Cars
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with thousands of dealers, buy and sell cars efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition duration-300 shadow-md"
            >
              Join Now
            </Link>
            <Link
              to="/cars"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition duration-300"
            >
              Browse Cars
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">3,000+</h3>
              <p className="text-gray-600 text-sm md:text-base">Cars Added Daily</p>
            </div>
            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">30,000+</h3>
              <p className="text-gray-600 text-sm md:text-base">Cars in Stock</p>
            </div>
            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">60,000+</h3>
              <p className="text-gray-600 text-sm md:text-base">Active Dealers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Latest Additions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{car.make} {car.model} {car.version}</h3>
                  <p className="text-gray-600 text-sm mb-3">Year: {car.year} | Mileage: {car.mileage.toLocaleString()} km</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-bold text-blue-700">€{car.price.toLocaleString()}</span>
                    <Link
                      to={`/car/${car.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm px-3 py-1 rounded border border-blue-600 hover:bg-blue-50"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/cars"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow hover:shadow-md"
            >
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Grow Your Business with CarTrade Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                Buying Cars
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                <li>Browse our extensive inventory of 30,000+ cars.</li>
                <li>Filter by make, model, price, mileage, and more.</li>
                <li>Participate in live auctions or make direct offers.</li>
                <li>Secure transactions with full documentation.</li>
              </ul>
              <Link to="/cars" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Selling Cars
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-4">
                <li>List your car quickly and easily.</li>
                <li>Reach over 60,000 active dealers.</li>
                <li>Sell within 24 hours for top market prices.</li>
                <li>We handle transport and paperwork.</li>
              </ul>
              <Link to="/add-car" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;