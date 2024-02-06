import "./index.css";
import data from "../../../Json/data.json";
import { SocialIcon } from "react-social-icons";
import Snowfall from "react-snowfall";
function TitleSection() {
  return (
    <div className="fullpage h-screen bg-blue-900 grid content-center space-y-4">
      <Snowfall />

      <div className="parent__title">
        <h1 className="title text-5xl">{data.title}</h1>
      </div>

      <div className="information  text-3xl">
        <h2>{data.subtitle}</h2>
      </div>

      <div className="Social__icons ">
        {Object.keys(data.links).map((key) => {
          return <SocialIcon className="m-2" url={data.links[key]} />;
        })}
      </div>
      <div className="parent__button text-center">
        <button className="button-13">
          <a href="#section2">about me</a>
        </button>
      </div>
    </div>
  );
}

export default TitleSection;
