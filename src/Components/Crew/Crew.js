import Nav from "../Navbar/Navbar";
import "../Crew/crewBackground.css"
import { useState } from "react"
import data from "../../data.json"

export default function Crew() {
  const [people] = useState(data.crew)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = people[value]

  return (
      <div className="crewbackground pb-20"> 
        <Nav />
        <div className="px-8 lg:px-24 text-center md:text-left grid text-white heading5 pt-10 pb-10">
          <div>
            <span>02</span> MEET YOUR CREW.
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 text-white items-end gap-8">
          <div className="px-8 lg:px-24 lg:col-span-2 grid text-center lg:text-left order-2 md:order-1">
            <div className="heading5 order-2 md:order-1">{role}</div>
            <div className="heading2 mb-3 order-3 md:order-2">{name}</div>
            <div className="subheading1 mb-10 order-4 md:order-3">{bio}</div>
            <div className="order-1 md:order-4">
            <ul className="flex items-center justify-center lg:justify-start mb-10 gap-5">
            {people.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setValue(index)}
                  className={` bg-white rounded-full ${
                    index === value && "outline outline-offset-2 "
                  }`}
                >
                  <div className="h-2 w-2"></div>
                </button>
              </li>
            ))}
            </ul>
            </div>
          </div>
          <div className="lg:px-8 order-1 md:order-2 h-96 flex justify-center items-center">
            <img src={require('../../assets/crew/' + images.webp + '.webp')} alt={name} title={name} className='h-96'/>
          </div>
        </div>
      </div>
   );
}