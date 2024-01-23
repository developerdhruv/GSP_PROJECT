import React from 'react'
import '../App.css'


const Temp = () => {
    const weatherData = {
        temperature: 25,
        description: 'Sunny',
        location: 'New York',
    };

    return (
        <div>
            <div className="weather-card">
            <h2 className='hag'>{weatherData.location}</h2>
            <p className='ptag'>{weatherData.temperature}°C</p>
            <p className='ptag'>{weatherData.description}</p>
            </div>

            <div>
            <iframe className='rgbr' src="https://data.worldbank.org/share/widget?indicators=EN.ATM.GHGT.KT.CE" width='300' height='300' frameBorder='0' scrolling="no" ></iframe>
            
            </div>
        </div>
    );
};

export default Temp
