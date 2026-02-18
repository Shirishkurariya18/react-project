import { Link } from "react-router-dom";
import MensWear from "./MensWear";
import WomensWear from "./WomensWear";

const CenterWithVideo = () => {

  return (
   <div className="video-page">

   
      <div className="center-content">
        <div className="buttons-left">
         <Link to={'/MensWear'} >
          <button>Men's wear</button>
          </Link>
          <Link to={'/WomensWear'} >
          <button>Womens wear</button>
          </Link>
          <Link to={'/Stationary'} >
          <button>stationery</button>
          </Link>
          <Link to={'/Gift'} >
          <button>Gift gallery</button>
          </Link>
        </div>

        <div className="buttons-right">
          <Link to={'/Furnitures'}>
          <button>furnitures</button>
          </Link>
          <Link to={'/Chai'}>
          <button>chai nasta</button>
          </Link>
         <Link to={'/Electronics'}>
          <button>Electronics</button>
          </Link>
          <Link to={'/Vichels'}>
          <button>vichels</button>
          </Link>
        </div>
      </div>
      </div>
    
  );
};


export default CenterWithVideo;
