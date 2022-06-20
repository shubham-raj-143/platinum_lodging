// npm install react-router-dom 
// npm start

import React from 'react';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import ImageGallery from './components/Pages/ImageGallery';
import FeedBack from 'react-feedback-popup';
import Navbar from './components/inc/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/imageGallery" element={<ImageGallery/>}/>
      </Routes>
    </div>
    <div>
			
			<FeedBack
				style={{zIndex:'2', marginLeft:'20px', position:'fixed'}}
				position="left"
				numberOfStars={5}
				headerText="Villa David Chipperfield Nord"
				bodyText="Please fill the details"
				buttonText="Give Feedback"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => 
					fetch('xxxxxx', {
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						method: 'POST', // or 'PUT'
						body: JSON.stringify(data),
					}).then((response) => { 
						if (!response.ok) {
							return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!');
					}).catch((error) => {
						alert('Our servers are having issues! We couldn\'t send your feedback!', error);
					})
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
		</div>
  </Router>
    
  
  );
}

export default App;
