import Navbar from "./components/Navbar";
import { cardItems } from "./content/content";
import FlipCard from "./components/FlipCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      {cardItems.map((item) => {
        return (
          <div key={item.id} className="">
            <FlipCard {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
