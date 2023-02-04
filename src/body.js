import React from 'react';
import './App.css';

function Body({loc, enableLocation}) {

	

	return (
		<section className="section">
			<div className='head'>	
		    <h1 className='head1'>BOOK YOUR</h1>	
			<h1 className='head2'>PARKING LOTS</h1>	
			<h2 className="head3">Find your nearest parking lot available online and book online to make your journey smooth.</h2>
            {loc ? <button className="btn" onClick={enableLocation}>Location Enabled</button> : <button className="btn" onClick={enableLocation}> Turn on Location </button>}
            </div>
		</section>
	)
}

export default Body
