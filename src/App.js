import React, { useState } from 'react';
import gift from "./giftbox.png"
import ambulance from "./ambulance.png"
import firetruck from "./firetruck.png"
import train from "./train.png"
import money from "./200-kr.jpg"
import './App.css';
import Typing from 'react-typing-animation';
import RainbowText from 'react-rainbow-text';
import Sparkle from 'react-sparkle'


function App() {

  const [clicked, setClicked] = useState(false);
  const [giftClicked, setGiftClicked] = useState(false);

  return (
    <div className="main">
      {giftClicked &&
          <React.Fragment>
            <Sparkle />
            <Sparkle />
              </React.Fragment>
          }
      {!clicked && 
      <div id="step-1">
        <Typing speed={100} className="ailo-entry">
          <Typing.Delay ms={1500} />
          <span className="ailo-style">Hei, </span>
          <Typing.Delay ms={1000} />
          <span className="ailo-style">Ailo.</span>
        </Typing>
        <button className="press-me" onClick={() => setClicked(true)}>Trykk her</button>
      </div>}
      {clicked && 
      <div id="step-2">
        <span className="ailo-style">Ailo 4 år</span>
        <div className="happy-birthday">
        <RainbowText lightness={0.7} saturation={0.9}>
          Gratulerer med dagen!
        </RainbowText>
        </div>
        {!giftClicked &&
          <div className="gift-div">
            <div onClick={() => setGiftClicked(true)}>
            <img className="gift" src={gift}/>
            </div>
            <p className="arrow-text">← Trykk for å åpne gaven!</p>
          </div>
        }

        {giftClicked &&
          <div>
            <img className="money" src={money} />
            <img className="small-gift gift-1" src={gift} />
            <img className="small-gift2 gift-2" src={gift} />
            <img className="gift-3" src={gift} />
            <img className="small-gift gift-4" src={gift} />
            <img className="small-gift gift-5" src={gift} />

            <img className="car-to-right car ambulance" src={ambulance} />
            <img className="car-to-right2 car firetruck" src={firetruck} />
            <img className="car-to-left car train" src={train} />

          </div>
        }
        <div className="from">Kos og klem, <br/> hilsen tante Sigrid</div>
      </div>
}
    </div>
  );
}

export default App;
