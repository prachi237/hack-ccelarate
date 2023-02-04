import React from 'react';
import Navbar from './navbar.js';
import Body from './body.js';
import About from './about.js';
import Map from './map.js';
import './App.css';
import { useState } from 'react';

function App() {
	const [loc, setLoc] = useState(null);
	const [isMap, setIsMap] = useState(false);

	const enableLocation = () => {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((pos) => {
				setLoc({
					lat: pos.coords.latitude,
					lng: pos.coords.longitude
				})
			}, () => {
				alert('Location Permission Denied');
			})
		}else{
			alert('Browser does not support geolocation');
		}
	}

	const showModal = () => {
		var modal = document.getElementById("modal");
		var span = document.getElementsByClassName("close")[0];
		modal.style.display = "block";
		span.onclick = () => {
			modal.style.display = "none";
		}
		window.onclick = (e) => {
			if (e.target == modal) {
			  	modal.style.display = "none";
			}
		}		  
	}

	return (
		<div>
			{ !isMap ?
				<>
					<Navbar loc={loc} setIsMap={setIsMap}/>
					<Body loc={loc} enableLocation={enableLocation}/>
					<About/>
					<footer className="footer">
						<p className="text-footer">
							Hack-ccelerate 2023
						</p>
					</footer>
				</>
				:
				<Map showModal={showModal}/>
			}
		</div>
	)
}

export default App
