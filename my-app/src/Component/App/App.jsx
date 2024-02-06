import "./App.css";
import data from "../../Json/data.json";
import TitleSection from "../screen/TitleSection/TitleSection";
import Aboutme from "../screen/AboutSection";
function App() {
  return (
    <div className="App ">
      <TitleSection />
      <Aboutme />
     

      <div className="fullpage__third  fullpage h-screen bg-red-500 flex  space-y-4">
        <div className="matter "></div>
        {data.section[1].items.map((key) => {
          return (
            <div className="cards__wrapper mx-5  space-y-10">
              <div className="image__skill">
                <img src={key.image} alt="" />
              </div>
              <div>
                <h1 className="text-2xl">{key.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
