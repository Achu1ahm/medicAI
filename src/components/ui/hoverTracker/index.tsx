import img from "../../../assets/chatbotbanner.svg"
import "./style.css";

const HoverTracker = () => {
  return (
    <div className="container noselect">
      <div className="canvas">
        {[...Array(25)].map((_, index) => (
          <div key={index} className={`tracker tr-${index + 1}`}></div>
        ))}
        <div id="card">
        <img src={img} alt="Hover Tracker" className="card-image" />
        </div>
      </div>
    </div>
  );
};

export default HoverTracker;
