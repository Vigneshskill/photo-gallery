import React from 'react';
import Navbar from './Navbar';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
import Hero from './Hero';
import Footer from './Footer';
import HeroTwo from './HeroTwo';


function App() {
  return (
    
      <div className="App">
      <Navbar/>
      <FirstRow/>
      <div className="flex flex-row gap-6">
          <SecondRow/>
          <SecondRow/>
          <SecondRow/>
          <SecondRow/>
      </div>
      <ThirdRow/>
      <Hero/>
      <div className="flex m-8 justify-center items-center font-extrabold text-5xl">About Photography !</div>
      <div className="flex m-8 justify-center items-center font-bold text-3xl">“There are always two people in every picture: the photographer and the viewer“</div>
      <HeroTwo/>
      <Footer/>
      
     
    </div>
 
   
  );
}

export default App;