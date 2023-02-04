import React from "react";
import mapPic from './Assets/map.png';
import parkingPic from './Assets/parking.jpeg';
import { useState } from "react";

function Map({showModal}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [booked, setBooked] = useState(false)
    const handleSubmit = () => {
      setBooked(true)
    }
    const goBack = () => {
      window.location.href = ''
    }
    return (
        <>
          <img className="map" src={mapPic} width='100%' onClick={showModal}></img>
          <div id="modal" className="modal">
            <div className="modal-content">
              { !booked ? <>
                  <span className="close">&times;</span>
                  <div width="100%" style={{display: 'flex'}}>
                    <div style={{marginRight: '3vw'}}>
                      <p>
                        Forum Galleria Mall
                        <br/>
                        Parking Slots Available: 7
                      </p>
                      <input required type='Name' value={name} onChange={e=>setName(e.target.value)} placeholder="Enter Your Name"/><br />
                      <input required type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Your Email"/><br />
                      <input required type='phone' placeholder="Enter Your Phone"/><br />
                      <button className="bookBtn" onClick={handleSubmit}>Book Slot</button>
                    </div>
                    <div>
                      <img src={parkingPic} width="70%"/>
                    </div>
                  </div>
                </>
                : <>
                  <p>
                    Slot Booked for {name}
                    <br/>
                    You'll receive booking confirmation on your email {email} shortly.
                  </p>
                  <button style={{marginLeft: '26vw'}} className="bookBtn" onClick={goBack}>Go Back</button>
                </>
              }
            </div>
          </div>
        </>
    );
}

export default Map;