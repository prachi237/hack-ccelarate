import React from 'react';
import Navbar from './navbar.js';
import Body from './body.js';
import About from './about.js';
import './App.css';

function App() {
	return (
		<div>
			<Navbar/>
			<Body/>
			<About/>
			<footer className="footer">
				<p className="text-footer">
					MLH-cellarate 2023
				</p>
			</footer>
		</div>
	)
}

export default App
