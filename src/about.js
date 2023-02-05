import React from 'react';
import about from './Assets/about.png';
import './App.css';

function About() {
	return (
		<section className='about'>
            <div className='ap'>
             <h1 className='ab'>About Parkify</h1>
             <div className="para">It overcomes the problem of finding a parking space in commercial areas that unnecessary consumes time. Hence this project offers a web based reservation system where users can view various parking areas and select the space to view whether space is available or not. If the booking space is available then he can book it for specific time slot. The booked space will be marked yellow and will not be available for anyone else for the specified time. This system provides an additional feature of cancelling the bookings. User can cancel their books space anytime. Users can even make payment online via credit card. After making payment users are notified about the booking via email along with unique parking number.</div>
           </div>
           <div>
             <img className="aboutP" src={about}/>
           </div>
        </section>
            )
}

export default About
