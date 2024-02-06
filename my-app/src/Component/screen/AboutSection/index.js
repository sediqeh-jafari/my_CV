import data from "../../../Json/data.json";
import "./style.css"
export default function Aboutme() {
  return (
    <div id="section2">
      <div className="fullpage h-screen bg-green-700 flex justify-center  items-center space-x-6">
      <div className="Aboutme__img w-30 h-30  ">
            <img className=" rounded-full" src="images/nilo.png" alt="this picnilo" />
        </div>
       
        <div className="Aboutme__text  w-2/4 h-50">
          <h2 className="text-3xl">{data.section[0].title}</h2>
          <p className="text-xl">{data.section[0].items[0].content}</p>
        </div>

        
      </div>
    </div>
  );
}
