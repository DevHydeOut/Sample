"use client"

import { useState } from 'react';

// Define the type for each div object
interface Div {
  id: number;
  content: string;
}

const Home: React.FC = () => {
  // State to keep track of divs, typed with an array of Div objects
  const [divs, setDivs] = useState<Div[]>([]);

  // Function to add a new div
  const addDiv = () => {
    const newDiv: Div = { id: divs.length + 1, content: `Div ${divs.length + 1}` };
    setDivs([...divs, newDiv]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dynamic Div Generator</h1>
      
      {/* Button to generate new div */}
      <button onClick={addDiv} style={buttonStyle}>Add Div</button>
      
      {/* Rendering the divs */}
      <div style={containerStyle}>
        {divs.map((div) => (
          <div key={div.id} style={divStyle}>
            {div.content}
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling for the button
const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  margin: '10px 0',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
};

// Styling for the container holding all the divs
const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

// Styling for individual divs
const divStyle: React.CSSProperties = {
  padding: '15px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

export default Home;
