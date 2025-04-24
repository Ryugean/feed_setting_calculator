'use client';
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";


export default function Home() {
  const [feed, setfeed] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [tpi, setTPI] = useState<string>('20');
  const [rotor, setRotor] = useState<string>('25000');
  const [rotorRPM, setRotorRPM] = useState<string>('...');
  const [delivery, setDelivery] = useState<string>('...');
  const [feedSett, setFeedSett] = useState<string>('...');

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const feedNum = parseFloat(feed);
    const outputNum = parseFloat(output);
    const userTPINum = parseFloat(tpi);
    const rotorRpmNum = parseFloat(rotor);
  
    if ([feedNum, outputNum, userTPINum, rotorRpmNum].some(isNaN)) {
      setRotorRPM("...");
      setDelivery("...");
      setFeedSett("...");
    } else {
      const rotorRpmSetting = (rotorRpmNum * 27) / 25000;
      const deliverySetting = ((rotorRpmNum * 2.54) / (15 * 0.74 * userTPINum) - 94) / 8;
      const difference = 24 / deliverySetting;
      const baseSetting = outputNum * Math.pow(difference, 2);
      const feedSetting = 36 - (0.1 * (baseSetting / feedNum));
  
      setRotorRPM(rotorRpmSetting.toFixed(4));
      setDelivery(deliverySetting.toFixed(4));
      setFeedSett(feedSetting.toFixed(4));
    }
      
  }, [feed, output, tpi, rotor]);


  if(!isLoaded){
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <main>
      <div className="flex flex-col items-center mt-15">
        <div>
          <div className="my-8 text-center">
            <h1 className="font-bold text-6xl text-fuchsia-950">Feed Setting</h1>
            <h1 className="font-bold text-6xl text-fuchsia-950">Calculator</h1>
          </div>

          <div className="text-left w-full max-w-md mx-1"> {/* Added max-w-md for better alignment */}
            <p>Enter the values...</p>
              <Input 
                type="text" 
                placeholder="Enter Feed (Ne)..."
                className="my-1 w-full"
                value = {feed}
                onChange ={(e) => {
                  setfeed(e.target.value);
                }}
              />
              <Input 
                type="text" 
                placeholder="Enter Output (Ne)..." 
                className="my-1 w-full"
                value = {output}
                onChange ={(e) => {
                  setOutput(e.target.value);
                 
                }}
              />
              <Input 
                type="text" 
                placeholder="Enter TPI (Target)..." 
                className="my-1 w-full"
                value = {tpi}
                onChange ={(e) => {
                  setTPI(e.target.value);
         
                }}
              />
              <Input 
                type="text" 
                placeholder="Enter Rotor RPM..." 
                className="my-1 w-full"
                value = {rotor}
                onChange ={(e) => {
                  setRotor(e.target.value);
               
                }}
              />
              
          </div>

          {/* <div className="my-2 mx-1">
            <Button onClick={handleOnClick}>Calculate</Button>
          </div> */}

          <div className="flex flex-col mx-1">
            {/* {rotorRPM && <h1>{rotorRPM}</h1>}
            {delivery && <h1>{delivery}</h1>}
            {feedSett && <h1>{feedSett}</h1>} */}
            <h1>Rotor RPM Setting: <strong>{rotorRPM}</strong></h1>
            <h1>Delivery Setting:  <strong>{delivery}</strong></h1>
            <h1>Feed Setting: <strong>{feedSett}</strong></h1>
          </div>
        </div>
      </div>
    </main>
  )
}
