import Nav from "../Navbar/Navbar";
import "../Technology/techbackground.css"
import { useState } from "react"
import data from "../../data.json"

export default function Tech() {
  const [tech] = useState(data.technology)
  const [value, setValue] = useState(0)

  const { name, images, description } = tech[value]

  return (
      <div className="techbackground pb-20"> 
        <Nav />
        <div className="px-8 lg:px-24 text-center md:text-left grid text-white heading5 pt-10 pb-10">
          <div>
            <span>03</span> SPACE LAUNCH 101
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 text-white items-center gap-8">
          {/* <div className="px-8 lg:px-24 lg:col-span-2 grid text-center lg:text-left order-2 md:order-1">
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
                  <div className=" h-2 w-2"></div>
                </button>
              </li>
            ))}
            </ul>
            </div>
          </div>
          <div className="lg:px-8 order-1 md:order-2 h-96 flex justify-center items-center">
            <img src={images.png} alt={name} className=" object-cover h-full"/>
          </div> */}
          <div className="px-8 lg:px-24 lg:col-span-2 text-center lg:text-left order-2 lg:order-1">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div>
                <ul className="flex lg:grid items-center justify-center lg:justify-start gap-5 navtext">
                  {tech.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setValue(index)}
                      className={`border rounded-full text-white ${
                        index === value && "bg-white text-gray-900"
                      }`}
                      >
                      <div className="h-14 w-14 flex justify-center items-center">
                        {index + 1}
                      </div>
                    </button>
                  </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className="navtext">The Terminology...</div>
                <div className="heading2">{name}</div>
                <div className="subheading1">{description}</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img src={require('../../assets/technology/' + images.portrait + '.jpg')} alt={name}
              title={name} className="w-full h-60 object-cover lg:h-full"
            />
          </div>
        </div>
      </div>
   );
}