import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import heroReservationsalt from '../images/heroReservationsalt.jpg';

const Reservation: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const times = ['12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];

    const handleDateChange = (newDate: Date | Date[]) => {
      setDate(newDate as Date);
      setSelectedTime(''); // Reset time when date changes
    };

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      alert(`Reservation request submitted for ${name} on ${date.toLocaleDateString()} at ${selectedTime}. We will contact you at ${email} or ${phone} to confirm.`);
    };

    return (
      <div className="select-none w-full min-h-screen flex items-center justify-center bg-cover bg-left" style={{ backgroundImage: `url(${heroReservationsalt})`, filter: 'brightness(75%)' }}>
        <div className="text-left w-1/3 p-10 bg-white bg-opacity-75 rounded-lg shadow-lg">
          <h1 className="text-7xl font-bold text-gray-700 mb-6 hover:text-amber-600 hover:scale-105 transition-transform duration-300 ease-in-out">
            Book Your Table
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-lg border-gray-300 rounded-md p-4" required />
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-lg border-gray-300 rounded-md p-4" required />
            <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your Phone" className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-lg border-gray-300 rounded-md p-4" required />
            <Calendar onChange={handleDateChange} value={date} className="mt-6" />
            <div className="mt-4">
              <h4 className="text-xl font-bold text-gray-700">Select a Time</h4>
              <div className="grid grid-cols-3 gap-2">
                {times.map(time => (
                  <button
                    key={time}
                    className={`px-4 py-2 rounded-lg shadow-md text-white ${selectedTime === time ? 'bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'}`}
                    onClick={() => setSelectedTime(time)}
                    disabled={date < new Date()}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              Submit Reservation
            </button>
          </form>
        </div>
      </div>
    );
};

export default Reservation;
