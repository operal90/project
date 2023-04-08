import Nav from "../Navbar/Navbar";
import "../Destination/destinationBackground.css"
import { useState } from "react"
import data from "../../data.json"

export default function Destination() {
  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
      <div className="destbackground pb-20"> 
        <Nav />
        <div className="px-8 lg:px-24 text-center lg:text-left grid text-white heading5 pt-10 pb-5">
          <div>
            <span>01</span> PICK YOUR DESTINATION
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 text-white px-10">
          <div className="px-10 lg:px-24 grid">
            <span className="place-self-center p-10">
            <img src={require('../../assets/destination/' + images.webp + '.webp')} alt={name}
              title={name}
            />
            </span>
          </div>
          <div className="lg:px-8">
            <ul className="flex items-center justify-center md:justify-start mb-10 gap-5 navtext">
            {planets.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setValue(index)}
                  className={`pb-2 border-b border-transparent ${
                    index === value && "border-b border-white"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        
            <div className="mt-5">
               <div className="heading2 text-center lg:text-left">{name}</div>
               <div className="subheading1 text-center lg:text-left">{description}</div>
               
               <div className="py-8 opacity-30"> <hr /> </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="grid justify-self-center lg:justify-self-start text-center lg:text-start">
                     <div className="subheading2 opacity-50">AVG. DISTANCE</div>
                     <div className="heading4">{distance}</div>
                  </div>
                  <div className="grid justify-self-center lg:justify-self-start text-center lg:text-start">
                     <div className="subheading2 opacity-50">EST. TRAVEL TIME</div>
                     <div className="heading4">{travel}</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
   );
}