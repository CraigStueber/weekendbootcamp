import React from 'react';


function App() {
  const greeting = {
    greeting_one: 'Hello',
    greeting_two: 'World'
  };
  
  
  return (

    <div>
      <h1>{greeting.greeting_one} {greeting.greeting_two}</h1>
    </div>
  );
}

export default App;
