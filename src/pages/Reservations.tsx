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
      <div className="flex justify-center items-center min-h-screen bg-white bg-cover bg-left" style={{ backgroundImage: `url(${heroReservationsalt})` }}>
        <div className="container mx-auto bg-gray-300 opacity-95 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl text-black font-bold mb-4">Book Your Table</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Submit Reservation
                </button>
              </form>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl text-black font-bold mb-4">Select a Date and Time</h3>
              <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date, view }) => date < new Date() ? 'text-gray-500 bg-gray-200' : ''}
              />
              <div className="mt-4">
                {date >= new Date() && (
                  <div>
                    <h4 className="text-xl text-black font-bold mb-2">Available Times</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map(time => (
                        <button
                          key={time}
                          className={`px-4 py-2 rounded-lg shadow-md text-white ${selectedTime === time ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}
                          onClick={() => setSelectedTime(time)}
                          disabled={date < new Date()}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Reservation;
  