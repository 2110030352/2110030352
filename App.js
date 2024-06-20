import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [average, setAverage] = useState(null);

    const handleClick = async (numberId) => {
        try {
            const response = await axios.post(`http://localhost:5000/numbers/${numberId}`);
            const { numbers, average } = response.data;
            setAverage(average);
            console.log(numbers); // Use numbers in your UI as needed
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="App">
            <h1>Average Calculator</h1>
            <button onClick={() => handleClick('r')}>Random Numbers</button>
            <button onClick={() => handleClick('p')}>Prime Numbers</button>
            <button onClick={() => handleClick('e')}>Even Numbers</button>
            <button onClick={() => handleClick('f')}>Fibonacci Numbers</button>
            {average !== null && (
                <p>Average: {average}</p>
            )}
        </div>
    );
}

export default App;
