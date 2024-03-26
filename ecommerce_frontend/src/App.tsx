import React from 'react';
import Logo from './components/Logo';
import { routes } from './router';
import { useRoutes } from 'react-router-dom';


function App() {
const content = useRoutes(routes);

  return (
    <div className="App">
      
      {content}
   
    
    </div>
  );
}

export default App;
