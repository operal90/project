import Nav from "../Navbar/Navbar";
import "../HomePage/background.css"


const Home = () => {

    document.title = `Home`

    return (
      <div className="background">
        <Nav />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 text-white mt-10">
          <div className="px-8 lg:px-24 py-10 lg:py-20 grid">
            <span className="place-self-center text-center lg:text-left ">
            <p className="heading5 light-color">SO, YOU WANT TO TRAVEL TO</p>
            <p className="py-3 heading1">SPACE</p>
            <p className="subheading1">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </span>
          </div>
          <div className="py-5 lg:py-20 grid">
            <span className="h-48 lg:h-52 w-48 lg:w-52 rounded-full cursor-pointer bg-slate-50 hover:outline hover:outline-[30px] hover:outline-[#ffffff20] place-self-center grid ">
              <p className="heading4 place-self-center text-black text-xl lg:text-3xl">Explore</p>
            </span>
          </div>
        </div>

      </div>
    );
}
 
export default Home;