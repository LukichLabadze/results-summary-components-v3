import "./Summary.css"
import Reaction  from "../assets/icon-reaction.svg"
import Memory  from "../assets/icon-memory.svg"
import Verbal  from "../assets/icon-verbal.svg"
import Visual  from "../assets/icon-visual.svg"

export default function Summary(props){

  const items = props.items || []; 

  const icons = {
    Reaction: Reaction,
    Memory: Memory,
    Verbal: Verbal,
    Visual: Visual
  };

  const colors = {
  Reaction: "hsl(0, 100%, 95%)",   // light red
  Memory: "hsl(39, 100%, 95%)",    // light yellow
  Verbal: "hsl(166, 100%, 95%)",   // light green
  Visual: "hsl(234, 85%, 95%)"     // light blue
};

  

return (
       <div className="summary">
      <h2>Summary</h2>

      <div className="container">
        {items.map((item, index) => (
          <div 
          key={index} 
          className="summary-item"
           style={{ backgroundColor: colors[item.category] }}
          >
            <div className="summary-item-inside">
              <img src={icons[item.category]} alt={`${item.category} icon`} />

              <p className="category">{item.category}</p>
            </div>
            <p className="scores"><span className="score">{item.score}</span> / 100</p>
          </div>
        ))}
      </div>

      <button>Continue</button>
    </div>
)
}